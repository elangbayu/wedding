"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    setClicked(!clicked);
  }

  return (
    <main className="flex min-h-screen flex-row items-center justify-center bg-gradient-to-br from-sky-100 to-red-100">
      <div className="relative flex place-items-center">
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
