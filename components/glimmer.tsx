"use client";

import { useEffect, useRef } from "react";
import styles from "./glimmer.module.css";

export interface BubbleColumnOptions {
  x: number; // Column center X (px)
  canvasHeight: number; // Canvas height (px)
  radius?: number; // Bubble radius (px), same for all in column
  count?: number; // Number of bubbles in the column
  speed?: number; // Upward speed (px/sec) for all bubbles
  historyLimit?: number; // Max frames to keep in history
  fillStyle?: string; // Fill style
  strokeStyle?: string; // Stroke style
  lineWidth?: number; // Stroke width
}

export interface BubblePosition {
  x: number;
  y: number;
}

export interface FrameSnapshot {
  time: number; // DOMHighResTimeStamp
  positions: BubblePosition[];
}

export class BubbleColumn {
  public x: number;
  private h: number;
  private radius: number;
  private count: number;
  private speed: number;
  private historyLimit: number;
  private fillStyle: string;
  private strokeStyle: string;
  private lineWidth: number;

  private bubbles: BubblePosition[] = [];
  private history: FrameSnapshot[] = [];

  constructor(opts: BubbleColumnOptions) {
    const {
      x,
      canvasHeight,
      radius = 8,
      count = 10,
      speed = 60,
      historyLimit = 1000,
      fillStyle = `rgba(198 174 133 / 0.2)`,
      strokeStyle = "rgba(198 174 133 / 0.4)",
      lineWidth = 1,
    } = opts;

    if (typeof x !== "number" || typeof canvasHeight !== "number") {
      throw new Error("BubbleColumn requires numeric x and canvasHeight.");
    }

    this.x = x;
    this.h = canvasHeight;
    this.radius = radius;
    this.count = Math.max(0, Math.floor(count));
    this.speed = speed;
    this.historyLimit = Math.max(0, Math.floor(historyLimit));
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
    this.lineWidth = lineWidth;

    const gap = (this.h + 2 * this.radius) / (this.count || 1);
    for (let i = 0; i < this.count; i++) {
      const y = this.h + this.radius - i * gap + Math.random() * gap * 0.2;
      this.bubbles.push({ x: this.x, y });
    }
  }

  /**
   * Advance simulation by dtSec seconds and record a frame snapshot.
   * @param dtSec Delta time in seconds
   * @param t Optional timestamp (e.g., performance.now())
   */
  public step(dtSec: number, t: number = performance.now()): void {
    const r = this.radius;
    const speed = this.speed;

    for (let i = 0; i < this.bubbles.length; i++) {
      const b = this.bubbles[i];
      b.y -= speed * dtSec;

      if (b.y <= -r) {
        b.y = this.h + r;
      }
    }

    if (this.historyLimit > 0) {
      // Store copies so external mutations won’t affect history
      const frame: FrameSnapshot = {
        time: t,
        positions: this.bubbles.map((b) => ({ x: b.x, y: b.y })),
      };
      this.history.push(frame);
      if (this.history.length > this.historyLimit) {
        this.history.shift();
      }
    }
  }

  /**
   * Render bubbles.
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.fillStyle = this.fillStyle;
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = this.lineWidth;

    for (const b of this.bubbles) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      if (this.lineWidth > 0) ctx.stroke();
    }

    ctx.restore();
  }

  /**
   * Get a snapshot copy of recent frames.
   */
  public getHistory(): FrameSnapshot[] {
    return this.history.slice();
  }

  /**
   * Clear stored history.
   */
  public clearHistory(): void {
    this.history.length = 0;
  }

  /**
   * Update canvas height (e.g., on resize).
   */
  public setCanvasHeight(newHeight: number): void {
    this.h = newHeight;
  }

  /**
   * Change speed at runtime (px/sec).
   */
  public setSpeed(pxPerSec: number): void {
    this.speed = pxPerSec;
  }

  /**
   * Change bubble radius at runtime (applies to all).
   */
  public setRadius(r: number): void {
    this.radius = r;
  }

  /**
   * Read-only accessors if you want them.
   */
  public getRadius(): number {
    return this.radius;
  }
  public getSpeed(): number {
    return this.speed;
  }
  public getCanvasHeight(): number {
    return this.h;
  }
  public getBubbles(): ReadonlyArray<BubblePosition> {
    return this.bubbles;
  }
}

function draw(ctx: CanvasRenderingContext2D, columns: BubbleColumn[]) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  columns.forEach((b) => {
    b.draw(ctx);
    b.step(0.05);
  });

  requestAnimationFrame(() => {
    draw(ctx, columns);
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

    const columns = [
      new BubbleColumn({
        x: field.current.width * 0.098,
        radius: 3,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.1,
        radius: 4,
        speed: 65,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.103,
        radius: 3,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.223,
        radius: 1,
        speed: 65,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.225,
        radius: 2,
        speed: 65,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.228,
        radius: 2,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.42,
        radius: 3,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.422,
        radius: 4,
        speed: 65,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.425,
        radius: 3,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.5,
        radius: 2,
        speed: 55,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.503,
        radius: 2,
        speed: 55,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.62,
        radius: 3,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.622,
        radius: 4,
        speed: 65,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.625,
        radius: 3,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.85,
        radius: 1,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.852,
        radius: 2,
        speed: 65,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.854,
        radius: 1,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.8,
        radius: 1,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.802,
        radius: 2,
        speed: 65,
        canvasHeight: field.current.height,
        count: 20,
      }),
      new BubbleColumn({
        x: field.current.width * 0.804,
        radius: 1,
        canvasHeight: field.current.height,
        count: 20,
      }),
    ];

    window.addEventListener("resize", () => {
      if (!field.current) {
        return;
      }

      field.current.width = window.innerWidth;
      field.current.height = window.innerHeight;
    });

    requestAnimationFrame(() => {
      draw(ctx, columns);
    });
  }, [field]);

  return (
    <canvas ref={field} className={`${styles.field} hidden md:block`}></canvas>
  );
}
