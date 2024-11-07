import Sidebar from "@/partials/v2/Sidebar";
import NewsItem from "@/components/v2/NewsItem";
import MainLayout from "layout/mainLayout";
import NewsAdd from "assets/images/news-ad.png";
import RedCaret from "@/components/v2/RedCaret";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import SkyNews from "assets/images/sky-news-round.png";
import ShareRed from "@/components/v2/icons/shareRed";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const Source = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row g-3">
            {/* right side */}
            <div className="col-md-9">
              <div className="ps-sm-5">
                <div
                  className="d-flex flex-column flex-sm-row align-items-center rounded-3 p-4"
                  style={{ background: "#d9d9d948" }}
                >
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="d-flex align-items-center gap-3 ps-3">
                      <img
                        src={SkyNews.src}
                        style={{ width: 35, height: 35 }}
                        alt="img"
                        className="rounded-circle"
                      />
                      <p className="fs-20 m-0">سكاي نيوز عربية</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 border-end pe-3">
                      <p className="fs-20 fw-semibold m-0">34k</p>
                      <p className="fs-20 m-0">المتابعون</p>
                      <button className="btn text-nowrap arab24-bg-black text-white fs-16 p-0 px-2">
                        + متابعة
                      </button>
                      <ShareRed big />
                    </div>
                  </div>
                </div>
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
                <img src={NewsAdd.src} className="card-img-top" alt="NewsAd" />
              </div>
              <div className="p-md-4 mb-3">
                <img src={NewsAdd.src} className="card-img-top" alt="NewsAd" />
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Source.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default Source;
