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
const UpdatePassword = () => {
  return (
    <div>
      <form className="p-4">
        <h1 className="fw-normal m-0 d-flex align-items-center gap-2 justify-content-center mb-5 pb-md-5">
          تحديث
          <span className="fw-normal heading">كلمة السر</span>
        </h1>
        <div className="mb-4">
          <input
            type="password"
            className="form-control shadow-none border-0"
            id="inputPassword"
            placeholder="كلمه المرور"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control shadow-none border-0"
            id="inputPassword"
            placeholder="كلمه المرور"
          />
        </div>
        <button type="submit" className="btn btn-primary border-0 w-100 mt-4">
          تأكيد
        </button>
      </form>
    </div>
  );
};

UpdatePassword.getLayout = (page) => {
  return <AuthLayout title={"الرئيسية"}>{page}</AuthLayout>;
};
export default UpdatePassword;
