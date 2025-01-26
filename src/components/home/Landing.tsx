import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const Landing = () => {
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.5,
      delay: 0.8,
      ease: "power3.out",
    });

    gsap.from(nameRef.current, {
      opacity: 0,
      x: -100,
      duration: 1.5,
      delay: 0,
      ease: "power3.out",
    });

    gsap.from(descRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 1,
      ease: "power3.out",
    });

    gsap.from(imgRef.current, {
      opacity: 0,
      x: 100,
      rotate: 360,
      duration: 1.2,
      delay: 0.8,
      ease: "back",
    });
  }, []);
  return (
    <section
      className="h-[600px] flex justify-start items-center"
      // style={{
      //   backgroundImage: `url('/face.jpeg')`,
      // bg-cover bg-center
      // }}
    >
      <div className="w-1/3 flex flex-col gap-7 ml-[200px]">
        <Image
          ref={imgRef}
          src={"code.svg"}
          alt="codeblock"
          width={50}
          height={50}
          className="border rounded-full pr-1 border-neutral-600"
        />
        <p ref={titleRef} className="font-sans text-lg">
          Frontend Engineer
        </p>
        <h1 ref={nameRef} className="text-6xl font-bold text-gray-300">
          Madhav
        </h1>
        <p ref={descRef} className="text-base leading-relaxed">
          Frontend Engineer passionate about crafting responsive, interactive
          user interfaces. Skilled in modern libraries and bridging design with
          development, delivering intuitive, user-focused experiences aligned
          with industry trends.
        </p>
      </div>
    </section>
  );
};

export default Landing;
