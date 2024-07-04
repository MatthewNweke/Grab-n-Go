// src/pages/Home.jsx
import React from "react";
import Layout from "../components/Layout";
import CarouselSlider from "../components/CarouselSlider";

function Home() {
  return (
    <div>
      <Layout>
        <CarouselSlider />
      </Layout>
    </div>
  );
}

export default Home;
