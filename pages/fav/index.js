import MainLayout from "layout/mainLayout";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import NewsItem from "@/components/v2/NewsItem";
import Sidebar from "@/partials/v2/Sidebar";
import NewsAdd from "assets/images/news-ad.png";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import GoogleAds from "@/components/GoogleAds";
import { useDispatch, useSelector } from "react-redux";
import { favouriteSelector, fetchFavourite } from "@/slices/favourite";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchFavourite());
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const Favourite = () => {
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);
  const { favourite } = useSelector(favouriteSelector);
  console.log(favourite, "fav");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavourite());
  }, [dispatch]);

  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);
  return (
    <>
      <section>
        <div className="container">
          <div className="row g-3 mt-4 flex-column-reverse flex-md-row">
            {/* right side */}
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="ps-sm-5">
                <div className="row jawlatt-bnr-top">
                  <div className="col-12 ">
                    {Array.isArray(favourite) &&
                      favourite
                        ?.slice(0, 3)
                        .map((res, index) => (
                          <NewsItem key={index} item={res} />
                        ))}
                    <div className="jawlatt-news-image">
                      <img
                        src="/images/news-bg.png"
                        alt="news"
                        className="w-100"
                      />
                    </div>
                    {Array.isArray(favourite) &&
                      favourite
                        ?.slice(3)
                        .map((res, index) => (
                          <NewsItem key={index} item={res} />
                        ))}
                  </div>
                </div>
              </div>
            </div>
            {/* left side */}
            <div className="col-md-5 col-lg-4 col-xl-3">
              <div className="left-side">
                <div className="full-img mb-0 mb-lg-3">
                  {isMobile ? (
                    <div
                      className={
                        "wrapper wrapper-sm p-2 mb-1 mb-lg-5 text-center "
                        // + styles.jawallat_ads_section
                      }
                    >
                      <GoogleAds
                        id="div-gpt-ad-1686735176139-0"
                        slot="/29958771/New_Jaw_MPU_Mobile_01"
                        width={300}
                        height={250}
                      />
                    </div>
                  ) : (
                    <GoogleAds
                      id="div-gpt-ad-1686735042414-0"
                      slot="/29958771/New_Jaw_MPU_Desktop_01"
                      width={300}
                      height={250}
                    />
                  )}
                </div>
                <div className="full-img mb-0 mb-lg-3">
                  {isMobile ? (
                    <div
                      className={
                        "wrapper wrapper-sm p-2 mb-1 mb-lg-5 text-center "
                        // + styles.jawallat_ads_section
                      }
                    >
                      <GoogleAds
                        id="div-gpt-ad-1686735176139-0"
                        slot="/29958771/New_Jaw_MPU_Mobile_01"
                        width={300}
                        height={250}
                      />
                    </div>
                  ) : (
                    <GoogleAds
                      id="div-gpt-ad-1686735042414-0"
                      slot="/29958771/New_Jaw_MPU_Desktop_01"
                      width={300}
                      height={250}
                    />
                  )}
                </div>
                <Sidebar />
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
