import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const BankDetails = () => {
  const formik = useFormik({
    initialValues: {
      accountNumber: "",
      ifscCode: "",
      accountHolderName: "",
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
          name="accountHolderName"
          label="Account Holder Name"
          value={formik.values.accountHolderName}
          onChange={formik.handleChange}
          error={
            formik.touched.accountHolderName &&
            Boolean(formik.errors.accountHolderName)
          }
          helperText={
            formik.touched.accountHolderName && formik.errors.accountHolderName
          }
        />
        
        <TextField
          fullWidth
          name="accountNumber"
          label="Account Number"
          value={formik.values.accountNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.accountNumber && Boolean(formik.errors.accountNumber)
          }
          helperText={
            formik.touched.accountNumber && formik.errors.accountNumber
          }
        />

        <TextField
          fullWidth
          name="ifscCode"
          label="IFSC Code"
          value={formik.values.ifscCode}
          onChange={formik.handleChange}
          error={formik.touched.ifscCode && Boolean(formik.errors.ifscCode)}
          helperText={formik.touched.ifscCode && formik.errors.ifscCode}
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

export default BankDetails;
