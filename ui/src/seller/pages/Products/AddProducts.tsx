import { AddPhotoAlternate, Close } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid2,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { uploadToCloudnary } from "../../../Util/UploadToCloudnary";
import { color } from "../../../Data/filter/colors";
import { mainCategories } from "../../../Data/category/mainCategory";
import { useAppDispatch } from "../../../State/Store";
import { createProduct } from "../../../State/seller/SellerProductSlice";

const AddProducts = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const [snakbarOpen, setOpenSnackbar] = useState(false);

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      mrpPrice: "",
      sellingPrice: "",
      quantity: "",
      colour: "",
      images: [],
      category: "",
      category2: "",
      category3: "",
      sizes: "",
    },
    // validationSchema: {},
    onSubmit: (values) => {
      console.log(values);
      dispatch(createProduct({request:values,jwt:localStorage.getItem("jwt")}))
    },
  });

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    setUploadImage(true);
    const image = await uploadToCloudnary(file);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadImage(false);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
        <Grid2 container spacing={2}>
          {/* file */}
          <Grid2 className="flex flex-wrap gap-5" size={{ xs: 12 }}>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />

            <label className="relative" htmlFor="fileInput">
              <span
                className="w-24 h-24 cursor-pointer flex items-center
               justify-center p-3 border rounded-md border-gray-400"
              >
                <AddPhotoAlternate className="text-gray-700" />
              </span>
              {uploadImage && (
                <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex 
                justify-center items-center">
                  <CircularProgress />
                </div>
              )}
            </label>

            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((image, index) => (
                <div className="relative">
                  <img
                    src={image}
                    key={index}
                    alt={`productImage ${index + 1}`}
                    className="w-24 h-24 object-cover"
                  />

                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    className=""
                    size="small"
                    color="error"
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      outline: "none",
                    }}
                  >

                  <Close sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid2>

          {/* title */}
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid2>

          {/* description */}
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              id="mrpPrice"
              name="mrpPrice"
              label="MRP Price"
              type="number"
              value={formik.values.mrpPrice}
              onChange={formik.handleChange}
              error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
              helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
              required
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              id="sellingPrice"
              name="sellingPrice"
              label="Selling Price"
              type="number"
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              error={
                formik.touched.sellingPrice &&
                Boolean(formik.errors.sellingPrice)
              }
              helperText={
                formik.touched.sellingPrice && formik.errors.sellingPrice
              }
              required
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl
              fullWidth
              error={formik.touched.colour && Boolean(formik.errors.colour)}
              required
            >
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId="color-label"
                id="color"
                name="color"
                onChange={formik.handleChange}
                label="Color"
              >
                <MenuItem>
                  <em>None</em>
                </MenuItem>

                {color.map((item, index) => (
                  <MenuItem value={item.name}>
                    <div className="flex gap-3">
                      <span
                        style={{ background: item.hex }}
                        className={`h-5 w-5 rounded-full ${
                          item.name == "white" ? "border" : "marker:"
                        }`}
                      ></span>
                      <p>{item.name}</p>
                    </div>
                  </MenuItem>
                ))}
              </Select>

              {formik.touched.colour && Boolean(formik.errors.colour) && (
                <FormHelperText>{formik.errors.colour}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl
              fullWidth
              error={formik.touched.sizes && Boolean(formik.errors.sizes)}
              required
            >
              <InputLabel id="sizes-label">Size</InputLabel>
              <Select
                labelId="sizes-label"
                id="sizes"
                name="sizes"
                onChange={formik.handleChange}
                label="Size"
              >
                <MenuItem>
                  <em>None</em>
                </MenuItem>

                {["XS","S","M","L","XL","XXL"].map((item, index) => (
                  <MenuItem value={item}>
                    <div className="flex gap-3">
                      <span
                        className={`h-5 w-5 rounded-full 
                        }`}
                      ></span>
                      <p>{item}</p>
                    </div>
                  </MenuItem>
                ))}
              </Select>

              {formik.touched.sizes && Boolean(formik.errors.sizes) && (
                <FormHelperText>{formik.errors.sizes}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                label="Category"
              >
                <MenuItem>
                  <em>None</em>
                </MenuItem>

                {mainCategories.map((item, index) => (
                  <MenuItem value={item.categoryId}>
                   {item.name}
                  </MenuItem>
                ))}
              </Select>

              {formik.touched.category && Boolean(formik.errors.category) && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category2-label">Category2</InputLabel>
              <Select
                labelId="category2-label"
                id="category2"
                name="category2"
                value={formik.values.category2}
                onChange={formik.handleChange}
                label="Category"
              >
                <MenuItem>
                  <em>None</em>
                </MenuItem>

                {mainCategories.map((item, index) => (
                  item.levelTwoCategory.map((items,ind)=>
                    <MenuItem value={items.name}>
                  {items.name}
                 </MenuItem>
                 )
                ))}
              </Select>

              {formik.touched.category2 && Boolean(formik.errors.category2) && (
                <FormHelperText>{formik.errors.category2}</FormHelperText>
              )}
            </FormControl>
          </Grid2>


          <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category3-label">Category3</InputLabel>
              <Select
                labelId="category3-label"
                id="category3"
                name="category3"
                value={formik.values.category3}
                onChange={formik.handleChange}
                label="Category3"
              >
                <MenuItem>
                  <em>None</em>
                </MenuItem>

                {mainCategories.map((item, index) => (
                  <MenuItem value={item.categoryId}>
                   {item.name}
                  </MenuItem>
                ))}
              </Select>

              {formik.touched.category3 && Boolean(formik.errors.category3) && (
                <FormHelperText>{formik.errors.category3}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <Button 
            fullWidth
            variant="contained"
            type="submit"
            color="primary"
            sx={{p:"14px"}}
            >
              {
                false ? <CircularProgress size={"small"}/> :
                <p>Add Product</p>
              }
            </Button>

          </Grid2>
        </Grid2>
      </form>
    </div>
  );
};

export default AddProducts;
