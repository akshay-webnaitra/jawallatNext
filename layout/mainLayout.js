import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Header from "@/partials/v2/Header";
import NewsTicker from "@/components/NewsTicker";
import { wrapper } from "@/utils/store";
import { useSelector } from "react-redux";
import { homeItemsSelector } from "@/slices/homeItems";

const MainLayout = ({ children, title, category }) => {
  const { ticker } = useSelector(homeItemsSelector);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="mb-4">
        <NewsTicker items={ticker} category={category} />
      </div>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
