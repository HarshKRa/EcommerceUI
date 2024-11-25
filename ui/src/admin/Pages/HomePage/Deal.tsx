import { Button } from "@mui/material";
import React, { useState } from "react";
import DealTabel from "./DealTabel";
import DealCategoryTabel from "./DealCategoryTabel";
import CreateDealForm from "./CreateDealForm";

const tabs = ["Deals", "Category", "Create Deal"];
const Deal = () => {
  const [activeTab, setActiveTab] = useState("Deals");
  return (
    <div>
      <div className="flex gap-4">
        {tabs.map((item, index) => (
          <Button
            onClick={() => setActiveTab(item)}
            variant={activeTab == item ? "contained" : "outlined"}
          >
            {item}
          </Button>
        ))}
      </div>
      
      <div className="mt-5">
      {activeTab === "Deals" ? (
        <DealTabel />
      ) : activeTab === "Category" ? (
        <DealCategoryTabel />
      ) : (
        <div className="mt-5 flex flex-col justify-center items-center h-[70vh]">
          <CreateDealForm />
        </div>
      )}
      </div>
    </div>
  );
};

export default Deal;
