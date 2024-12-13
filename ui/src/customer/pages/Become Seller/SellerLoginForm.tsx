import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../State/Store";
import { sendLoginSignupOtp, signing } from "../../../State/AuthSlice";
import { sellerLogin } from "../../../State/seller/SellerAuthSlice";

const SellerLoginForm = () => {
  const dispatch = useAppDispatch();
  const [sentOpt, setSendOtp] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      dispatch(sellerLogin(values));
    },
  });

  const handleSentOtpFunction = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
    setSendOtp(true);
  };

  // const handleLogin = ()=>{
  //   dispatch(signin({email}))
  // }

  return (
    <div>
      <h1 className="text-center font-bold text-xl text-primary-color pb-5">
        Login As Seller
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

        {sentOpt ? (
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
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellerLoginForm;
