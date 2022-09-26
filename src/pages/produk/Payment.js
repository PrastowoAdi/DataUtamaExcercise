import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Footer from "../../components/molecules/Footer";
import Navbar from "../../components/molecules/Navbar";
import DetailPayment from "../../components/organism/produkPayment/detailPayment";
import ItemPayment from "../../components/organism/produkPayment/itemPayment";

export default function Payment() {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [check, setCheck] = useState(false);

  return (
    <>
      <Navbar />
      <section className="pb-16">
        <div className="pt-10 pb-10">
          <div className="px-4 lg:px-20">
            <div className="py-3 border-b border-b-gray-300">
              <h1 className="text-xl font-semibold">Data Produk</h1>
            </div>
            <div className="flex flex-wrap pt-5 lg:gap-3 gap-y-5 justify-between">
              <ItemPayment />
              <DetailPayment propsClick={() => setCheck(true)} />
            </div>
          </div>
        </div>
      </section>
      <Modal
        isOpen={check}
        ariaHideApp={false}
        onRequestClose={() => setCheck(false)}
        className="max-w-lg w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 outline-none rounded-xl shadow-lg"
        style={{ overlay: { background: "rgba(0, 0, 0, 0.6)" } }}
      >
        <div className="relative">
          <button
            className="p-3 right-0 absolute"
            onClick={() => setCheck(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-20">
          <h1 className="mt-5 text-xl font-bold text-center uppercase">
            Check Status Payment
          </h1>
          <div className="flex gap-5 justify-center items-center mt-5">
            <button
              type="submit"
              className="bg-green-400 text-white font-semibold py-1 px-10 rounded shadow-md"
              onClick={() => setCheck(false) & setSuccess(true)}
            >
              Success
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold py-1 px-10 rounded shadow-md"
              onClick={() => setCheck(false) & setFailed(true)}
            >
              Failed
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={failed}
        ariaHideApp={false}
        onRequestClose={() => setFailed(false)}
        className="max-w-lg w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 outline-none rounded-xl shadow-lg"
        style={{ overlay: { background: "rgba(0, 0, 0, 0.6)" } }}
      >
        <div className="relative">
          <button
            className="p-3 right-0 absolute"
            onClick={() => setFailed(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-20">
          <img src="/img/produk/failed.png" alt="" className="w-28 mx-auto" />
          <h1 className="mt-5 text-xl font-bold text-center uppercase">
            Failed
          </h1>
        </div>
      </Modal>
      <Modal
        isOpen={success}
        ariaHideApp={false}
        onRequestClose={() => setSuccess(false)}
        className="max-w-lg w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 outline-none rounded-xl shadow-lg"
        style={{ overlay: { background: "rgba(0, 0, 0, 0.6)" } }}
      >
        <div className="relative">
          <button
            className="p-3 right-0 absolute"
            onClick={() => setSuccess(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-20">
          <img src="/img/produk/check.png" alt="" className="w-28 mx-auto" />
          <h1 className="mt-5 text-xl font-bold text-center uppercase">
            Success
          </h1>
        </div>
      </Modal>
      <Footer />
    </>
  );
}
