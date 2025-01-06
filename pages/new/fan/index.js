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
import Plus from "../../../assets/images/+.png";
import Share from "../../../assets/images/group 6736.png";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import GoogleAds from "@/components/GoogleAds";
import { useDispatch, useSelector } from "react-redux";
import { categorySearchSelector, fetchCategorySearch } from "@/slices/fan";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const Fan = () => {
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const { news, celebrity } = useSelector(categorySearchSelector);

  useEffect(() => {
    dispatch(fetchCategorySearch());
  }, []);
  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);
  return (
    <>
      <section>
        <div className="container">
          <div className="row g-3 flex-column-reverse flex-md-row">
            {/* right side */}
            <div className="col-md-9">
              <div className="ps-md-5">
                <div
                  className="d-flex flex-column flex-sm-row align-items-center rounded-3 p-4"
                  style={{ background: "#d9d9d948" }}
                >
                  <a href="#" className="px-2">
                    {" "}
                    <img
                      src={celebrity?.image}
                      className="img-fluid rounded-circle"
                      alt="news"
                      style={{
                        minWidth: "95px",
                        width: "95px",
                        height: "95px",
                        objectFit: "cover",
                      }}
                    />
                  </a>
                  <div className="w-100">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="card-body p-0 px-3">
                          <div className="d-flex gap-2 align-items-center">
                            <h3 style={{ fontSize: 26 }} className="fw-bold">
                              {celebrity?.name}
                            </h3>
                          </div>
                          <p
                            className="mt-1 fw-bold"
                            style={{ color: "#040404" }}
                          >
                            {" "}
                            {celebrity?.description}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4  d-flex align-items-center justify-content-center">
                        <div className="jawlatt-review ">
                          <div className="jawlatt-review-box d-flex gap-3 align-items-center justify-content-center flex-wrap">
                            <div className="d-flex gap-3 align-items-center">
                              <div className="jawlatt-review-box1">
                                <span>
                                  <h4 className="jawlatt-review-heading">
                                    3.8k
                                  </h4>
                                  <p className="m-0 jawlatt-text-small-muted">
                                    مشاركة
                                  </p>
                                </span>
                              </div>
                              <div className="jawlatt-review-box1">
                                <span>
                                  <h4 className="jawlatt-review-heading">
                                    1.4k
                                  </h4>
                                  <p className="m-0 jawlatt-text-small-muted">
                                    مشاركة
                                  </p>
                                </span>
                              </div>
                            </div>
                            <div className="jawlatt-btn  d-flex align-items-center gap-2 justify-content-start">
                              <a
                                href="#"
                                className="d-flex justify-content-center align-items-center bg-dark"
                                style={{
                                  borderRadius: "50px",
                                  width: "40px",
                                  height: "40px",
                                }}
                              >
                                <img
                                  src={Share.src}
                                  alt="img"
                                  style={{ width: "13px", height: "13px" }}
                                />
                              </a>
                              <a
                                href="#"
                                className="d-flex justify-content-center align-items-center jawlatt-bg-red"
                                style={{
                                  borderRadius: "50px",
                                  width: "40px",
                                  height: "40px",
                                }}
                              >
                                <img
                                  src={Plus.src}
                                  alt="img"
                                  style={{ width: "13px", height: "13px" }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row jawlatt-bnr-top">
                  <div className="col-12 ">
                    {Array.isArray(news) &&
                      news
                        .slice(0, 4)
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
                    {Array.isArray(news) &&
                      news
                        .slice(4, 8)
                        .map((res, index) => (
                          <NewsItem key={index} item={res} />
                        ))}
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
                  </div>
                </div>
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

Fan.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default Fan;
