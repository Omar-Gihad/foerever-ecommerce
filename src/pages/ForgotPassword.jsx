import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const ForgotPassword = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(`Email sent. \n Check your email to restore your password `);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="font-prata text-3xl">Reset your password </p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <p className="text-center">
        Enter your email address sand
        <br />
        we’ll send you a link to reset your password.
      </p>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`w-full px-3 py-2 border border-gray-800 ${
          formik.touched.email && formik.errors.email && "border-red-600"
        }`}
      />
      <span className="text-red-600">
        {formik.touched.email && formik.errors.email}
      </span>
      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4"
      >
        Reset Password
      </button>
    </form>
  );
};

export default ForgotPassword;
