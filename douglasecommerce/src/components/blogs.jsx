import React from "react";
import Img1 from "./images/pexels-anastasiya-lobanovskaya-1035692.png";
import Img2 from "./images/pexels-anastasiya-lobanovskaya-1035692.png";
import Img3 from "./images/pexels-anastasiya-lobanovskaya-1035692.png";
import Img4 from "./images/pexels-anastasiya-lobanovskaya-1035692.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;



  // <div className="my-12">
    //   <div className="container">
    //     {/* Header section */}
    //     {/* <Heading title="Recent News" subtitle={"Explore Our Blogs"} /> */}

    //     {/* Blog section */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
    //       {/* Blog card */}
    //       {BlogData.map((data) => (
    //         <div
    //           data-aos="fade-up"
    //           data-aos-delay={data.aosDelay}
    //           key={data.title}
    //           className="bg-white dark:bg-gray-900"
    //         >
    //           {/* image section */}
    //           <div className="overflow-hidden rounded-2xl mb-2">
    //             <img
    //               src={data.image}
    //               alt=""
    //               className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
    //             />
    //           </div>
    //           {/* content section */}
    //           <div className="space-y-2">
    //             <p className="text-xs text-gray-500">{data.published}</p>
    //             <p className="font-bold line-clamp-1">{data.title}</p>
    //             <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
    //               {data.subtitle}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>