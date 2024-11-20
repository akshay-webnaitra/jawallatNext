import AuthLayout from "layout/authLayout";
import React from "react";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import { getSession } from "next-auth/react";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import { wrapper } from "@/utils/store";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const ForgetPassword = () => {
  return (
    <div>
      <form className="p-4">
        <h1 className="fw-normal m-0 d-flex flex-column flex-sm-row align-items-center gap-2 justify-content-center">
          نسيت <span className="heading fw-normal">كلمه السر</span>
        </h1>
        <p className="my-4 mb-5 px-md-4">
          قم بإدخال بريدك الإلكتروني لإعادة كلمة المرور
        </p>
        <div className="mb-4">
          <input
            type="text"
            className="form-control shadow-none border-0"
            placeholder="البريد الإلكتروني"
          />
        </div>
        <button type="submit" className="btn btn-primary border-0 w-100">
          التالي
        </button>
      </form>
      <p className="arab24-text-red mt-5 pt-md-5">
        تم إرسال رمز التحقق لبريدك الإلكتروني
      </p>
    </div>
  );
};

ForgetPassword.getLayout = (page) => {
  return <AuthLayout title={"الرئيسية"}>{page}</AuthLayout>;
};
export default ForgetPassword;
