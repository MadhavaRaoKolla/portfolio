import React, { useEffect, useRef } from "react";
import { NavFields } from "./Nav.types";
import Link from "next/link";
import gsap from "gsap";

interface NavProps {
  className?: string;
}
const Navbar: React.FC<NavProps> = ({ className }) => {
  const navFields: NavFields[] = [
    { href: "/", value: "HOME" },
    { href: "#about", value: "ABOUT" },
    { href: "#education", value: "EDUCATION" },
    { href: "#projects", value: "PROJECTS" },
    { href: "#skills", value: "SKILLS" },
    { href: "#contact", value: "CONTACT" },
  ];
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const headRef = useRef<HTMLAnchorElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (headRef) {
      const gradient = headRef.current?.style;
      if (gradient) {
        gradient.backgroundImage =
          "linear-gradient(to right, #ecaf55,#afe7f0 )";
        gradient.backgroundClip = "text";
        gradient.color = "transparent";
      }
    }
    gsap.fromTo(
      linksRef.current,
      { x: 0, opacity: 0 },
      {
        x: 0,
        duration: 0.7,
        opacity: 1,
        delay: 1,
        stagger: 0.15,
        ease: "power4.out",
      }
    );
    gsap.from(headRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.9,
      delay: 1,
      ease: "bounce.out",
    });
    gsap.from(buttonRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "bounce.out",
    });
  }, []);

  return (
    <nav
      className={`flex justify-between items-center px-12 py-3 fixed w-full bg-transparent ${className}`}
    >
      <Link ref={headRef} href={"/"} className="text-4xl font-semibold">
        Madhav
      </Link>
      <div className="flex justify-center gap-10 w-full">
        {navFields.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            ref={(el) => {
              if (el) linksRef.current[index] = el;
            }}
            className="text-lg hover:text-cyan-600 transition duration-200"
          >
            {item.value}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
