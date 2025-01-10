import { wrapper } from "@/utils/store";
import AuthLayout from "layout/authLayout";
import { getSession } from "next-auth/react";
import React, { useState } from "react";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import { useDispatch } from "react-redux";
import { postLogin } from "@/slices/auth";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const Login = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
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
      email: data?.email,
      password: data?.password,
    };
    dispatch(postLogin(item));
  };
  return (
    <div>
      <form className="p-4" onSubmit={handleSubmit}>
        <h1 className="fw-normal m-0 d-flex align-items-center gap-2 justify-content-center">
          تسجيل <span className="fw-normal heading">دخول</span>
        </h1>
        <p className="my-4 mb-5 px-md-4">
          إذا واجهتك مشكلة في دخول الحساب الخاص بك
          <span className="arab24-text-red">إعادة تعيين كلمة السر</span>
          إضغط .
        </p>
        <div className="mb-4">
          <input
            type="text"
            onChange={handleChange}
            value={data?.email}
            name="email"
            className="form-control shadow-none border-0"
            placeholder="البريد الإلكتروني"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            onChange={handleChange}
            value={data?.password}
            name="password"
            className="form-control shadow-none border-0"
            id="inputPassword"
            placeholder="كلمه المرور"
          />
        </div>
        <button type="submit" className="btn btn-primary border-0 w-100 mt-4">
          تسجيل دخول بالإيميل
        </button>
      </form>
    </div>
  );
};

Login.getLayout = (page) => {
  return <AuthLayout title={"الرئيسية"}>{page}</AuthLayout>;
};
export default Login;
