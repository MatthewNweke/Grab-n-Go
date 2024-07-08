// src/pages/Home.jsx
import React from "react";
import Layout from "../components/Layout";
import CarouselSlider from "../components/CarouselSlider";

function Home() {
  return (
    <div>
      <Layout>
        <CarouselSlider />

        <div className="mt-10 flex justify-around max-md:flex-col max-md:items-center">
          <img src="/aboutUs_img.jpg"  className="max-w-[100%] w-[40%] max-md:w-[90%]" />

          <div className="w-[40%] max-md:w-[90%] max-md:mt-3">
            <h2 className="text-[2.4rem] text-center font-bold text-[#ff0000] mb-2 max-md:text-[2rem]">OUR PEOPLE</h2>
            <p className="text-[1.2rem] max-md:text-[1rem]">
              Behind every delicious, Soulfully Spiced Chicken meal and at the
              forefront of every great customer experience stands a passionate
              and committed person. This is why “People Capability Always” is a
              driving force within our business and the golden thread that runs
              through everything we do. <span className="cursor-pointer font-semibold">Read more &gt;&gt;&gt;</span>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
