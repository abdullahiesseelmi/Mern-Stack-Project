import React from "react";
import banner from "../assets/images/Home/banner.png";
import b_foodi1 from "../assets/images/Home/b-food1.png";

const Banner = () => {
  return (
    <div
      className="section-container 
    bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%"
    >
      <div className="py-4 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img src={banner} alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="flex bg-white rounded-2xl items-center py-2 px-3 gap-3 shadow-md ring ring-yellow-500  w-64">
              <img src={b_foodi1} alt="" className="rounded-2xl" />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Spicy Noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <h5 className="font-bold">${18.12}</h5>
              </div>
            </div>

            <div className="sm:flex hidden bg-white rounded-2xl items-center py-2 px-3 gap-3 shadow-md ring ring-yellow-500  w-64">
              <img src={b_foodi1} alt="" className="rounded-2xl" />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Spicy Noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <h5 className="font-bold">${18.12}</h5>
              </div>
            </div>
          </div>
        </div>
        {/*text*/}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Mareeg Restuarant
            <br /> <span className="text-green">Coffe</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Mareeg Restuarant waxaad ka heleysaa cunto dhedhen leh iyo weliba
            qiima ku raaligeliya.
          </p>
          <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
