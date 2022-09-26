import React from "react";
import Footer from "../../components/molecules/Footer";
import Navbar from "../../components/molecules/Navbar";
import Content from "../../components/organism/produk/content";
import Header from "../../components/organism/produk/Header";

export default function Produk() {
  return (
    <>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </>
  );
}
