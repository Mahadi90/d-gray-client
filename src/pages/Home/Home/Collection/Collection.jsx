import React from "react";
import img1 from "../../../../assets/images/best colection.jpg";
import img2 from "../../../../assets/images/new.jpg";

const Collection = () => {
  return (
    <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-500">
      <div className=" glass shadow-md">
        <figure>
          <img className="w-full h-72" src={img1} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="text-center my-0 font-bold text-2xl">
            Always get from us <br /> <span className="text-red-400"> Best Collection</span>
          </h2>
        </div>
      </div>
      <div className=" glass shadow-md">
        <figure>
          <img className="w-full h-72" src={img2} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="text-center my-0 font-bold text-2xl">
            Always get from us <br /><span className="text-red-400"> New Collection</span>
          </h2>
        </div>
      </div>
      <div className="card glass shadow-md flex text-center text-white bg-yellow-900">
        <h2 className="py-32 lg:p-0 lg:mt-[40%] text-xl">Shopping up to 1990tk and get <br /> Delivery Charge <span className="text-green-400 font-bold">Free</span></h2>
      </div>
    </div>
  );
};

export default Collection;
