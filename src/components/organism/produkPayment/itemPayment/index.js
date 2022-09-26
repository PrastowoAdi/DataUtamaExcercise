import React from "react";

export default function ItemPayment() {
  return (
    <div className="w-full md:w-[64%] border border-gray rounded-md">
      <div className="flex gap-5 p-4">
        <img
          src="/img/produk/produk-1.webp"
          alt="produk-1"
          className="w-1/3 rounded-md"
        />
        <div className="self-center">
          <h3 className="text-lg font-bold lg:text-2xl">
            Hyper Blue/Red Wetsuit
          </h3>
          <p className="mt-1 lg:mt-4">Warna : Black</p>
          <p className="mt-1 lg:mt-4">Ukuran : L</p>
          <p className="mt-1 lg:mt-4">Jumlah : 1</p>
          <h3 className="mt-1 lg:mt-3 text-lg font-bold">Rp3.934.415,59</h3>
        </div>
      </div>
    </div>
  );
}
