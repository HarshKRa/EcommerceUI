import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import AddressCard from "./AddressCard";
import AddressFrom from "./AddressFrom";
import PricingCard from "../Cart/PricingCard";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const paymentGatwayList = [
  {
    value: "RAZORPAY",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-razorpay-logo-icon-download-in-svg-png-gif-file-formats--payment-gateway-brand-logos-icons-1399875.png?f=webp",
    label: "",
  },
  {
    value: "STRIPE",
    img: "https://cdn.iconscout.com/icon/free/png-512/free-payment-icon-download-in-svg-png-gif-file-formats--stripe-card-pay-bank-methods-pack-e-commerce-shopping-icons-51317.png?f=webp&w=256",
    label: "",
  },
];

function CheckOut() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paymentGetWay, setPaymentGetWay] = React.useState("RAZORPAY");

  console.log(paymentGetWay);
  

  const handlePaymentChange =(event:any)=>{
    setPaymentGetWay(event.target.value)
  }
  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen relative -z-10">
        <div className="spac-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Select Address</h1>
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>

            <div className="text-xs font-medium space-y-5">
              <p>Saved Address</p>
              <div className="space-y-3">
                {[1, 1, 1, 1].map((item) => (
                  <AddressCard />
                ))}
              </div>
            </div>

            <div className="py-4 px-5 rounded-md border">
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>
          </div>

          <div className="">
            <div>
              <div className="space-y-3 border rounded-md p-5">
                <h1 className="text-primary-color font-medium pb-2 text-center">Chose Payment Getway</h1>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  className="flex justify-between pr-0"
                  onChange={handlePaymentChange}
                  value={paymentGetWay}
                >
                  {paymentGatwayList.map((item) => (
                    <FormControlLabel
                      className="border w-[45%] pr-2 rounded-md justify-center"
                      value={item.value}
                      control={<Radio />}
                      label={
                        <img
                          className={`${
                            item.value == "stripe" ? "w-14" : ""
                          } object`}
                          src={item.img}
                          alt={item.label}
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              </div>
            </div>
            <div className="border rounded-md mx">
              <PricingCard />

              <div className="p-5">
                <Button fullWidth variant="contained" sx={{ py: "11px" }}>
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressFrom />
        </Box>
      </Modal>
    </>
  );
}

export default CheckOut;
