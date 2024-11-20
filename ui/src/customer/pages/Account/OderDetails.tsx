import { Box, Button, Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import OderSteppers from "./OderSteppers";
import { Payments } from "@mui/icons-material";
import Oders from "./Oders";

const OderDetails = () => {
  const nevigate = useNavigate();
  return (
    <Box>
      <section className="flex flex-col items-center justify-center">
        <img
          className="w-[30%]"
          src="https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">Ram Clothing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            reiciendis sapiente perferendis eos, non quisquam porro delectus
            aspernatur minima voluptas?
          </p>
          <p>
            <strong>Size : </strong>M
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
              <p>{"Zosh"}</p>
              <Divider flexItem orientation="vertical" />
              <p>{987654321}</p>
            </div>

            <p>Lorem ipsum dolor sit amet, Bihar - 130012</p>
          </div>
        </div>

        <div className="border space-y-5">
            <div className="flex justify-between text-sm pt-5 px-5">
                <div className="space-y-1">
                    <p className="font-bold">Total Item Price</p>
                    <p className="text-green-500 font-medium text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ducimus.</p>
                </div>

                <p className="font-medium">₹100.00</p>
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
                    {"Harhas Cloths"}
                </p>
            </div>

            <div className="p-10">
                <Button
                disabled={true}
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
