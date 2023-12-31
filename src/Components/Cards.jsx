/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Cards = ({ item }) => {
  const [isHearetFiltered, setisHearetFiltered] = useState(false);
  const handleHeartClick = () => {
    setisHearetFiltered(!isHearetFiltered);
  };

  return (
    <div className="card w-90 bg- shadow-xl">
      <div
        className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${
          isHearetFiltered ? "text-rose-500" : "bg-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="h-5 w-5 cursor-pointer" />
      </div>

      <Link to={`/menu/${item.id}`}>
        <figure>
          <img
            src={item.image}
            alt="Shoes"
            className="hover:scale-105 transition-all duration-200 md:h-64"
          />
        </figure>
      </Link>

      <div className="card-body">
     <Link to={`/menu/${item.id}`}><h2 className="card-title">{item.name}</h2></Link>
        <p>I{item.recipe}</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">$</span>
            {item.price}
          </h5>
          <button className="btn bg-rose-400 text-white">Buy Now</button>
        </div>
      </div>
      
    </div>
  );
};

export default Cards;
