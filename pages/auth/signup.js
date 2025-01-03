import AuthLayout from "layout/authLayout";
import GoogleIcon from "../../assets/images/google-icon.png";
import AppleIcon from "../../assets/images/apple-icon.png";
import React, { useState } from "react";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import { getSession } from "next-auth/react";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import { wrapper } from "@/utils/store";
import { useDispatch } from "react-redux";
import { postSignup } from "@/slices/auth";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const Signup = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let item = {
      adv_first_name: data?.name,
      adv_email: data?.email,
      adv_password: data?.password,
    };
    dispatch(
      postSignup(item),
      () => {
        setData({
          name: "",
          email: "",
          password: "",
        });
      },
      () => {
        console.log("Signup failed");
      }
    );
  };
  return (
    <div>
      <form className="p-4" onSubmit={handleSubmit}>
        <h1 className="fw-normal m-0 d-flex align-items-center justify-content-center">
          حساب{" "}
          <span style={{ fontSize: 53 }} className="fw-normal">
            جديد
          </span>
        </h1>
        <p className="my-4 mb-5 px-md-4">
          pإذا واجهتك مشكلة في دخول الحساب الخاص بك
          <span className="arab24-text-red">إعادة تعيين كلمة السر</span>
          إضغط .
        </p>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={data?.name}
            onChange={handleChange}
            className="form-control shadow-none border-0"
            placeholder="الإسم"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="email"
            value={data?.email}
            onChange={handleChange}
            className="form-control shadow-none border-0"
            placeholder="البريد الإلكتروني"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            value={data?.password}
            onChange={handleChange}
            className="form-control shadow-none border-0"
            id="inputPassword"
            placeholder="كلمة السر"
          />
        </div>
        <button type="submit" className="btn btn-primary border-0 w-100 mt-4">
          تسجيل دخول
        </button>
        <div className="d-flex flex-column flex-sm-row gap-3 mt-5">
          <button className="social-btn btn w-100">
            Apple
            <img
              src={AppleIcon.src}
              style={{ width: 28, height: 28 }}
              alt="img"
            />
          </button>
          <button className="social-btn btn w-100">
            Google
            <img
              src={GoogleIcon.src}
              style={{ width: 34, height: 34 }}
              alt="img"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

Signup.getLayout = (page) => {
  return <AuthLayout title={"الرئيسية"}>{page}</AuthLayout>;
};
export default Signup;
