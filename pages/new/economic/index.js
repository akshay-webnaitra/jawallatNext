import Sidebar from "@/partials/v2/Sidebar";
import NewsItem from "@/components/v2/NewsItem";
import CategorySlider from "@/components/v2/CategorySlider";
import MainLayout from "layout/mainLayout";
import GreenCaret from "@/components/v2/GreenCaret";
import SkyNews from "assets/images/sky-news.png";
import NewsAdd from "assets/images/news-ad.png";
import Group from "assets/images/group 1197.png";
import Plus from "assets/images/group 1304.png";
import RedCaret from "@/components/v2/RedCaret";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import icon1 from "assets/images/icon1.png";
import icon2 from "assets/images/icon2.png";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import Hospital from "assets/images/hospital-img.png";
import Table from "@/components/v2/table";
import GoogleAds from "@/components/GoogleAds";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const Economic = () => {
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);
  const data = [
    {
      title: " اليوم السابع",
    },
    {
      title: " سكاي نيوز عربية",
    },
    {
      title: " مصراوي",
    },
    {
      title: "  الجزيرة",
    },
    {
      title: "  المصري اليوم",
    },
    {
      title: "  سكاي نيوز عربية",
    },
    {
      title: " الحدث اليوم",
    },
  ];
  return (
    <>
      <section>
        <div className="container">
          <div className="row g-3 mt-5 flex-column-reverse flex-md-row">
            {/* right side */}
            <div className="col-md-9">
              <div className="ps-md-5">
                <div className="border-bottom pb-3">
                  <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
                    <GreenCaret />| اقتصاد
                  </h3>
                </div>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <button className="btn btn-dark arab24-bg-black">
                    <img
                      src={icon2.src}
                      style={{ width: 26, height: 26 }}
                      className="ms-1"
                      alt="img"
                    />{" "}
                    أسعار الذهب
                  </button>
                  <button className="btn btn-dark arab24-bg-black">
                    <img
                      src={icon1.src}
                      style={{ width: 26, height: 26 }}
                      className="ms-1"
                      alt="img"
                    />{" "}
                    أسعار الصرف
                  </button>
                </div>
                {/* <CategorySlider /> */}
                <div>
                  <div className="my-4 table-responsive">
                    <Table />
                  </div>
                  <div className="border-bottom pb-3">
                    <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
                      <RedCaret />
                      الاكثر قراءة
                    </h3>
                  </div>
                  {[...Array(7)].map((_, index) => (
                    <NewsItem key={index} />
                  ))}
                  <div className="row my-5">
                    <div
                      className="col-md-12 py-4 px-0"
                      style={{ backgroundColor: "#F6F8F8", borderRadius: 8 }}
                    >
                      <div className="jawlatt-single-news pt-3">
                        <h3 className="text-dark fw-bold m-0 jawlatt-news-small-title">
                          <RedCaret />
                          موضوعات تهمك
                        </h3>
                      </div>
                      <div className="jawlatt-news-image px-4 mt-4">
                        <div className="row g-3">
                          {[...Array(4)].map((_, index) => (
                            <div
                              key={index}
                              className="col-sm-6 col-lg-4 col-xl-3"
                            >
                              <div className="card1 pb-4 bg-white">
                                <div>
                                  <img
                                    src={Hospital.src}
                                    alt="img"
                                    className="img-fluid w-100"
                                  />
                                </div>
                                <div className="jawlatt-card1-heading px-2">
                                  <h4 className="my-2 px-1 jawlatt-right-border">
                                    إعلان
                                  </h4>
                                  <p>
                                    أسرة ذكية بأسعار مذهلة في مصر - لا تفوت
                                    الفرصة
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
                  {[...Array(3)].map((_, index) => (
                    <NewsItem key={index} />
                  ))}
                </div>
              </div>
            </div>
            {/* left side */}
            <div className="col-md-3 jawlatt-bnr-top-lt">
              <div className="left-side">
                <div className="card mb-3 jawlatt-card-border rounded-4">
                  <div className="card-header py-3 pb-0">
                    <h5 className="card-title fw-bold text-end mb-0" dir="ltr">
                      أخبار مصر
                      <i className="fa-solid fa-caret-left ms-2  jawlatt-text-red" />
                    </h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group">
                      {[...Array(4)].map((_, index) => (
                        <li key={index} className="list-group-item pr-0">
                          <div className="d-flex align-items-center gap-2">
                            <a
                              className="d-block text-decoration-none"
                              href="#"
                            >
                              <p className="m-0 fw-bold text-start jawlatt-card-fs">
                                <img
                                  style={{ width: 20 }}
                                  src={SkyNews.src}
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
                            إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء
                            يناقشون موقف مصر
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
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
                <div className="card mb-3 jawlatt-card-border rounded-4">
                  <div className="card-header py-3 pb-0">
                    <h5 className="card-title fw-bold text-end mb-0" dir="ltr">
                      أخبار مصر
                      <i className="fa-solid fa-caret-left ms-2  jawlatt-text-red" />
                    </h5>
                  </div>
                  <div className="card-body p-3">
                    <ul className="list-group ">
                      {data.map((item, i) => (
                        <li
                          key={i}
                          className="list-group-item py-2 px-0 border-0"
                        >
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
                                  src={Group.src}
                                />
                                {item.title}
                              </p>
                              <div className="plus">
                                <img
                                  src={Plus.src}
                                  alt="img"
                                  style={{ width: 20 }}
                                />
                              </div>
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="detail-btn mb-3  text-center">
                    <button className="text-white px-3  border-0 jawlatt-bg-red jawlatt-detail-btn-border fw-medium">
                      المزيد
                    </button>
                  </div>
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

Economic.getLayout = (page) => {
  return (
    <MainLayout title={"الرئيسية"} category>
      {page}
    </MainLayout>
  );
};
export default Economic;
