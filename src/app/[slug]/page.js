"use client";
import Image from "next/image";
import { useState } from "react";

export default function Page({ params }) {
  const [clicked, setClicked] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    setClicked(!clicked);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col relative px-12">
        <p className="text-4xl text-left font-bold">{`Hai ${params.slug},`}</p>
        <p className="mb-20 text-lg text-left">
          kamu diundang ke acara pernikahan Elang dan Wiwit.
        </p>
      </div>
      <div className="flex flex-row relative place-items-center">
        <a onClick={handleChange}>
          <Image
            className={
              "relative ease-out duration-300 " +
              (clicked
                ? "scale-125 drop-shadow-[0_0_50px_#e02d2d99] brightness-100"
                : "brightness-75 scale-75")
            }
            src="/love.svg"
            alt="Love Logo"
            width={180}
            height={37}
            priority
          />
        </a>
      </div>
    </main>
  );
}
