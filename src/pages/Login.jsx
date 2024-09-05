import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const token = JSON.parse(localStorage.getItem("token")).user.token;
  // useEffect(() => {
  //   axios
  //     .get("https://pm.alexondev.net/api/tasks", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => console.log(res.data));
  // }, []);

  const nav = useNavigate();
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Needs to be at least 8 characters")
      .max(30, "Too Long!")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // axios
      //   .post("https://pm.alexondev.net/api/login", values)
      //   .then((res) =>
      //     localStorage.setItem("token", JSON.stringify(res.data.data))
      //   );
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="font-prata text-3xl">Login</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

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

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p onClick={() => nav("/forgotPassword")} className="cursor-pointer">
          Forgot your password?
        </p>
        <p onClick={() => nav("/signUp")} className="cursor-pointer">
          Create account
        </p>
      </div>

      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4"
      >
        Sign In
      </button>
    </form>
  );
};

export default Login;
