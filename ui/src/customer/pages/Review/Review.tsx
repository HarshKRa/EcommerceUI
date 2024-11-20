import React from "react";
import ReviewCard from "./ReviewCard";
import { Divider } from "@mui/material";

const Review = () => {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
        <img
          src="https://plus.unsplash.com/premium_photo-1693221161704-4e4820bc2e28?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div>
          <div>
            <p className="font-bold text-xl">Ram Clothing</p>
            <p className="text-lg text-gray-600">Women Sarees</p>
          </div>

          <div>
            <div className="price flex item-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">₹ 800</span>
              <span className="line-through tex-gray-400">₹ 999</span>
              <span className="text-primary-color font-semibold">60%</span>
            </div>

          </div>
        </div>
      </section>

      <section className="space-y-5 w-full">

        {
            [1,1,1,1,1,1,1,1].map((item)=> <div className="space-y-3 w-full">
                <ReviewCard />
                <Divider />
            </div>)
        }
      </section>
    </div>
  );
};

export default Review;
