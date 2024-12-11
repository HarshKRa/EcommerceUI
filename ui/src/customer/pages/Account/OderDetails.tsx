import { Box, Button, Divider } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OderSteppers from "./OderSteppers";
import { Payments } from "@mui/icons-material";
import Oders from "./Oders";
import { useAppDispatch, useAppSelctoer } from "../../../State/Store";
import { fetchOrderById, fetchOrderItemById } from "../../../State/customer/OrderSlice";
import Product from "../Product/Product";

const OderDetails = () => {
  const nevigate = useNavigate();
  const dispatch = useAppDispatch();
  const {orderId,orderItemId} = useParams();
  const {order} = useAppSelctoer((store)=>store)

  useEffect(()=>{
       dispatch(fetchOrderById({orderId:Number(orderId),jwt:localStorage.getItem("jwt") || ""}));
       dispatch(fetchOrderItemById({orderItemId:Number(orderItemId),jwt:localStorage.getItem("jwt") || ""}))
  },[])

  console.log(order);
  return (
    <Box>
      <section className="flex flex-col items-center justify-center">
        <img
          className="w-[30%]"
          src={order.orderItem?.product.image[0]}
          alt=""
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">{order.orderItem?.product.seller?.businessDetails.businessName}</h1>
          <p>
            {order.orderItem?.product.title}
          </p>
          <p>
            <strong>Size : </strong>{order.orderItem?.product.size}
          </p>
        </div>
        <div>
          <Button onClick={() => nevigate(`/reviews/${5}/create`)}>
            Write here
          </Button>
        </div>
      </section>

      <section className="border p-5">
        <OderSteppers orderStatus="SHIPPED" />
      </section>

      <section>
        <div className="border p-5">
          <h1 className="font-bold pb-3">Delivery Address</h1>
          <div className="text-sm space-y-2">
            <div className="flex gap-5 font-medium">
              <p>{order.currentOrder?.address?.name}</p>
              <Divider flexItem orientation="vertical" />
              <p>{order.currentOrder?.address?.mobile}</p>
            </div>

            <p>{order.currentOrder?.address?.address},{order.currentOrder?.address?.city} {order.currentOrder?.address?.pinCode}</p>
          </div>
        </div>

        <div className="border space-y-5">
            <div className="flex justify-between text-sm pt-5 px-5">
                <div className="space-y-1">
                    <p className="font-bold">Total Item Price</p>
                    <p className="text-green-500 font-medium text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ducimus.</p>
                </div>

                <p className="font-medium">₹{order.orderItem?.sellingPrice}</p>
            </div>

            <div className="px-5">
                <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
                    <Payments />
                    <p>Pay On Delivery</p>
                </div>
            </div>

            <Divider />

            <div className="px-5 pb-5">
                <p className="text-sm">
                    <strong>Sold by : </strong>
                    {order.orderItem?.product.seller?.businessDetails.businessName}
                </p>
            </div>

            <div className="p-10">
                <Button
                color='error'
                sx={{py:"0.7rem"}}
                className=""
                variant="outlined"
                fullWidth>
                    {false ? "oder canceled" : "Cancel Order"}
                </Button>
            </div>
        </div>
      </section>
    </Box>
  );
};

export default OderDetails;
