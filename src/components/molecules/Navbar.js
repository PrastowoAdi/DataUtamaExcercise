import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section>
      <div className="w-full p-1 px-6 bg-gray-200">
        <h3 className="text-right font-semibold cursor-pointer hover:text-customgrn transition duration-150">
          <Link to="/">Keluar</Link>
        </h3>
      </div>
      <div className="w-full py-1 px-4 bg-white shadow-md shadow-gray-300">
        <div className="flex flex-wrap items-center">
          <div className="w-1/2">
            <div className="flex gap-3">
              <div className="flex lg:w-2/3 items-center justify-center">
                <img src="/img/logo.png" alt="logo" className="w-17 h-14" />
                <Link
                  to="/produk"
                  className="cursor-pointer transition duration-150 hover:text-customgrn"
                >
                  <h2 className="font-black text-xl tracking-wider">
                    Data Utama
                  </h2>
                </Link>
              </div>
              <div className="hidden lg:flex w-full h-8 self-center items-center p-3 rounded-full relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-5 h-5 z-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  className="absolute inset-0 rounded-md pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-200 focus:outline-none mr-10"
                  placeholder="Cari"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex items-center">
              <div className="hidden lg:block w-1/2">
                <div className="flex">
                  <div className="w-1/2">
                    <div className="flex items-center gap-2">
                      <img
                        src="/img/login/wallet.png"
                        alt=""
                        className="w-8 h-8"
                      />
                      <div className="select-none">
                        <p className="text-sm font-semibold">Saldo</p>
                        <p className="text-sm font-bold text-customgrn">Rp0</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex items-center gap-2">
                      <img
                        src="/img/produk/percentage.png"
                        alt=""
                        className="w-8 h-8"
                      />
                      <div className="select-none">
                        <p className="text-sm font-semibold">Kupon</p>
                        <p className="text-sm font-bold text-customgrn">
                          0 Vouchers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 ml-auto lg:ml-0">
                <div className="flex">
                  <div className="ml-auto">
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-semibold select-none">
                        Hai, Joko
                      </h5>
                      <img
                        src="/img/cat.png"
                        alt="avata"
                        className="w-10 h-10 cursor-not-allowed"
                      />
                      <div className="hidden lg:flex gap-2 items-center p-1">
                        <div className="group relative text-gray-400 cursor-pointer hover:text-customgrn hover:transition hover:duration-150">
                          <div className="w-1 h-1 bg-yellow-500 group-hover:bg-customgrn absolute rounded-full -right-[0.10rem] top-[0.10rem] z-50 animate-pulse"></div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                            <path
                              fillRule="evenodd"
                              d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="group relative text-yellow-400 hover:text-customgrn cursor-pointer hover:transition hover:duration-150">
                          <div className="w-1 h-1 bg-yellow-500 group-hover:bg-customgrn absolute rounded-full -right-[0.10rem] top-[0.10rem] z-50 animate-pulse"></div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                          </svg>
                        </div>
                        <div className="group relative text-gray-400 hover:text-customgrn cursor-pointer hover:transition hover:duration-150">
                          <div className="w-1 h-1 bg-yellow-500 group-hover:bg-customgrn absolute rounded-full -right-[0.15rem] top-[0.10rem] z-50 animate-pulse"></div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
