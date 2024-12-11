import React, { useState } from "react";
import { useAppDispatch } from "../../../State/Store";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [sentOpt, setSendOtp] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      fullName:""
    },
    onSubmit: (values) => {
      //   dispatch(sellerLogin(values));
    },
  });

  const handleSentOtpFunction = () => {
    setSendOtp(true);
  };

  return (
    <div>
      <h1 className="text-center font-bold text-xl text-primary-color pb-8">
        Signup
      </h1>
      <div className="space-y-3">
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        {sentOpt ? (
          <div className="space-y-3">
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

            <p className="font-medium text-sm opacity-60">Enter your Name</p>
            <TextField
              fullWidth
              name="fullName"
              label="Full Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </div>
        ) : (
          <div>
            <Button
              onClick={handleSentOtpFunction}
              fullWidth
              variant="contained"
              sx={{ py: "11px" }}
            >
              SENT OTP
            </Button>
          </div>
        )}

        <div className={!sentOpt ? "invisible" : ""}>
          <Button
            onClick={() => formik.handleSubmit()}
            fullWidth
            variant="contained"
            sx={{ py: "11px" }}
          >
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
