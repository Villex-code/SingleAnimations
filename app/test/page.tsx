import React from "react";
import Image from "next/image";
import MyPic from "../../public/assets/cards/pic1.avif";

const Test = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Card */}
      <div className="relative w-72 h-96 hover:opacity-100 transition-opacity duration-300 ease-in-out">
        {/* Bigger Blurred Image */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <Image
            src={MyPic}
            layout="fill"
            alt="test"
            objectFit="cover"
            className="blur hover:blur-none transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Smaller Image */}
        <div className="absolute top-12 left-12 w-48 h-72">
          <Image src={MyPic} layout="fill" objectFit="cover" alt="test" />
        </div>
      </div>
    </div>
  );
};

export default Test;
