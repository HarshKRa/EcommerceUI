import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
  Storefront,
} from "@mui/icons-material";
import { light } from "@mui/material/styles/createPalette";
import CategorySheet from "./CategorySheet";
import { mainCategories } from "../../../Data/category/mainCategory";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const[slectedCategory,setSelcetdCategory] = useState("Men");
  const[showCategorySheet,setShowCategorySheet] = useState(false);

  const navigate = useNavigate();

  console.log(slectedCategory);
  return (
    <>
      <Box className="Sticky top-0 left-0 right-0 bg-white"
      sx={{zIndex:2}}>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && <IconButton>
                <MenuIcon />
              </IconButton>}

              <h1 
              onClick={()=>navigate("/")}
              className="logo cursor-pointer text-lg md:text-2xl text-primary-color">
                Harsh Bazzar
              </h1>
            </div>

            <ul className="flex items-center font-medium text-gray-800 ">
              {mainCategories.map(
                (item) => (
                  <li 
                  onMouseLeave={()=>{
                    setShowCategorySheet(false);
                  }}

                  onMouseEnter={()=>{
                    setShowCategorySheet(true);
                    setSelcetdCategory(item.categoryId);
                  }}
                  className="mainCategory hover:text-primary-color
                  hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center"
                  >{item.name}</li>
                )
              )}
            </ul>
          </div>

          <div className="flex gap-2 lg:gap-6">
            <IconButton>
              <SearchIcon />
            </IconButton>

            {true ? (
              <Button
              onClick={()=>navigate("/account/orders")} className="flex items-center gap-2">
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://t4.ftcdn.net/jpg/08/08/37/31/360_F_808373133_lrCrFLLTXF0A2WQK7QKMCNAzKCjX7kvb.jpg"
                />
                <h1 className="font-semibold hidden lg:block">Harsh</h1>
              </Button>
            ) : (
              <Button variant="contained">Login</Button>
            )}

            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>

            <IconButton
            onClick={()=>navigate("cart")}>
              <AddShoppingCart sx={{ fontSize: 29 }} />
            </IconButton>

            {isLarge && (
              <Button startIcon={<Storefront />} variant="outlined">
                Become Seller
              </Button>
            )}
          </div>
        </div>

        {showCategorySheet && <div
        onMouseLeave={()=>{
          setShowCategorySheet(false);
        }}
        onMouseEnter={()=>{
          setShowCategorySheet(true);
        }}
        className="categorySheet absolute top-[4.41rem] left-0 right-0 lg:left-20 lg:right-20">
          <CategorySheet selctedCategory={slectedCategory}/>
        </div>}
      </Box>
    </>
  );
};

export default Navbar;
