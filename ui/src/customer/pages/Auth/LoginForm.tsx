import React, { useState } from "react";
import { useAppDispatch, useAppSelctoer } from "../../../State/Store";
import { useFormik } from "formik";
import { Button, CircularProgress, TextField } from "@mui/material";
import { fetchUserProfile, sendLoginSignupOtp, signing } from "../../../State/AuthSlice";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelctoer((store) => store);

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
         dispatch(signing(values));
    },
  });

  const handleSentOtpFunction = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
  };

  return (
    <div>
      <h1 className="text-center font-bold text-xl text-primary-color pb-8">
        Login
      </h1>
      <div className="space-y-5">
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        {auth.otpSent && (
          <div className="space-y-2">
            <p className="font-medium text-sm opacity-60">
              Enter OTP sent to your email
            </p>
            <TextField
              fullWidth
              name="otp"
              label="OTP"
              value={formik.values.otp}
              onChange={formik.handleChange}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />
          </div>
        )}

        {auth.otpSent ? (
          <Button
            onClick={() => formik.handleSubmit()}
            fullWidth
            variant="contained"
            sx={{ py: "11px" }}
          >
            Login
          </Button>
        ) : (
          <Button onClick={handleSentOtpFunction} fullWidth variant="contained" sx={{ py: "11px" }}>
            {auth.loading ? <CircularProgress /> : "send otp"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
