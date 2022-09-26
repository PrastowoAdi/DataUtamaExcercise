import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Form() {
  const [passwordType, setPasswordType] = useState("password");

  const showPassword = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  return (
    <div className="w-full p-7">
      <div className="flex flex-wrap -mx-3 justify-center">
        <div className="w-full lg:w-1/2 p-2">
          <label className="text-sm">No Telepon</label>
          <div className="flex items-center rounded-md relative">
            <div className="z-50 text-white bg-black rounded-tl-md rounded-bl-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 rounded-md"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <input
              className="absolute inset-0 rounded-md pl-11 border border-gray-500 text-gray-700 focus:outline-none"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-3 justify-center">
        <div className="w-full lg:w-1/2 p-2">
          <label className="text-sm">Kata Sandi</label>
          <div className="flex items-center rounded-md relative">
            <div className="z-50 text-white bg-black rounded-tl-md rounded-bl-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 rounded-md"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <input
              className="absolute inset-0 rounded-md pl-11 border border-gray-500 text-gray-700 focus:outline-none"
              type={passwordType}
            />
            <button
              className="absolute z-50 right-3 hover:text-customgrn"
              onClick={showPassword}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.0"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm font-semibold text-right mt-3">Lupa Sandi?</p>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3 text-center">
          <Link
            to="/produk"
            className="bg-customgrn hover:brightness-125 text-white font-bold py-2 px-14 transition duration-100 rounded shadow-md"
          >
            Masuk
          </Link>
        </div>
      </div>
    </div>
  );
}
