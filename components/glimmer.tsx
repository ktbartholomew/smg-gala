"use client";

import { useEffect, useRef } from "react";
import styles from "./glimmer.module.css";

type GlimmerBall = {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  speed: number;
  angle: number;
  ellipse: {
    width: number;
    height: number;
    angle: number;
  };
};

// The max radius of a ball. Each one is randomly scaled to be a percentage of
// this max size.
const baseRadius = 32;

const drawCircle = (ctx: CanvasRenderingContext2D, ball: GlimmerBall) => {
  // The radius of the ball
  const radius = baseRadius * ball.scale;

  // The center of the ball's elliptical path in pixels
  const xPercent = (ball.x / 100) * ctx.canvas.width;
  const yPercent = (ball.y / 100) * ctx.canvas.height;

  // The current position of the ball around its elliptical path
  const ellipseX = ball.ellipse.width * Math.cos(ball.angle);
  const ellipseY = ball.ellipse.height * Math.sin(ball.angle);

  // Rotate the elliptical path by a specified angle
  const rotatedX =
    xPercent +
    (ellipseX * Math.cos(ball.ellipse.angle) -
      ellipseY * Math.sin(ball.ellipse.angle));
  const rotatedY =
    yPercent +
    (ellipseX * Math.sin(ball.ellipse.angle) +
      ellipseY * Math.cos(ball.ellipse.angle));

  // Draw the ball
  ctx.beginPath();
  ctx.fillStyle = `rgba( 127 163 191 / ${ball.opacity})`;
  ctx.globalCompositeOperation = "color-dodge";
  ctx.arc(rotatedX, rotatedY - window.scrollY * 0.04, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
};

function draw(ctx: CanvasRenderingContext2D, balls: GlimmerBall[]) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  balls.forEach((b) => {
    drawCircle(ctx, b);
  });

  balls.forEach((shape) => {
    shape.angle += shape.speed; // Increment angle to move along the ellipse
    shape.angle %= Math.PI * 2; // Keep angle within 0 to 2π
  });

  requestAnimationFrame(() => {
    draw(ctx, balls);
  });
}

export default function Glimmer() {
  const field = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!field.current) {
      return;
    }

    const ctx = field.current.getContext("2d");
    if (!ctx) {
      return;
    }

    field.current.width = window.innerWidth;
    field.current.height = window.innerHeight;

    const balls: GlimmerBall[] = [];
    for (let i = 0; i < 100; i++) {
      let scale = Math.random();
      balls.push({
        x: 10 + Math.random() * 80,
        y: Math.random() * 100,
        scale,
        opacity: (1 - scale) * 0.5,
        speed: Math.random() * 0.003,
        angle: Math.random() * Math.PI * 2,
        ellipse: {
          width: 40 + Math.random() * 60,
          height: 40 + Math.random() * 60,
          angle: 0,
        },
      });
    }

    window.addEventListener("resize", () => {
      if (!field.current) {
        return;
      }

      field.current.width = window.innerWidth;
      field.current.height = window.innerHeight;
    });

    requestAnimationFrame(() => {
      draw(ctx, balls);
    });
  }, [field]);

  return (
    <canvas ref={field} className={`${styles.field} hidden md:block`}></canvas>
  );
}
