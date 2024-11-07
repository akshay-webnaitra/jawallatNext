import MainLayout from "layout/mainLayout";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import NotificationTab from "@/components/notification/notificationTab";
import NewsItem from "@/components/v2/NewsItem";
import Sidebar from "@/partials/v2/Sidebar";
import NewsAdd from "assets/images/news-ad.png";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const Favourite = () => {
  return (
    <>
      <section>
        <div className="notification">
          <NotificationTab />
          <div className="container">
            <div className="row g-3 mt-4">
              {/* right side */}
              <div className="col-md-9">
                <div className="ps-sm-5">
                  <div className="row jawlatt-bnr-top">
                    <div className="col-12 ">
                      {[...Array(4)].map(() => (
                        <NewsItem green />
                      ))}
                      <div className="jawlatt-news-image">
                        <img
                          src="/images/news-bg.png"
                          alt="news"
                          className="w-100"
                        />
                      </div>
                      {[...Array(4)].map(() => (
                        <NewsItem green />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* left side */}
              <div className="col-md-3 jawlatt-bnr-top-lt">
                <div className="p-md-4 mb-3">
                  <img
                    src={NewsAdd.src}
                    className="card-img-top"
                    alt="NewsAd"
                  />
                </div>
                <div className="p-md-4 mb-3">
                  <img
                    src={NewsAdd.src}
                    className="card-img-top"
                    alt="NewsAd"
                  />
                </div>
                <Sidebar></Sidebar>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Favourite.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default Favourite;
