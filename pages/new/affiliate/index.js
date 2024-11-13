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
import Sidebar from "@/partials/v2/Sidebar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../../../assets/images/affiliate-banner.png";
import Trimmer from "../../../assets/images/barnner-img1.1.png";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import GoogleAds from "@/components/GoogleAds";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const Affiliate = () => {
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);
  const slider = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 2,
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
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
          slidesToShow: 2,
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
  return (
    <>
      <section className="notification">
        <div className="container">
          <div className="affiliate-banner mb-5">
            <img src={Banner.src} alt="img" />
          </div>
          <div className="pb-4">
            <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
              <RedCaret />
              ترشيحاتنا لك
            </h3>
          </div>
          <Slider {...slider} className="blur-effect">
            {[...Array(16)].map((_, index) => (
              <div
                key={index}
                className={`slick-slide ${index === 0 ? "first-slide" : ""}`}
              >
                <button
                  className="btn text-nowrap fs-16 px-3 border"
                  style={{
                    borderRadius: 13,
                    border: "2px solid #E5E5E5",
                  }}
                >
                  الحرب في غزة
                </button>
              </div>
            ))}
          </Slider>
          <div className="row g-3 mt-2">
            {/* right side */}
            <div className="col-md-9">
              <div className="ps-sm-5">
                <div className="row g-2">
                  {[...Array(12)].map(() => (
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                      <div className="card1 arab24-card2 border bg-white">
                        <div className="arab24-card2-img">
                          <img
                            src={Trimmer.src}
                            alt=""
                            className="img-fluid w-100"
                          />
                        </div>
                        <div className="jawlatt-card1-heading px-2 mt-2">
                          <p className="fw-semibold">
                            أسرة ذكية بأسعار مذهلة في مصر - لا تفوت الفرصة
                          </p>
                          <h3>
                            2499
                            <sup style={{ fontSize: 14 }} className="fw-medium">
                              00
                            </sup>
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="jawlatt-news-image my-3">
                    <img
                      src="/images/news-bg.png"
                      alt="news"
                      className="w-100"
                    />
                  </div>
                  {[...Array(12)].map(() => (
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                      <div className="card1 arab24-card2 border bg-white">
                        <div className="arab24-card2-img">
                          <img
                            src={Trimmer.src}
                            alt=""
                            className="img-fluid w-100"
                          />
                        </div>
                        <div className="jawlatt-card1-heading px-2 mt-2">
                          <p className="fw-semibold">
                            أسرة ذكية بأسعار مذهلة في مصر - لا تفوت الفرصة
                          </p>
                          <h3>
                            2499
                            <sup style={{ fontSize: 14 }} className="fw-medium">
                              00
                            </sup>
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* left side */}
            <div className="col-md-3">
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

Affiliate.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default Affiliate;
