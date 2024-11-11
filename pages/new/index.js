import { useEffect, useState } from "react";
import NewsBigItem from "@/components/v2/NewsBigItem";
import RedCaret from "@/components/v2/RedCaret";
import NewsItem from "@/components/v2/NewsItem";
import Sidebar from "@/partials/v2/Sidebar";
import MainLayout from "layout/mainLayout";
import VideoImage from "../../assets/images/video.png";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import { useMediaQuery } from "react-responsive";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);

const Home = () => {
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);
  return (
    <>
      <div className="container">
        <div className="row">
          {/* right side */}
          <div className="col-md-9">
            <div className="jawlatt-bnr-top-mid jawlatt-bnr-top-rt">
              <NewsBigItem />
              <div className="jawlatt-single-news pt-3 px-0">
                <h3 className="fw-bold m-0 text-dark jawlatt-border-bottom d-flex align-items-center gap-2">
                  <RedCaret />
                  موضوعات تهمك
                </h3>
              </div>
              {[...Array(3)].map(() => (
                <>
                  <NewsItem />
                </>
              ))}
              <div className="jawlatt-news-image">
                <img src="images/news-bg.png" alt="news" className="w-100" />
              </div>
              {[...Array(4)].map(() => (
                <>
                  <NewsItem />
                </>
              ))}
              <div>
                <div
                  className=""
                  style={{ backgroundColor: "#F6F8F8", borderRadius: 8 }}
                >
                  <div className="d-flex gap-2 pt-3">
                    <RedCaret />
                    <h3 className="text-dark fw-bold m-0 jawlatt-news-small-title">
                      المزيد
                      <span
                        className="arab24-text-red me-3"
                        style={{ fontSize: 14 }}
                      >
                        {" "}
                        فيديو
                      </span>
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="row g-3">
                      {[...Array(3)].map(() => (
                        <div className="col-sm-6 col-lg-4">
                          <div className="arab24-news-card">
                            <div className="arab24-news-card-img">
                              <img src={VideoImage.src} alt="img" />
                            </div>
                            <div>
                              <p
                                className="m-0 text-end fw-medium text-nowrap"
                                style={{ fontSize: 10 }}
                              >
                                <img
                                  style={{ minWidth: 24, height: 24 }}
                                  src="/images/sky-news-round.png"
                                  className="ms-2 rounded-circle"
                                />
                                سكاي نيوز عربية
                              </p>
                              <p
                                style={{ fontSize: 14, lineHeight: 1.3 }}
                                className="fw-bold mt-1"
                              >
                                باريس هيلتون تنشر الصورة الأولى لابنة زوجها
                                كارتر ريوم في لندن
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="py-4 mt-5"
                  style={{ backgroundColor: "#F6F8F8", borderRadius: 8 }}
                >
                  <div className="jawlatt-single-news pt-3">
                    <h3 className="text-dark fw-bold m-0 jawlatt-news-small-title d-flex align-items-center gap-2">
                      <RedCaret />
                      موضوعات تهمك
                    </h3>
                  </div>
                  <div className="jawlatt-news-image px-4 mt-4">
                    <div className="row g-3">
                      {[...Array(4)].map(() => (
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                          <div className="card1 pb-4 bg-white">
                            <div>
                              <img
                                src="./images/hospital-img.png"
                                alt=""
                                className="img-fluid w-100"
                              />
                            </div>
                            <div className="jawlatt-card1-heading px-2">
                              <h4 className="my-2 px-1 jawlatt-right-border">
                                إعلان
                              </h4>
                              <p>
                                أسرة ذكية بأسعار مذهلة في مصر - لا تفوت الفرصة
                              </p>
                              <div className="d-flex">
                                <a
                                  href="#"
                                  className=" arab24-text-gray fw-medium"
                                >
                                  {" "}
                                  ذكية بأسعار
                                </a>{" "}
                                <button className="btn p-1 px-2 border border-dark me-4 text-nowrap">
                                  ابحث الآن
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-start pt-3">للإعلان معنا</p>
                  </div>
                </div>
              </div>
              <div className="jawlatt-single-news pt-3 px-0">
                <h3 className="fw-bold m-0 text-dark jawlatt-border-bottom d-flex align-items-center gap-2">
                  <RedCaret />
                  موضوعات تهمك
                </h3>
              </div>
              {[...Array(7)].map(() => (
                <>
                  <NewsItem />
                </>
              ))}
              <div className="jawlatt-single-news py-3 px-0">
                <h3 className="fw-bold m-0 text-dark d-flex align-items-center gap-2">
                  <RedCaret />
                  موضوعات تهمك
                </h3>
              </div>
              <div className="row g-3">
                {[...Array(4)].map(() => (
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card1 arab24-card2 border bg-white">
                      <div className="arab24-card2-img">
                        <img
                          src="./images/hospital-img.png"
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
              {[...Array(3)].map(() => (
                <>
                  <NewsItem />
                </>
              ))}
            </div>
          </div>
          {/* left side */}
          <div className="col-md-3">
            <div className="card mb-3 jawlatt-card-border rounded-4">
              <div className="card-header py-3 pb-0">
                <h5 className="card-title fw-bold text-end mb-0" dir="ltr">
                  أخبار مصر
                  <i className="fa-solid fa-caret-left ms-2  jawlatt-text-red" />
                </h5>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {[...Array(4)].map(() => (
                    <li className="list-group-item pr-0">
                      <div className="d-flex align-items-center gap-2">
                        <a className="d-block text-decoration-none" href="#">
                          <p className="m-0 fw-bold text-start jawlatt-card-fs">
                            <img
                              style={{ width: 20 }}
                              src="images/sky-news.png"
                              alt="img"
                              className="ms-1"
                            />
                            سكاي نيوز عربية
                          </p>
                        </a>
                        <ul className="p-0 jawlatt-card-body-badge">
                          <li>
                            <a href="#">رياضة</a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="text-decoration-none">
                        إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون
                        موقف مصر
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-md-4 mb-3">
              <img
                src="images/news-ad.png"
                className="card-img-top"
                alt="NewsAd"
              />
            </div>
            <div className="card mb-3 jawlatt-card-border rounded-4">
              <div className="card-header py-3 pb-0">
                <h5 className="card-title fw-bold text-end mb-0" dir="ltr">
                  أخبار مصر
                  <i className="fa-solid fa-caret-left ms-2  jawlatt-text-red" />
                </h5>
              </div>
              <div className="card-body p-3">
                <ul className="list-group ">
                  <li className="list-group-item py-2 px-0 border-0">
                    <div className="d-flex gap-2">
                      <a
                        className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                        href="#"
                      >
                        <p
                          className="m-0 fw-bold text-start"
                          style={{ fontSize: "15px" }}
                        >
                          <img
                            style={{ width: 20, marginLeft: 6 }}
                            src="images/Group 1197.png"
                          />
                          اليوم السابع
                        </p>
                        <div className="plus">
                          <img
                            src="./images/Group 1304.png"
                            alt=""
                            style={{ width: 20 }}
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="list-group-item py-2 px-0 border-0">
                    <div className="d-flex gap-2">
                      <a
                        className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                        href="#"
                      >
                        <p
                          className="m-0 fw-bold text-start"
                          style={{ fontSize: "15px" }}
                        >
                          <img
                            style={{ width: 20, marginLeft: 6 }}
                            src="images/Group 1198.png"
                          />
                          سكاي نيوز عربية
                        </p>
                        <div className="plus">
                          <img
                            src="./images/Group 1304.png"
                            alt=""
                            style={{ width: 20 }}
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="list-group-item py-2 px-0 border-0">
                    <div className="d-flex gap-2">
                      <a
                        className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                        href="#"
                      >
                        <p
                          className="m-0 fw-bold text-start"
                          style={{ fontSize: "15px" }}
                        >
                          <img
                            style={{ width: 20, marginLeft: 6 }}
                            src="images/Group 1205.png"
                          />
                          مصراوي
                        </p>
                        <div className="plus">
                          <img
                            src="./images/Group 1304.png"
                            alt=""
                            style={{ width: 20 }}
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="list-group-item py-2 px-0 border-0">
                    <div className="d-flex gap-2">
                      <a
                        className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                        href="#"
                      >
                        <p
                          className="m-0 fw-bold text-start"
                          style={{ fontSize: "15px" }}
                        >
                          <img
                            style={{ width: 20, marginLeft: 6 }}
                            src="images/Group 1206.png"
                          />
                          الجزيرة
                        </p>
                        <div className="plus">
                          <img
                            src="./images/Group 1304.png"
                            alt=""
                            style={{ width: 20 }}
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="list-group-item py-2 px-0 border-0">
                    <div className="d-flex gap-2">
                      <a
                        className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                        href="#"
                      >
                        <p
                          className="m-0 fw-bold text-start"
                          style={{ fontSize: "15px" }}
                        >
                          <img
                            style={{ width: 20, marginLeft: 6 }}
                            src="images/Group 1207.png"
                          />
                          المصري اليوم
                        </p>
                        <div className="plus">
                          <img
                            src="./images/Group 1304.png"
                            alt=""
                            style={{ width: 20 }}
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="list-group-item py-2 px-0 border-0">
                    <div className="d-flex gap-2">
                      <a
                        className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                        href="#"
                      >
                        <p
                          className="m-0 fw-bold text-start"
                          style={{ fontSize: "15px" }}
                        >
                          <img
                            style={{ width: 20, marginLeft: 6 }}
                            src="images/Group 1208.png"
                          />
                          سكاي نيوز عربية
                        </p>
                        <div className="plus">
                          <img
                            src="./images/Group 1304.png"
                            alt=""
                            style={{ width: 20 }}
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="list-group-item py-2 px-0 border-0">
                    <div className="d-flex gap-2">
                      <a
                        className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                        href="#"
                      >
                        <p
                          className="m-0 fw-bold text-start"
                          style={{ fontSize: "15px" }}
                        >
                          <img
                            style={{ width: 20, marginLeft: 6 }}
                            src="images/Group 1209.png"
                          />
                          الحدث اليوم
                        </p>
                        <div className="plus">
                          <img
                            src="./images/Group 1304.png"
                            alt=""
                            style={{ width: 20 }}
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="detail-btn mb-3  text-center">
                <button className="text-white px-3  border-0 jawlatt-bg-red jawlatt-detail-btn-border fw-medium">
                  المزيد
                </button>
              </div>
            </div>
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default Home;
