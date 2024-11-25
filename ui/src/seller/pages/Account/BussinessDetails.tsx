import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const BussinessDetails = () => {
  const formik = useFormik({
    initialValues: {
      businessName: "",
      gstin: "",
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
          name="businessName"
          label="Business Name"
          value={formik.values.businessName}
          onChange={formik.handleChange}
          error={
            formik.touched.businessName &&
            Boolean(formik.errors.businessName)
          }
          helperText={
            formik.touched.businessName && formik.errors.businessName
          }
        />
        
        <TextField
          fullWidth
          name="gstin"
          label="GSTIN"
          value={formik.values.gstin}
          onChange={formik.handleChange}
          error={
            formik.touched.gstin && Boolean(formik.errors.gstin)
          }
          helperText={
            formik.touched.gstin && formik.errors.gstin
          }
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

export default BussinessDetails;
