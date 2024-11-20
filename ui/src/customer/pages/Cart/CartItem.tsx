import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import React, { useState } from "react";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const handleUpdateQuantity = () => {};
  return (
    <div className="border rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src="https://media.istockphoto.com/id/1154992793/photo/hipster-handsome-male-model-with-beard-wearing-white-blank-t-shirt-with-space-for-your-logo.webp?s=612x612&w=is&k=20&c=JmPq6lJ26dI1MWioHwxLOhLYgooFBL5TeiwbB8D1Tbo="
            alt=""
          />
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-lg">Virani Clothing</h1>
          <p className="text-gray-600 font-medium text-sm">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="text-gray-400 text-xs">
            <strong>Sold by : </strong> Natural LifeStyle Products Private
            Limited
          </p>
          <p className="text-sm ">7 days replecemnt available</p>
          <p className="text-sm text-gray-500">
            <strong>quantity : </strong> 5
          </p>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button disabled={true} onClick={handleUpdateQuantity}>
              <Remove />
            </Button>
            <span>{5}</span>
            <Button onClick={handleUpdateQuantity}>
              <Add />
            </Button>
          </div>
        </div>
        <div className="pr-5">
          <p className="text-gray-700 font-medium">₹ 799</p>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton color="primary">
            <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
