"use client";

import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Product({ id, name, des, discount, price }) {
  const [imageSrc, setImageSrc] = useState(`/jersey/${name}-2024-25-front.jpg`);
 
  const handleMouseOver = () => {
    setImageSrc(`/jersey/${name}-2024-25-zoom.jpg`);
  };

  const handleMouseOut = () => {
    setImageSrc(`/jersey/${name}-2024-25-front.jpg`);
  };

  const handleClick = () => {
    router.push(`/ProductInfo/${id}`);
  };

  const discountedPrice = price - ((price * discount) / 100);

  return (
    <div className="card bg-base-100 w-56 mt-8 shadow-xl">
      <figure className="relative">
        <div className="badge bg-red-500 gap-2 absolute z-[1] top-2 right-2">
          {discount}% off
        </div>
        <img
          src={imageSrc}
          alt="Jersey"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="w-full h-60 object-scale-up z-0"
        />
      </figure>
      <div className="card-body h-1/4">
        <h2 className="card-title justify-center w-full">{name}</h2>
        <p className="text-center">{des}</p>
        <div className="flex flex-row justify-center w-full">
          <p className="line-through decoration-red-700 text-red-700 text-center">${price}</p>
          <p className="text-center">${discountedPrice}</p>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={handleClick}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
