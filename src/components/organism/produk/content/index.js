import React from "react";
import Item from "./Item";

export default function Content() {
  return (
    <section className="pt-28">
      <div className={`p-4 lg:px-32 text-center`}>
        <div className="flex flex-wrap">
          {Array(4)
            .fill()
            .map((_, i) => (
              <Item
                key={i}
                title="Hyper Blue/Red WetSuit"
                price="Rp 3.934.415,59"
                img="/img/produk/produk-1.webp"
              />
            ))}
        </div>
      </div>
    </section>
  );
}
