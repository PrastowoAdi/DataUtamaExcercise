import React, { useState } from "react";
import { Link } from "react-router-dom";
import Description from "./Description";

export default function Content() {
  const [item, setItem] = useState(0);

  const handleClickAdd = () => {
    setItem(item + 1);
  };

  const handleClickMin = () => {
    setItem(item - 1);
    if (item === 0) return setItem(0);
  };

  return (
    <>
      <div className="flex flex-wrap pt-5">
        <div className="w-1/2 md:w-1/4">
          <img src="/img/produk/produk-1.webp" alt="" className="rounded-md" />
          <div className="flex gap-4 mt-5">
            <div className="w-20 h-16 lg:w-28 bg-gray-200"></div>
            <div className="w-20 h-16 lg:w-28 bg-gray-200"></div>
            <div className="w-20 h-16 lg:w-28 bg-gray-200"></div>
          </div>
        </div>
        <div className="w-1/2 md:w-3/4 px-5">
          <h3 className="font-black text-xl">Rp3.934.415,59</h3>
          <h5 className="text-sm font-semibold mt-2">
            SKU :{" "}
            <span className="text-gray-700 font-semibold">JTG 19452BR</span>
          </h5>
          <div className="mt-3">
            <p className="text-sm mt-1">
              1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores, fugit?
            </p>
            <p className="text-sm mt-1">
              2.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores, fugit?
            </p>
            <p className="text-sm mt-1">
              3.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores, fugit?
            </p>
            <p className="text-sm mt-1">
              4.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores, fugit?
            </p>
            <p className="text-sm mt-1">
              5.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores, fugit?
            </p>
          </div>
          <div className="flex flex-wrap mt-3 gap-y-5 lg:gap-5">
            <div className="w-full lg:w-1/3">
              <label className="text-sm">Warna:</label>
              <select className="w-full bg-gray-50 p-2 mt-2 text-sm text-gray-700 rounded-md shadow-lg shadow-gray-300 focus:outline-none">
                <option defaultValue="--Pilih--">--Pilih--</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="w-full lg:w-1/3">
              <label className="text-sm">Ukuran:</label>
              <select className="w-full bg-gray-50 p-2 mt-2 text-sm text-gray-700 rounded-md shadow-lg shadow-gray-300 focus:outline-none">
                <option defaultValue="--Pilih--">--Pilih--</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap mt-8 gap-y-5">
            <div className="w-full lg:w-1/2">
              <label>Jumlah</label>
              <div className="flex gap-3 items-center mt-3">
                <button
                  className="p-1 border border-black rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
                  onClick={handleClickMin}
                  disabled={item === 0 ? true : false}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </button>
                <div className="px-3 ">{item}</div>
                <button
                  className="p-1 border border-black rounded-md"
                  onClick={handleClickAdd}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:self-end lg:text-right">
              <Link
                to="/produk/payment"
                className="bg-customyellow hover:bg-yellow-400 text-black font-semibold py-1 px-10 rounded shadow-md"
              >
                Beli
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Description />
    </>
  );
}
