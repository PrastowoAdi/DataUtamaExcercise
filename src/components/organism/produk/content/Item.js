import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { id, title, price, img } = props;
  return (
    <div className="w-1/2 md:w-1/2 px-4 lg:w-1/4 xl:w-1/4 select-none" key={id}>
      <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10 dark:bg-transparent dark:shadow-zinc-300 text-center border-2 border-black">
        <div className="py-3 px-3 pb-7">
          <img
            src={img}
            alt="produk-1"
            className="w-[80%] lg:w-full mx-auto rounded-md"
          />
          <h4 className="mt-5 text-sm">{title}</h4>
          <h3 className="font-bold">{price}</h3>
          <div className="flex items-center mt-3 mb-5 justify-center">
            {Array(4)
              .fill()
              .map((_, i) => (
                <div className="text-yellow-400" key={i}>
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
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
              ))}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="gray"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
          <Link
            to="/produk/detail"
            className="bg-customyellow hover:bg-yellow-400 text-black font-semibold py-1 px-10 rounded shadow-md"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
