import React from "react";

export default function Header() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center pt-10">
        <img
          src="/img/logo.png"
          alt="logo-img"
          className="w-1/2 md:w-1/4 lg:w-36"
        />
      </div>
      <div className="w-full text-black text-center text-4xl font-black">
        Data Utama
      </div>
    </>
  );
}
