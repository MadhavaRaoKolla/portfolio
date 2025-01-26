import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Links = () => {
  const linksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (linksRef.current) {
      gsap.from(linksRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });
      gsap.fromTo(
        linksRef.current.querySelectorAll("a"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          delay: 0.5,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div
      ref={linksRef}
      className="fixed p-5 flex flex-col gap-6 h-screen justify-center items-center ml-5 bg-transparent"
    >
      <div className="w-[1px] h-full bg-neutral-400 mt-10"></div>
      <Link
        href={"https://www.linkedin.com/in/madhava-rao-kolla-06515021b/"}
        target="_blank"
      >
        <Image src={"linkedin.svg"} alt="linkedin" width={25} height={30} />
      </Link>
      <Link href={"https://www.instagram.com/kolla_madhav/"} target="_blank">
        <Image src={"insta.svg"} alt="insta" width={25} height={30} />
      </Link>
      <Link href={"https://x.com/madhav_1606"} target="_blank">
        <Image src={"twitter.svg"} alt="twitter" width={25} height={30} />
      </Link>
      <div className="w-[1px] h-full bg-neutral-400"></div>
    </div>
  );
};

export default Links;
