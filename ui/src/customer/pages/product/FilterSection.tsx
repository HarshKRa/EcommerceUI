import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useState } from "react";
import { color } from "../../../Data/filter/colors";
import { price } from "../../../Data/filter/price";
import { discount } from "../../../Data/filter/discount";
import { useSearchParams } from "react-router-dom";

const FilterSection = () => {
  const [expandColor, setExpandColor] = useState(false);
  const [expandPrice, setExpandPrice] = useState(false);
  const [expandDiscount, setExpandDiscount] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const updateFilterParams = (e: any) => {
    const { value, name } = e.target;

    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    console.log("ClearAllFilters", searchParams);
    searchParams.forEach((value: any, key: any) => {
      searchParams.delete(key);
    });
    setSearchParams();
  };
  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
        <p className="text-lg font-semibold">Filters</p>
        <Button
          onClick={clearAllFilters}
          size="small"
          className="text-teal-600 cursor-pointer font-semibold"
        >
          clear all
        </Button>
      </div>

      <Divider />

      <div className="px-9 space-y-6">
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[500],
                pb: "14px",
              }}
              className="text-2xl font-semibold"
              id="color"
            >
              Color
            </FormLabel>
            <RadioGroup
              aria-labelledby="color"
              defaultValue=""
              name="color"
              onChange={updateFilterParams}
            >
              {color.slice(0, expandColor ? color.length : 5).map((item) => (
                <FormControlLabel
                  value={item.name}
                  control={<Radio />}
                  label={
                    <div className="flex items-center gap-3">
                      <p>{item.name}</p>
                      <p
                        style={{ backgroundColor: item.hex }}
                        className={`h-4 w-4 rounded-full ${
                          item.name === "white" ? "border" : ""
                        }`}
                      ></p>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              onClick={() => setExpandColor(!expandColor)}
              className="text-primary-color cursor-pointer hover:text-teal-900 flex items-center"
            >
              {expandColor ? "hide" : `+${color.length - 5} more`}
            </button>
          </div>
        </section>
        <Divider />
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[500],
                pb: "14px",
              }}
              className="text-2xl font-semibold"
              id="price"
            >
              Price
            </FormLabel>
            <RadioGroup
              aria-labelledby="price"
              defaultValue=""
              name="price"
              onChange={updateFilterParams}
            >
              {price.slice(0, expandPrice ? price.length : 5).map((item) => (
                <FormControlLabel
                  value={item.name}
                  control={<Radio />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              onClick={() => setExpandPrice(!expandPrice)}
              className="text-primary-color cursor-pointer hover:text-teal-900 flex items-center"
            >
              {expandPrice ? "hide" : `+${price.length - 5} more`}
            </button>
          </div>
        </section>
        <Divider />
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[500],
                pb: "14px",
              }}
              className="text-2xl font-semibold"
              id="discount"
            >
              Discount
            </FormLabel>
            <RadioGroup
              aria-labelledby="discount"
              defaultValue=""
              name="discount"
              onChange={updateFilterParams}
            >
              {discount
                .slice(0, expandDiscount ? discount.length : 5)
                .map((item) => (
                  <FormControlLabel
                    value={item.name}
                    control={<Radio />}
                    label={item.name}
                  />
                ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              onClick={() => setExpandDiscount(!expandDiscount)}
              className="text-primary-color cursor-pointer hover:text-teal-900 flex items-center"
            >
              {expandDiscount ? "hide" : `+${discount.length - 5} more`}
            </button>
          </div>
        </section>

        <Divider />
      </div>
    </div>
  );
};

export default FilterSection;
