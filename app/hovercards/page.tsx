// HoverCards.tsx
"use client";
import React, { useEffect } from "react";
import styles from "../styling/hovercards.module.css"; // This will be your CSS module
import Image from "next/image";
import card_data from "./data";

const HoverCards: React.FC = () => {
  useEffect(() => {
    const cards = document.getElementById("cards");

    if (!cards) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cardElements = document.getElementsByClassName(styles.card);
      Array.from(cardElements).forEach((card: Element) => {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      });
    };

    cards.addEventListener("mousemove", handleMouseMove);

    return () => {
      cards.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.body}>
      <div id="cards" className={styles.cards}>
        {card_data.map((data, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              {/* Top Container for Image */}
              <div className={styles.topContainer}>
                {/* Blurred Image */}
                <div className={`${styles.blurredImageWrapper} rounded`}>
                  <Image
                    src={data.picture}
                    alt={`blurred-${data.name}`}
                    layout="fill"
                    className={`${styles.blurredImage} rounded`}
                  />
                </div>
                {/* Actual Image */}
                <div className={styles.actualImage}>
                  <Image
                    id={`image-${index}`}
                    src={data.picture}
                    alt={data.name}
                    layout="fill"
                    className="rounded"
                  />
                </div>
              </div>
              {/* Bottom Container for Text */}
              <div className={styles.bottomContainer}>
                <div className={`${styles.textBetween} mt-2`}>
                  <p>
                    <b>{data.name}</b>
                  </p>
                  <p>{data.at}</p>
                </div>
                <div className={styles.textBetween}>
                  <p>{data.role}</p>
                  <p>{data.country}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverCards;
