import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const PersonalDetails = () => {
  const formik = useFormik({
    initialValues: {
      sellerName: "",
      sellerEmail: "",
      sellerMobile: "",
    },
    validationSchema: {},
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Box>
      <div className="space-y-9">

      <TextField
          fullWidth
          name="sellerName"
          label="Seller Name"
          value={formik.values.sellerName}
          onChange={formik.handleChange}
          error={
            formik.touched.sellerName &&
            Boolean(formik.errors.sellerName)
          }
          helperText={
            formik.touched.sellerName && formik.errors.sellerName
          }
        />
        
        <TextField
          fullWidth
          name="sellerEmail"
          label="Seller Email"
          value={formik.values.sellerEmail}
          onChange={formik.handleChange}
          error={
            formik.touched.sellerEmail && Boolean(formik.errors.sellerEmail)
          }
          helperText={
            formik.touched.sellerEmail && formik.errors.sellerEmail
          }
        />

        <TextField
          fullWidth
          name="sellerMobile"
          label="Seller Mobile"
          value={formik.values.sellerMobile}
          onChange={formik.handleChange}
          error={formik.touched.sellerMobile && Boolean(formik.errors.sellerMobile)}
          helperText={formik.touched.sellerMobile && formik.errors.sellerMobile}
        />

        <div>
          <Button fullWidth variant="contained">
            Submit
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default PersonalDetails;
