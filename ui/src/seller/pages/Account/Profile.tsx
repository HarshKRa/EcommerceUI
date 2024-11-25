import { Edit } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import ProfileFiledCard from "../../../component/ProfileFiledCard";
import PersonalDetails from "./PersonalDetails";
import Address from "./Address";
import BankDetails from "./BankDetails";
import BussinessDetails from "./BussinessDetails";

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

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (formName: string) => {
    setOpen(true);
    SetSelectedForm(formName);
  };
  const handleClose = () => setOpen(false);

  const [selectedForm, SetSelectedForm] = useState("personalDetails");

  const renderSelectedForm = () => {
    switch (selectedForm) {
      case "personalDetails":
        return <PersonalDetails />;
      case "pickupAddress":
        return <Address />;
      case "bankDetails":
        return <BankDetails />;
      default:
        return <BussinessDetails />;
    }
  };

  return (
    <div className="lg:p-20 pt-3 pb-20 space-y-20">
      <div className="w-full lg:w[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
          <div>
            <Button
              onClick={() => handleOpen("personalDetails")}
              variant="contained"
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>

        <div>
          <Avatar
            sx={{ width: "10rem", height: "10rem" }}
            src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <div>
            <ProfileFiledCard keys={"Seller Name"} value={"Raam Verani"} />
            <Divider />
            <ProfileFiledCard
              keys={"Seller Email"}
              value={"Raamverani@gmail.com"}
            />
            <Divider />
            <ProfileFiledCard keys={"Seller Mobile"} value={"1234567890"} />
          </div>
        </div>
      </div>

      <div className="w-full lg:w[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">
            Bussiness Details
          </h1>
          <div>
            <Button
              onClick={() => handleOpen("bussinessDetails")}
              variant="contained"
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>

        <div>
          <div>
            <ProfileFiledCard
              keys={"Business Name/Brand Name"}
              value={"Verani Clothing"}
            />
            <Divider />
            <ProfileFiledCard keys={"GSTIN"} value={"GST1234566"} />
            <Divider />
            <ProfileFiledCard keys={"Account Status"} value={"PENDING"} />
          </div>
        </div>
      </div>

      <div className="w-full lg:w[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Pinkup Adress</h1>
          <div>
            <Button
              onClick={() => handleOpen("pickupAddress")}
              variant="contained"
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>

        <div>
          <div>
            <ProfileFiledCard
              keys={"Adress"}
              value={"Behind teliphone exchange, Bihar"}
            />
            <Divider />
            <ProfileFiledCard keys={"City"} value={"Bihar Sharif"} />
            <Divider />
            <ProfileFiledCard keys={"State"} value={"Bihar"} />
            <Divider />
            <ProfileFiledCard keys={"Mobile"} value={"1234567890"} />
          </div>
        </div>
      </div>

      <div className="w-full lg:w[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Bank Details</h1>
          <div>
            <Button
              onClick={() => handleOpen("bankDetails")}
              variant="contained"
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>

        <div>
          <div>
            <ProfileFiledCard
              keys={"Account Holder Name"}
              value={"Harsh Raj Kumar"}
            />
            <Divider />
            <ProfileFiledCard keys={"Account Number"} value={"8941234566"} />
            <Divider />
            <ProfileFiledCard keys={"IFSC CODE"} value={"PUNBO12034"} />
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{renderSelectedForm()}</Box>
      </Modal>
    </div>
  );
};

export default Profile;
