import React from "react";
import Footer from "../../components/molecules/Footer";
import Navbar from "../../components/molecules/Navbar";
import Content from "../../components/organism/produkDetail/content";
import Header from "../../components/organism/produkDetail/Header";

export default function Detail() {
  return (
    <>
      <Navbar />
      <section className="pt-10 pb-10">
        <div className="px-4 lg:px-20">
          <Header />
          <Content />
        </div>
      </section>
      <Footer />
    </>
  );
}
