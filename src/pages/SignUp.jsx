import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const nav = useNavigate();
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Needs to be at least 8 characters")
      .max(30, "Too Long!")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {},
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="font-prata text-3xl">Sign Up</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      <div className="flex justify-between gap-3">
        <input
          type="text"
          name="first-name"
          placeholder="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-1/2 px-3 py-2 border border-gray-800 ${
            formik.touched.firstName &&
            formik.errors.firstName &&
            "border-red-600"
          }`}
        />
        <input
          type="text"
          name="last-name"
          placeholder="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-1/2 px-3 py-2 border border-gray-800 ${
            formik.touched.lastName &&
            formik.errors.lastName &&
            "border-red-600"
          }`}
        />
      </div>
      <span className="text-red-600">
        {formik.touched.email && formik.errors.email}
      </span>
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
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`w-full px-3 py-2 border border-gray-800 ${
          formik.touched.password && formik.errors.password && "border-red-600"
        }`}
      />
      <span className="text-red-600">
        {formik.touched.password && formik.errors.password}
      </span>

      <div className="w-full flex justify-center text-sm mt-[-8px]">
        <p onClick={() => nav("/login")} className="cursor-pointer">
          Login Here!
        </p>
      </div>
      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
