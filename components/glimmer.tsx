"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
import styles from "./glimmer.module.css";

export default function Glimmer() {
  const [balls, setBalls] = useState<ReactElement[]>([]);
  const field = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const balls: ReactElement[] = [];

    for (let i = 0; i < 50; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.round(Math.random() * 6 - 3);
      const scale = Math.random();
      const opacity = 1 - scale;
      const animationIndex = i % 3;

      balls.push(
        <div
          key={i}
          className={[
            styles.ballContainer,
            styles[`animateX${animationIndex}`],
          ].join(" ")}
          style={{
            animationDelay: `${delay}s`,
            left: `${x}vw`,
            top: `${y}vh`,
          }}
        >
          <div
            style={{
              transform: `scale(${scale})`,
            }}
          >
            <div
              className={[
                styles.ball,
                styles[`animateY${animationIndex}`],
              ].join(" ")}
              style={{
                animationDelay: `${delay}s`,
                backgroundColor: `rgba( 127 163 191 / ${opacity})`,
              }}
            ></div>
          </div>
        </div>
      );
    }
    setBalls(balls);

    window.addEventListener("scroll", () => {
      if (!field.current) {
        return;
      }

      console.log(window.scrollY);

      requestAnimationFrame(() => {
        if (field.current) {
          field.current.style.transform = `translateY(-${
            window.scrollY / 12
          }px)`;
        }
      });
    });
  }, []);

  return (
    <div ref={field} className={`${styles.field} hidden md:block`}>
      {balls}
    </div>
  );
}
