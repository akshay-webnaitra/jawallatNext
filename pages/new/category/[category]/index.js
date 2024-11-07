import Sidebar from "@/partials/v2/Sidebar";
import NewsItem from "@/components/v2/NewsItem";
import CategorySlider from "@/components/v2/CategorySlider";
import MainLayout from "layout/mainLayout";
import GreenCaret from "@/components/v2/GreenCaret";
import SkyNews from "../../../../assets/images/sky-news.png";
import NewsAdd from "../../../../assets/images/news-ad.png";
import Group from "../../../../assets/images/group 1197.png";
import Plus from "../../../../assets/images/group 1304.png";
import RedCaret from "@/components/v2/RedCaret";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import icon1 from "../../../../assets/images/icon1.png";
import icon2 from "../../../../assets/images/icon2.png";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import Hospital from "../../../../assets/images/hospital-img.png";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const Category = () => {
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
          <div className="row g-3 mt-5">
            {/* right side */}
            <div className="col-md-9">
              <div className="ps-sm-5">
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
                <div className="row jawlatt-bnr-top">
                  <div className="col-12 ">
                    {[...Array(3)].map(() => (
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
                    <div className="row">
                      <div className="col-md-12 py-5 px-0">
                        <div className="jawlatt-news-image">
                          <a href="#">
                            <img
                              src="/images/Screenshot 2024-04-20 at 4.17 3.png"
                              alt="news"
                              className="w-100"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom pb-3">
                      <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
                        <RedCaret />
                        الاكثر قراءة
                      </h3>
                    </div>
                    {[...Array(7)].map(() => (
                      <NewsItem green />
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
                            {[...Array(4)].map(() => (
                              <div className="col-sm-6 col-lg-4 col-xl-3">
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
                    {[...Array(3)].map(() => (
                      <NewsItem green />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* left side */}
            <div className="col-md-3 jawlatt-bnr-top-lt">
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
                          إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون
                          موقف مصر
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-md-4 mb-3">
                <img src={NewsAdd.src} className="card-img-top" alt="NewsAd" />
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
              <Sidebar></Sidebar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Category.getLayout = (page) => {
  return (
    <MainLayout title={"الرئيسية"} category>
      {page}
    </MainLayout>
  );
};
export default Category;
