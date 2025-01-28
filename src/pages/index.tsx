// import Contact from "@/components/Contact/Contact";
// import Form from "@/components/Form/Form";
import Landing from "@/components/home/Landing";
import Layout from "@/components/Layout/Layout";
import Skills from "@/components/Skills/Skills";
import React from "react";

const Home = () => {
  return (
    <main className="h-full">
      <Layout>
        <Landing />
        <Skills />
        {/* <Contact /> */}
        {/* <Form /> */}
      </Layout>
    </main>
  );
};

export default Home;
