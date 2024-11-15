import React from "react";
import { levelTwoCategoriesMen } from "../../../Data/category/levelTwo/MenLevelTwo";
import { levelTwoCategoriesWomen } from "../../../Data/category/levelTwo/WomenLevelTwo";
import { levelTwoCategoriesElectronics } from "../../../Data/category/levelTwo/ElectricsLevelTwo";
import { levelTwoCategoriesHomeFurniture } from "../../../Data/category/levelTwo/HomeAndFurnitureLevelTwo";
import { levelThreeCategoriesMen } from "../../../Data/category/levelThree/MenLevelThree";
import { levelThreeCategoriesWomen } from "../../../Data/category/levelThree/WomenLevelThree";
import { levelThreeCategoriesElectronics } from "../../../Data/category/levelThree/ElctronicsLevelThree";
import { levelThreeCategoriesHomeFurniture } from "../../../Data/category/levelThree/HomeAndKitchenLevelThree";
import { Box } from "@mui/material";

const categoryTwo:{[key:string]:any} = {
  men: levelTwoCategoriesMen,
  women: levelTwoCategoriesWomen,
  electronics: levelTwoCategoriesElectronics,
  home_furniture: levelTwoCategoriesHomeFurniture,
};

const categoryThree:{[key:string]:any}  = {
  men: levelThreeCategoriesMen,
  women: levelThreeCategoriesWomen,
  electronics: levelThreeCategoriesElectronics,
  home_furniture: levelThreeCategoriesHomeFurniture,
};

const CategorySheet = ({selctedCategory,setShowSheet}:any) => {
  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter(
      (child: any) => child.parentCategoryId == parentCategoryId
    );
  };
  return (
    <Box
      sx={{ zIndex: 10 }}
      className="shadow-lg h-max-[500px] overflow-y-auto bg-white"
    >
      <div className="flex text-sm flex-wrap">
        {categoryTwo[selctedCategory]?.map((item:any,index:any) => (
          <div
          className={`p-8 lg:w-[20%] ${index%2==0?"bg-slate-50":"bg-white1"}`}>
            <p className="text-primary-color mb-5 font-semibold">
              {item.name}
            </p>
            <ul className="space-y-3">
              {childCategory(categoryThree[selctedCategory], item.categoryId).map(
                (item: any) => (
                  <div>
                    <li className="hover:text-primary-color cursor-pointer">
                      {item.name}
                    </li>
                  </div>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;
