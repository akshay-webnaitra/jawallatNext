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
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const Search = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row g-3 mt-5">
            {/* right side */}
            <div className="col-md-9">
              <div className="ps-sm-5">
                <div className="pb-3">
                  <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
                    <RedCaret />
                    نتائج البحث
                  </h3>
                  <p className="fs-20 m-0">
                    نتائج البحث عن “الخبز السياحي في مصر”
                  </p>
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

Search.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default Search;
