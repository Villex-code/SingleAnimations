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

  useEffect(() => {
    card_data.forEach((data, index) => {
      const imgElement = document.getElementById(`image-${index}`);
      if (!imgElement) return;

      // Create a canvas element to draw the image and read the edge pixels
      const canvas = document.createElement("canvas");
      canvas.width = 280;
      canvas.height = 200;
      const ctx = canvas.getContext("2d");
      const img = new window.Image();

      img.src =
        typeof data.picture === "string"
          ? data.picture
          : "/assets/cards/pic1.avif";

      img.onload = () => {
        ctx?.drawImage(img, 0, 0);

        // Here, you'd read the edge pixels and calculate the average colors
        // Then, apply these colors as dynamic shadows
        // Simplified example:
        ctx!.fillStyle = "rgba(0, 128, 255, 0.5)"; // Dynamic color goes here
        ctx?.fillRect(0, 0, 280, 200);
      };
    });
  }, []);

  return (
    <div className={styles.body}>
      <div id="cards" className={styles.cards}>
        {card_data.map((data, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <div className="flex justify-center items-center flex-col mt-2 ml-2">
                <div className={styles.innerImageWrapper}>
                  <Image
                    id={`image-${index}`}
                    src={data.picture}
                    alt={data.name}
                    width={280}
                    height={200}
                    className="rounded w-[280px] h-[180px]"
                  />
                </div>
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
