import { Button, Grid2, TextField } from "@mui/material";
import { Formik, useFormik } from "formik";
import React from "react";
import { string } from "yup";

const Address = () => {
  const formik = useFormik({
    initialValues: {
      mobile: "",
      address: "",
      city: "",
      state: "",
    },
    validationSchema: {},
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12 }}>
        <TextField
          fullWidth
          name="address"
          label="Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
      </Grid2>

      <Grid2 size={{ xs: 12 }}>
        <TextField
          fullWidth
          name="mobile"
          label="Mobile"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          error={formik.touched.mobile && Boolean(formik.errors.mobile)}
          helperText={formik.touched.mobile && formik.errors.mobile}
        />
      </Grid2>

      <Grid2 size={{ xs: 12 }}>
        <TextField
          fullWidth
          name="city"
          label="City"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
      </Grid2>

      <Grid2 size={{ xs: 12 }}>
        <TextField
          fullWidth
          name="state"
          label="State"
          value={formik.values.state}
          onChange={formik.handleChange}
          error={formik.touched.state && Boolean(formik.errors.state)}
          helperText={formik.touched.state && formik.errors.state}
        />
      </Grid2>

      <Grid2 size={{ xs: 12 }}>
        <Button fullWidth variant="contained">Submit</Button>
      </Grid2>
    </Grid2>
  );
};

export default Address;
