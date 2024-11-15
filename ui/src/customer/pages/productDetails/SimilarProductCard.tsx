import React from "react";

const SimilarProductCard = () => {
  return (
    <>
      <div className="group px-4 relative">
        <div className="card">
          <img
            className="card-media object-top"
            src="https://plus.unsplash.com/premium_photo-1669374216974-ae28097f1ceb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="">
            <h1>Niky</h1>
            <p>White tshirt</p>
          </div>

          <div className="price flex item-center gap-3">
            <span className="font-sans text-gray-800">₹ 800</span>
            <span className="thin-line-through tex-gray-400">₹ 999</span>
            <span className="text-primary-color font-semibold">60%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimilarProductCard;
