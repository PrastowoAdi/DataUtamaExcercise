import React from "react";
import Item from "./Item";

export default function Information() {
  return (
    <div className="w-full px-10 pb-10 lg:pb-0">
      <div className="flex flex-wrap gap-y-3">
        <Item
          img="/img/login/box.png"
          title="Pengiriman"
          desc="Untuk pemesanan min Rp 999.000"
        />
        <Item
          img="/img/login/cashback.png"
          title="99 % uang kembali"
          desc="Jika barang bermasalah"
        />
        <Item
          img="/img/login/wallet.png"
          title="Pembayaran Aman"
          desc="Pembayaran Aman 100%"
        />
        <Item
          img="/img/login/chat.png"
          title="Dukungan 1 x 24 Jam"
          desc="Dukungan Khusus untuk Anda"
        />
      </div>
    </div>
  );
}
