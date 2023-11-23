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
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-red-100">
      <div className="flex flex-col relative px-12">
        <p className="subpixel-antialiased text-2xl text-left font-bold mb-3 text-neutral-800">{`Hai ${params.slug},`}</p>
        <p className="subpixel-antialiased mb-20 text-base text-left text-neutral-600">
          kamu diundang ke acara pernikahan{" "}
          <a
            className="underline decoration-red-500 decoration-4 font-semibold text-neutral-800"
            href="https://instagram.com/crmegl"
          >
            Elang
          </a>{" "}
          dan{" "}
          <a
            className="underline decoration-sky-300 decoration-4 font-semibold text-neutral-800"
            href="https://instagram.com/wwt.wi"
          >
            Wiwit
          </a>
          .
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
