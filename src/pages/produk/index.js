import React from "react";
import Footer from "../../components/molecules/Footer";
import Navbar from "../../components/molecules/Navbar";
import Content from "../../components/organism/produk/content";
import Header from "../../components/organism/produk/Header";
import Search from "../../components/organism/produk/Search";

export default function Produk() {
  return (
    <>
      <Navbar />
      <Header />
      <Search />
      <Content />
      <Footer />
    </>
  );
}
