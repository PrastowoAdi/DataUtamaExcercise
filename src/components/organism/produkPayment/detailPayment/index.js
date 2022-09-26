import React from "react";

export default function DetailPayment(props) {
  const { propsClick } = props;
  return (
    <div className="w-full md:w-1/3">
      <div className="w-full border border-gray rounded-md mb-5">
        <div className="p-3">
          <div className="p-1 border-b border-gray-300">
            <h3 className="font-semibold">Rincian</h3>
          </div>
          <div className="p-1 border-b border-gray-300">
            <div className="flex items-center justify-between mb-1">
              <h3>Subtotal</h3>
              <h3>Rp3.934.415,59</h3>
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3>Voucher</h3>
              <h3>0</h3>
            </div>
            <div className="flex items-center justify-between">
              <h3>Ongkos Kirim</h3>
              <h3>0</h3>
            </div>
          </div>
          <div className="p-1 flex justify-between">
            <h2 className="text-xl font-bold">Total</h2>
            <h2 className="text-xl font-bold">Rp3.934.415,59</h2>
          </div>
        </div>
      </div>
      <button
        className="w-full p-1 bg-customyellow hover:bg-yellow-400 transition duration-100 rounded-md font-bold uppercase"
        onClick={propsClick}
      >
        Proses Pembayaran
      </button>
    </div>
  );
}
