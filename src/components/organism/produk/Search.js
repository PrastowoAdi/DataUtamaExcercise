import React from "react";

export default function Search() {
  return (
    <div className="flex w-full relative justify-center ">
      <div className="w-2/3 md:w-2/3 h-15 bg-white -top-7 absolute rounded-full shadow-lg shadow-gray-300">
        <div className="w-full h-15 md:px-5">
          <div className="flex flex-wrap p-3">
            <div className="w-full md:w-1/2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold">Pilih Kota</label>
                <select className="w-1/2 bg-gray-50 text-sm p-1 text-gray-700 rounded-md border border-gray-200 focus:outline-none md:mr-5">
                  <option defaultValue="Semarang">Semarang</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Tegal">Tegal</option>
                  <option value="Brebes">Brebes</option>
                </select>
                <div className="w-7 h-7 p-1 bg-customgrn text-white rounded-full md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="hidden md:w-1/2 md:block">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold">Pilih Tipe</label>
                <select className="w-1/2 bg-gray-50 text-sm p-1 text-gray-700 rounded-md border border-gray-200 focus:outline-none">
                  <option defaultValue="Olahraga Air">Olahraga Air</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Tegal">Tegal</option>
                  <option value="Brebes">Brebes</option>
                </select>
                <div className="w-7 h-7 p-1 bg-customgrn text-white rounded-full cursor-not-allowed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
