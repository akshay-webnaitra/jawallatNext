import Sidebar from "@/partials/v2/Sidebar";
import MainLayout from "layout/mainLayout";
import NewsAdd from "assets/images/news-ad.png";
import RedCaret from "@/components/v2/RedCaret";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { categoriesSelector, fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem, serverItemSelector } from "@/slices/serverItems";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import NewsImg from "assets/images/images 3.png";
import Like from "@/components/v2/icons/like";
import Favourite from "@/components/v2/icons/favourite";
import ShareOutline from "@/components/v2/icons/shareOutline";
import VideoPlayBtn from "@/components/v2/icons/videoPlayBtn";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import GoogleAds from "@/components/GoogleAds";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos, videosSelector } from "@/slices/video";
import JawlattLink from "@/components/JawlattLink";
import Link from "next/link";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchVideos(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);

const Category = () => {
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);
  const { videos } = useSelector(videosSelector);
  const { categories } = useSelector(categoriesSelector);
  const slider = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const dispatch = useDispatch();
  const handleCategoryClick = (slug) => {
    dispatch(fetchVideos({ category: slug }));
  };
  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);
  return (
    <>
      <section className="notification video">
        <div className="container">
          <div className="row g-5 mt-3 flex-column-reverse flex-md-row">
            {/* right side */}
            <div className="col-md-9">
              <div className="pb-3">
                <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
                  <RedCaret />
                  فيديو
                </h3>
              </div>
              <Slider {...slider} className="blur-effect mb-4">
                {categories.map((res, index) => (
                  <div
                    key={index}
                    className={`slick-slide ${
                      index === 0 ? "first-slide" : ""
                    }`}
                  >
                    <button
                      className="btn text-nowrap fs-16 px-3 border category-btn"
                      style={{
                        borderRadius: 13,
                        border: "2px solid #E5E5E5",
                      }}
                      onClick={() => handleCategoryClick(res?.cat_name)}
                    >
                      {res?.cat_name}
                    </button>
                  </div>
                ))}
              </Slider>
              <div className="ps-md-5">
                {Array.isArray(videos) && videos?.length > 0 ? (
                  videos.map((res) => (
                    <div key={res?.id} className="news-video-card mb-5">
                      <div className="row">
                        <div className="col-md-8">
                          <h4 className="fw-bold">{res?.news_title}</h4>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-4 mt-2">
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={res?.news_source_icon}
                            style={{ minWidth: 34, height: 34 }}
                            alt="img"
                            className="rounded-circle border"
                          />
                          <p className="mb-0">
                            <Link
                              className="fw-normal"
                              href={res?.news_source_link}
                            >
                              {res?.news_source}
                            </Link>
                          </p>
                        </div>
                        <p className="fs-12 m-0">
                          23 <ShareOutline />
                        </p>
                        <p className="fs-12 m-0">
                          12 <Favourite />
                        </p>
                        <p className="fs-12 m-0">
                          2k <Like />
                        </p>
                      </div>
                      <div className=" mt-3">
                        <iframe
                          width="100%"
                          height="462"
                          src={res?.news_video}
                          title="YouTube video"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">no data</p>
                )}
              </div>
              <div className={"wrapper wrapper-sm p-2 mb-1 mt-0 text-center"}>
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
            </div>
            {/* left side */}
            <div className="col-md-3 jawlatt-bnr-top-lt">
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
        </div>
      </section>
    </>
  );
};

Category.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default Category;
