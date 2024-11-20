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
const Verify = () => {
  return (
    <div>
      <form className="p-4">
        <h1 className="fw-normal m-0 d-flex align-items-center gap-2 justify-content-center">
          تأكيد <span className="fw-normal heading">دخول</span>
        </h1>
        <p className="my-4 mb-5 px-md-4">
          قم بإدخال الكود الذي وصلك عبر الإيميل
        </p>
        <div className="mb-4 verify d-flex justify-content-center gap-3">
          <input
            type="text"
            maxLength="1"
            className="form-control shadow-none border-0"
          />
          <input
            type="text"
            maxLength="1"
            className="form-control shadow-none border-0"
          />
          <input
            type="text"
            maxLength="1"
            className="form-control shadow-none border-0"
          />
          <input
            type="text"
            maxLength="1"
            className="form-control shadow-none border-0"
          />
        </div>
        <p className="my-4 px-md-4 mt-5 pt-md-4">
          لم أستلم كود التفعيل،
          <span className="arab24-text-red"> إرسال الكود مرة أخري</span>
        </p>
        <button type="submit" className="btn btn-primary border-0 w-100 mt-4">
          تأكيد
        </button>
      </form>
    </div>
  );
};

Verify.getLayout = (page) => {
  return <AuthLayout title={"الرئيسية"}>{page}</AuthLayout>;
};
export default Verify;
