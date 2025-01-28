import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Links from "../LinksBar/Links";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex">
        <Links />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
