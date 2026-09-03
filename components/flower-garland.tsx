import flower00 from "@/app/graphics/flower_00.png";
import flower01 from "@/app/graphics/flower_01.png";
import flower02 from "@/app/graphics/flower_02.png";
import flower03 from "@/app/graphics/flower_03.png";
import flower04 from "@/app/graphics/flower_04.png";
import flower05 from "@/app/graphics/flower_05.png";
import flower06 from "@/app/graphics/flower_06.png";
import flower07 from "@/app/graphics/flower_07.png";
import flower08 from "@/app/graphics/flower_08.png";
import flower09 from "@/app/graphics/flower_09.png";
import flower10 from "@/app/graphics/flower_10.png";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import type { CSSProperties } from "react";

type Flower = {
  depthOffset?: number;
  image: StaticImageData;
  scale: number;
};

type FlowerParticle = Flower & {
  densityTier: "base" | "medium" | "tall";
  mirrored: boolean;
  rotation: number;
  scale: number;
  x: number;
  y: number;
  zIndex: number;
};

// The base bouquet contains 42 sprites on each side. Taller viewports reveal
// the remaining tiers, increasing the count to 54 and then 64 per side.
export const FLOWER_GARLAND_DENSITY = 64;

// Keep these factors explicit: they are the starting point for species-specific
// sizing as the garland art direction develops.
const flowers: Flower[] = [
  { image: flower00, scale: 1 },
  { image: flower01, scale: 0.7 },
  { image: flower02, scale: 1 },
  { image: flower03, scale: 1 },
  { image: flower04, scale: 1 },
  { image: flower05, scale: 0.5 },
  { image: flower06, scale: 1 },
  { image: flower07, scale: 1 },
  { image: flower08, scale: 0.4, depthOffset: 12 },
  // The thistle's long stem extends far beyond its placement anchor, so keep
  // it behind nearby petals even when its anchor would otherwise be in front.
  { image: flower09, scale: 0.7, depthOffset: 12 },
  { image: flower10, scale: 0.7 },
];

function seededRandom(seed: number) {
  let state = seed >>> 0;

  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 2 ** 32;
  };
}

function createParticles(
  seed: number,
  density: number,
  side: "left" | "right",
): FlowerParticle[] {
  const random = seededRandom(seed);
  // Keep flower heads in the upper, inward-facing quadrant: upright through
  // fully inward, never toward the bottom of the page.
  const inwardRotation = side === "left" ? 1 : -1;
  const baseParticleCount = Math.min(density, 42);
  const mediumParticleCount = Math.min(Math.max(density - 42, 0), 12);
  const tallParticleCount = Math.max(density - 54, 0);

  const particles = Array.from({ length: density }, (_, index) => {
    const flower = flowers[Math.floor(random() * flowers.length)];
    let densityTier: FlowerParticle["densityTier"];
    let progress: number;

    // Each visible tier spans the complete height. Extra viewport-height tiers
    // fill gaps between the base particles instead of only extending upward.
    if (index < baseParticleCount) {
      densityTier = "base";
      progress = index / Math.max(baseParticleCount - 1, 1);
    } else if (index < baseParticleCount + mediumParticleCount) {
      densityTier = "medium";
      progress = (index - baseParticleCount + 0.35) / mediumParticleCount;
    } else {
      densityTier = "tall";
      progress =
        (index - baseParticleCount - mediumParticleCount + 0.65) /
        tallParticleCount;
    }
    // Stratify the vertical placement so the bouquet is dense at its base and
    // gradually thins toward the top. A small seeded offset keeps it organic.
    const y = 100 - progress ** 1.8 * 94 + (random() - 0.5) * 7;
    // The golden-ratio progression avoids accidental horizontal piles while
    // its small seeded offset preserves the hand-arranged feel.
    const x =
      12 + ((index * 0.61803398875 + random() * 0.18) % 1) * 76;

    return {
      ...flower,
      mirrored: random() > 0.5,
      rotation: inwardRotation * Math.round(random() * 90),
      densityTier,
      scale: flower.scale * (0.58 + random() * 0.45),
      x,
      // This curve concentrates sprites at the bottom edge of the bouquet.
      y,
      zIndex: 0,
    };
  });

  const uppermostIndex = particles.reduce(
    (current, particle, index) =>
      particle.y < particles[current].y ? index : current,
    0,
  );

  // Give each margin a composed upward finish with a small seeded variation.
  particles[uppermostIndex].rotation = Math.round(random() * 10 - 5);

  // Give every sprite a unique depth. A lower numeric Y (higher on screen)
  // normally receives the higher z-index; species offsets accommodate sprites
  // whose stems extend much farther than their placement anchor.
  return particles
    .sort(
      (first, second) =>
        second.y + (second.depthOffset ?? 0) -
        (first.y + (first.depthOffset ?? 0)),
    )
    .map((particle, index) => ({ ...particle, zIndex: index + 1 }));
}

function FlowerColumn({
  density,
  side,
  seed,
}: {
  density: number;
  side: "left" | "right";
  seed: number;
}) {
  const particles = createParticles(seed, density, side);

  return (
    <div className={`flower-column flower-column-${side}`}>
      {particles.map((flower, index) => {
        const style = {
          "--flower-scale": flower.scale,
          "--flower-rotation": `${flower.rotation}deg`,
          "--flower-x": `${flower.x}%`,
          "--flower-y": `${flower.y}%`,
          zIndex: flower.zIndex,
        } as CSSProperties;

        return (
          <div
            className="flower-sprite"
            data-density-tier={flower.densityTier}
            data-mirrored={(index + seed) % 2 === 0}
            key={`${side}-${index}`}
            style={style}
          >
            <Image
              alt=""
              aria-hidden="true"
              draggable={false}
              quality={70}
              sizes="(max-width: 640px) 11rem, 19rem"
              src={flower.image}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function FlowerGarland({
  density = FLOWER_GARLAND_DENSITY,
}: {
  density?: number;
}) {
  // A fixed seed makes a given density repeat exactly across renders.
  return (
    <div aria-hidden="true" className="flower-garland">
      <FlowerColumn density={density} seed={20270501} side="left" />
      <FlowerColumn density={density} seed={20270502} side="right" />
    </div>
  );
}
