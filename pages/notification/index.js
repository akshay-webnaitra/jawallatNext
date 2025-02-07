import MainLayout from "layout/mainLayout";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import "bootstrap-icons/font/bootstrap-icons.css";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import NewsSources from "../newsSources";
import Favourite from "../fav";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const Notification = () => {
  const [active, setActive] = useState("news-source");
  const tabChange = (value) => {
    setActive(value);
  };

  return (
    <>
      <section className="notification">
        {/* tabs */}
        <div className="arab24-tabs border-bottom">
          <div className="container">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    active === "news-source" ? "active" : ""
                  }`}
                  onClick={() => tabChange("news-source")}
                  aria-current="page"
                  href="#"
                >
                  مصادر الاخبار
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    active === "favourite" ? "active" : ""
                  }`}
                  onClick={() => tabChange("favourite")}
                  href="#"
                >
                  اخبار مفضلة
                </button>
              </li>
            </ul>
          </div>
        </div>

        {active === "news-source" && <NewsSources />}
        {active === "favourite" && <Favourite />}
      </section>
    </>
  );
};

Notification.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default Notification;
