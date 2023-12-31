import React from "react";

const categoriesItems = [
  {
    id: 1,
    title: "Main Dish",
    desc: "(75 dishes)",
    image: "https://i.ibb.co/qWWFsvP/img1.png",
  },

  {
    id: 2,
    title: "Breaf-Fast",
    desc: "(32 break fast)",
    image: "https://i.ibb.co/vswVBwQ/img2.png",
  },

  {
    id: 3,
    title: "Dessert",
    desc: "(75 Desert)",
    image: "https://i.ibb.co/hgNc19T/img3.png",
  },

  {
    id: 4,
    title: "Brows All",
    desc: "(234 Items)",
    image: "https://i.ibb.co/vBfQhVp/img4.png",
  },
];

const Categories = () => {
  return (
    <div className="section-container py-16 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="text-center">
        <p className="subtitle">Customer favorites</p>
        <h2 className="title">Papular Categories</h2>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {categoriesItems.map((items, index) => (
          <div
            key={index}
            className="shadow-lg rounded-md bg-yellow-50 py-6 px-5 w-64
            mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all"
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                src={items.image}
                alt=""
                className="bg-[#C1F1C6] py-5 rounded-full w-28 h-28"
              />
            </div>

            <div className="mt-5 space-y-1">
              <h5>{items.title}</h5>
              <p>{items.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
