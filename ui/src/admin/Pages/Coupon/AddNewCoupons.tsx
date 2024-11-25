import { Box, Button, Grid2, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useFormik } from "formik";
import React from "react";

interface CouponFormValues {
  code: string;
  discountPercentage: number;
  validityStartDate: Dayjs | null;
  validityEndDate: Dayjs | null;
  minimumOderValue: number;
}

const AddNewCoupons = () => {
  const formik = useFormik<CouponFormValues>({
    initialValues: {
      code: "",
      discountPercentage: 0,
      validityStartDate: null,
      validityEndDate: null,
      minimumOderValue: 0,
    },
    onSubmit: (values) => {
      console.log("form submited : ", values);
      const formatedValues = {
        ...values,
        validityStartDate: values.validityStartDate?.toISOString(),
        validityEndDate: values.validityEndDate?.toISOString(),
      };

      console.log("formatted Submit", formatedValues);
    },
  });
  return (
    <div>

      <h1 className="text-2xl font-bold text-primary-color pb-5 text-center">Create New Coupon</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box component={"form"} onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="code"
                label="Code"
                value={formik.values.code}
                onChange={formik.handleChange}
                error={formik.touched.code && Boolean(formik.errors.code)}
                helperText={formik.touched.code && formik.errors.code}
              />
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="discountPercentage"
                label="Discount Percentage"
                value={formik.values.discountPercentage}
                onChange={formik.handleChange}
                error={
                  formik.touched.discountPercentage &&
                  Boolean(formik.errors.discountPercentage)
                }
                helperText={
                  formik.touched.discountPercentage &&
                  formik.errors.discountPercentage
                }
              />
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6 }}>
              <DatePicker
                sx={{ width: "100%" }}
                name="validityStartDate"
                label="Validity Start Date"
                onChange={formik.handleChange}
                value={formik.values.validityStartDate}
              />
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6 }}>
              <DatePicker
                sx={{ width: "100%" }}
                name="validityEndDate"
                label="Validity End Date"
                onChange={formik.handleChange}
                value={formik.values.validityEndDate}
              />
            </Grid2>

            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                name="minimumOderValue"
                label="Minimum Oder Value"
                value={formik.values.minimumOderValue}
                onChange={formik.handleChange}
                error={
                  formik.touched.minimumOderValue &&
                  Boolean(formik.errors.minimumOderValue)
                }
                helperText={
                  formik.touched.minimumOderValue &&
                  formik.errors.minimumOderValue
                }
              />
            </Grid2>

            <Grid2 size={{ xs: 12 }}>
              <Button variant="contained" fullWidth sx={{ py: ".8rem" }}>
                Create Coupon
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default AddNewCoupons;
