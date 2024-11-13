import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import SkyNews from "assets/images/sky-news-round.png";
import ShareRed from "@/components/v2/icons/shareRed";
import NewsAdd from "assets/images/news-ad.png";
import styles from "./style.module.css";
import { useMediaQuery } from "react-responsive";
import { wrapper } from "@/utils/store";
import {
  fetchSources,
  fetchSourcesItems,
  sourcesSelector,
} from "@/slices/sources";
import { fetchCategories } from "@/slices/categories";
import { fetchServerItem, serverItemSelector } from "@/slices/serverItems";
import MainLayout from "layout/mainLayout";
import Sidebar from "@/partials/v2/Sidebar";
import NewsItem from "@/components/v2/NewsItem";
import { fetchHomeItems } from "@/slices/homeItems";
import GoogleAds from "@/components/GoogleAds";
const news = [];

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources());
    await store.dispatch(fetchHomeItems(session));
    await store.dispatch(fetchCategories());
    await store.dispatch(
      fetchSourcesItems(context.query.source, null, null, session)
    );
    await store.dispatch(fetchServerItem());
  }
);

const SourcePage = () => {
  const { category, tags, news, lastPage, related_news, videos, sources } =
    useSelector(sourcesSelector);
  const router = useRouter();
  const dispatch = useDispatch();
  const [currentSource, setCurrentSource] = useState({});
  const [loadMoreNews, setloadMoreNews] = useState([]);
  const [nextPage, setNextPage] = useState(2);
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);

  useEffect(() => {
    if (sources.length) {
      setCurrentSource({});
      setloadMoreNews([]);
      let currentSource = find(sources, { name: router?.query?.source });
      setCurrentSource({ ...currentSource });
    }
  }, [sources, router]);

  const takeAndSkip = (array, skip, n) => {
    let skippedArray = array.slice(skip - 1, skip + n);
    return skippedArray;
  };

  const handleSourceChange = (e) => {
    router.push(`/source/${e?.target?.value}`);
  };

  const loadNextPage = () => {
    dispatch(
      fetchSourcesItems(router?.query?.source, nextPage, (data) => {
        setloadMoreNews([...loadMoreNews, ...data?.news?.data]);
        setNextPage(nextPage + 1);
      })
    );
  };

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
                    {Array.isArray(news) &&
                      news
                        ?.slice(0, 4)
                        ?.map((item) => <NewsItem item={item} />)}
                    <div className="jawlatt-news-image">
                      <img
                        src="/images/news-bg.png"
                        alt="news"
                        className="w-100"
                      />
                    </div>
                    {Array.isArray(news) &&
                      news
                        ?.slice(4, 8)
                        ?.map((item) => <NewsItem item={item} />)}
                    <div
                      className={"wrapper wrapper-sm p-2 mb-1 mt-0 text-center"}
                    >
                      {!isMobile ? (
                        <GoogleAds
                          id="div-gpt-ad-1686734411945-0"
                          slot="/29958771/New_Jaw_Leader_Desktop_02"
                          width={728}
                          height={90}
                        />
                      ) : (
                        <GoogleAds
                          id="div-gpt-ad-1686734836746-0"
                          slot="/29958771/New_Jaw_Leader_Mobile_02"
                          width={320}
                          height={100}
                        />
                      )}
                    </div>
                    {Array.isArray(news) &&
                      news
                        ?.slice(8, 11)
                        ?.map((item) => <NewsItem item={item} />)}
                  </div>
                </div>
              </div>
            </div>
            {/* left side */}
            <div className="col-md-3 jawlatt-bnr-top-lt">
              <div className="full-img mb-0 mb-lg-3">
                {isMobile ? (
                  <div
                    className={
                      "wrapper wrapper-sm p-2 mb-1 mb-lg-5 text-center " +
                      styles.jawallat_ads_section
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
                      "wrapper wrapper-sm p-2 mb-1 mb-lg-5 text-center " +
                      styles.jawallat_ads_section
                    }
                  >
                    <GoogleAds
                      id="div-gpt-ad-1686735196963-0"
                      slot="/29958771/New_Jaw_MPU_Mobile_01"
                      width={300}
                      height={250}
                    />
                  </div>
                ) : (
                  <GoogleAds
                    id="div-gpt-ad-1686735196963-0"
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
      </section>
    </>
  );
};

SourcePage.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default SourcePage;
