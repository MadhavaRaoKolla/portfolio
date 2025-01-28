import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

type Icon = {
  src: string;
  alt: string;
  row: number;
  col: number;
};

const Skills = () => {
  const skills: Icon[] = [
    { src: "html.svg", alt: "HTML", row: 1, col: 2 },
    { src: "css.svg", alt: "CSS", row: 1, col: 4 },
    { src: "js.svg", alt: "JavaScript", row: 2, col: 1 },
    { src: "ts.svg", alt: "TypeScript", row: 2, col: 3 },
    { src: "react.svg", alt: "ReactJs", row: 2, col: 5 },
    { src: "tailwind.svg", alt: "Tailwind", row: 3, col: 2 },
    { src: "figma.svg", alt: "Figma", row: 3, col: 4 },
    { src: "rquery.svg", alt: "React Query", row: 4, col: 1 },
    { src: "node.svg", alt: "NodeJs", row: 4, col: 3 },
    { src: "express.svg", alt: "ExpressJs", row: 4, col: 5 },
    { src: "scss.svg", alt: "SCSS", row: 5, col: 2 },
    { src: "next.svg", alt: "NextJs", row: 5, col: 4 },
  ];
  const iconsRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    iconsRef.current.forEach((icon, index) => {
      gsap.fromTo(
        icon,
        { scale: 0.8, y: -15 },
        {
          scale: 1.2,
          y: 15,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          stagger: 0.2,
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <div className="w-full h-screen px-20 py-7 flex items-center" id="skills">
      <div className="h-4/5 w-full flex flex-col justify-between items-center gap-5">
        <p className="text-3xl font-semibold text-cyan-500">
          Building Blocks of My Work
        </p>
        <div className="grid grid-rows-5 grid-cols-5 justify-center border-2 border-blue-400 p-14 rounded-full">
          {skills.map((skill: Icon, index) => (
            <div
              key={index}
              className={`row-[${skill.row}] col-[${skill.col}] relative group`}
            >
              <Image
                src={skill.src}
                alt={skill.alt}
                width={75}
                height={55}
                className="hover:scale-110 transition-transform duration-200"
                ref={(el) => {
                  if (el) iconsRef.current[index] = el;
                }}
              />
              <span className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-800 text-sm font-semibold px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                {skill.alt}
              </span>
            </div>
          ))}
        </div>
        <p className="text-lg font-semibold text-neutral-300 flex">
          Exploring Horizons...!
        </p>
      </div>
    </div>
  );
};

export default Skills;
