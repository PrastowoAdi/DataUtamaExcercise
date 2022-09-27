import React from "react";

export default function Item(props) {
  const { borderB, title } = props;
  return (
    <div
      className={`group w-full ${borderB} border-gray-400 p-3 hover:border-b-customgrn cursor-pointer`}
    >
      <h5 className="text-white font-semibold group-hover:text-customgrn">
        {title}
      </h5>
    </div>
  );
}
