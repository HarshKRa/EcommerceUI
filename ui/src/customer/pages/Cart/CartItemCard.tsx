import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import React, { useState } from "react";
import { CartItem } from "../../../Types/CartType";
import { useAppDispatch } from "../../../State/Store";
import { fetchUserCart, updateCartItem } from "../../../State/customer/CartSlice";

const CartItemCard = ({item}:{item:CartItem}) => {
  const dispatch = useAppDispatch();

  const handleUpdateQuantity = (value:number) => {
          dispatch(updateCartItem({jwt:localStorage.getItem("jwt"),
          carItemId:item.id,
          cartItem:{quantity:item.quantity+value}
        }))
  };
  return (
    <div className="border rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src={item.product.image[0]}
            alt=""
          />
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-lg">{item.product.seller?.businessDetails.businessName}</h1>
          <p className="text-gray-600 font-medium text-sm">
            {item.product.title}
          </p>
          <p className="text-gray-400 text-xs">
            <strong>Sold by : </strong> Natural LifeStyle Products Private
            Limited
          </p>
          <p className="text-sm ">7 days replecemnt available</p>
          <p className="text-sm text-gray-500">
            <strong>quantity : </strong> {item.quantity}
          </p>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button disabled={item.quantity===1?true:false} onClick={()=>handleUpdateQuantity(-1)}>
              <Remove />
            </Button>
            <span>{item.quantity}</span>
            <Button onClick={()=>handleUpdateQuantity(1)}>
              <Add />
            </Button>
          </div>
        </div>
        <div className="pr-5">
          <p className="text-gray-700 font-medium">₹ {item.sellingPrice}</p>
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

export default CartItemCard;