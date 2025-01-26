// import Form from "@/components/Form/Form";
// import YupForm from "@/components/Form/YupForm";
// import ZodForm from "@/components/Form/ZodForm";
import Landing from "@/components/home/Landing";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const Home = () => {
  return (
    <main className="h-full">
      <div className="flex flex-col">
        <Navbar />
        <Landing />
        {/* <div className="flex gap-3">
          <Form />
          <div className="w-full">
            <YupForm />
            <ZodForm />
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Home;
