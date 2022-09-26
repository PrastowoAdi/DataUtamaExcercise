import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section>
      <div className="w-full p-1 px-6 bg-gray-200">
        <h3 className="text-right font-semibold">
          <Link to="/">Keluar</Link>
        </h3>
      </div>
    </section>
  );
}
