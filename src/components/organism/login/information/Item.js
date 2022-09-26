import React from "react";

export default function Item(props) {
  const { img, title, desc } = props;
  return (
    <div className="w-full lg:w-1/4">
      <div className="flex items-center justify-center gap-2 p-2 bg-slate-100 lg:bg-white">
        <img src={img} alt="gambar-1" className="w-12" />
        <div className="">
          <h3 className="font-bold">{title}</h3>
          <p className="text-xs">{desc}</p>
        </div>
      </div>
    </div>
  );
}
