import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const Home = () => {
  return (
    <main className="h-full">
      <nav className="flex flex-col justify-center items-center px-16 py-5 gap-4">
        <div className="flex space-x-10">
          <Navbar />
        </div>
      </nav>
    </main>
  );
};

export default Home;
