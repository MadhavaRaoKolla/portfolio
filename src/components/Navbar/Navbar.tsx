import React from "react";
import { NavFields } from "./Nav.types";
import Link from "next/link";

const Navbar = () => {
  const navFields: NavFields[] = [
    {
      href: "#about",
      value: "About",
    },
    {
      href: "#education",
      value: "Education",
    },
    {
      href: "#skills",
      value: "Skills",
    },
    {
      href: "#contact",
      value: "Contact",
    },
  ];
  return (
    <div>
      <nav className="flex flex-col justify-center items-center px-16 py-5 gap-4">
        <div className="flex space-x-10">
          {navFields.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-gray-300 transition duration-200 text-3xl font-semibold"
            >
              {item.value}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
