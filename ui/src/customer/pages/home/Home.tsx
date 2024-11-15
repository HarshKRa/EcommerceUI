import React from "react";
import ElectricCategory from "./ElectricCategory/ElectricCategory";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import Deal from "./Deal/Deal";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import { Button } from "@mui/material";
import { Storefront } from "@mui/icons-material";

const Home = () => {
  return (
    <>
      <div className="space-y-5 lg:space-y-10 realtive pb-20">
        <ElectricCategory />
        <CategoryGrid />

        <section className="pt-20">
          <h1 className="text-lg lg:text-4xl text-primary-color pb-5 lg:pb-10 text-center ">
            TODAY'S DEAL
          </h1>
          <Deal />
        </section>

        <section className="py-20">
          <h1 className="text-lg lg:text-4xl text-primary-color pb-5 lg:pb-10 text-center ">
            SHOP BY CATEGORY
          </h1>
          <ShopByCategory />
        </section>

        <section className="lg:px-20 relative h[200px lg:h-[450px] object-cover">
            <img className="w-full h-full" src="https://media.istockphoto.com/id/1682254928/photo/happy-businesswoman-holding-tablet.jpg?s=2048x2048&w=is&k=20&c=zia33P8exu_9RVuyvTRrd6NrAIROz8wKzJ7DcubnbOo=" alt="" />
            <div className="absolute top-1/2 left-4 lg:left-[15rem] transform-translate-1/2 fonst lg:text-4xl space-y-3">
              <p>Sell your Product</p>
              <p className="text-lg md:text-2xl">With <span className="logo">Harsh Baggar</span> </p>

              <div className="pt-6 flex justify-center">
                <Button startIcon={<Storefront />} variant="contained" size="large">
                  Become Seller
                </Button>
              </div>
              
            </div>
        </section>
      </div>
    </>
  );
};

export default Home;
