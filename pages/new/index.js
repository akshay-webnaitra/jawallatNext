import { useEffect, useState } from "react";
import NewsBigItem from "@/components/v2/NewsBigItem";
import RedCaret from "@/components/v2/RedCaret";
import NewsItem from "@/components/v2/NewsItem";
import Sidebar from "@/partials/v2/Sidebar";
import MainLayout from "layout/mainLayout";
import VideoStop from "../../assets/images/video-stop.png";
import { getSession, useSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources, sourcesSelector } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import GoogleAds from "@/components/GoogleAds";
import JawlattLink from "@/components/JawlattLink";
import Link from "next/link";
import { setShowLogin } from "@/slices/settings";
import { addUserFavorite, deleteUserFavorite } from "@/slices/user";
import { toast } from "react-toastify";
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
  const { videos, featured, featured_categories } =
    useSelector(homeItemsSelector);
  const { sources } = useSelector(sourcesSelector);
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);
  const [markedItems, setMarkedItems] = useState([]);
  const { data: session, status } = useSession();
  console.log(videos, "res");

  const dispatch = useDispatch();
  const toggleFavourite = (item) => {
    const userId = "72";
    const newsId = item?.id;
    if (status === "authenticated") {
      // dispatch(setShowLogin(true));
      toast.error("You need to log in first");
    } else {
      if (!markedItems.includes(newsId)) {
        dispatch(
          addUserFavorite({ userId, newsId }, () => {
            toast.success("تمت إضافة إشارة مرجعية بنجاح");
            setMarkedItems((prev) => [...prev, newsId]);
          })
        );
      } else {
        dispatch(
          deleteUserFavorite({ userId, newsId }, () => {
            toast.success("تمت إزالة إشارة مرجعية بنجاح");
            setMarkedItems((prev) => prev.filter((id) => id !== newsId));
          })
        );
      }
    }
  };

  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);
  return (
    <>
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          {/* right side */}
          <div className="col-md-9">
            <div className="jawlatt-bnr-top-mid jawlatt-bnr-top-rt">
              <NewsBigItem item={featured[1]} />
              {Array.isArray(featured) &&
                featured?.slice(2, 5).map((item) => (
                  <div key={item?.id}>
                    <NewsItem
                      addFavourite={() => toggleFavourite(item)}
                      marked={markedItems.includes(item?.id)}
                      item={item}
                    />
                  </div>
                ))}
              <div className="jawlatt-news-image">
                <img src="images/news-bg.png" alt="news" className="w-100" />
              </div>
              {Array.isArray(featured) &&
                featured?.slice(5, 9).map((item) => (
                  <div key={item?.id}>
                    <NewsItem
                      addFavourite={() => toggleFavourite(item)}
                      marked={markedItems.includes(item?.id)}
                      item={item}
                    />
                  </div>
                ))}
              {/* news video */}
              <div className="new-video-card" style={{ borderRadius: 8 }}>
                <div className="d-flex gap-2 pt-3">
                  <RedCaret />
                  <h3 className="text-dark fw-bold m-0 jawlatt-news-small-title">
                    فيديو
                    <span
                      className="arab24-text-red me-3"
                      style={{ fontSize: 14 }}
                    >
                      {" "}
                      المزيد
                    </span>
                  </h3>
                </div>
                <div className="p-4">
                  <div className="row g-3">
                    {Array.isArray(videos) &&
                      videos?.slice(0, 3).map((item) => (
                        <div key={item?.id} className="col-sm-6 col-lg-4">
                          <div className="arab24-news-card">
                            <a
                              href={item?.news_video}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="arab24-news-card-img"
                            >
                              <img src={item?.news_image} alt="img" />
                              <div className="video-icon">
                                <img src={VideoStop.src} alt="img" />
                              </div>
                            </a>
                            <div>
                              <p
                                className="m-0 text-end fw-medium text-nowrap"
                                style={{ fontSize: 10 }}
                              >
                                <img
                                  style={{ minWidth: 24, height: 24 }}
                                  src={item?.news_source_icon}
                                  className="ms-2 rounded-circle"
                                />
                                <a
                                  href={item?.news_source_link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {item?.news_source}
                                </a>
                              </p>
                              <p
                                style={{ fontSize: 14, lineHeight: 1.3 }}
                                className="fw-bold mt-1"
                              >
                                {item?.news_title}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="py-4 mt-5 new-video-card"
                  style={{ borderRadius: 8 }}
                >
                  <div className="jawlatt-single-news pt-3">
                    <h3 className="text-dark fw-bold m-0 jawlatt-news-small-title d-flex align-items-center gap-2">
                      <RedCaret />
                      موضوعات تهمك
                    </h3>
                  </div>
                  <div className="jawlatt-news-image px-4 mt-4">
                    <div className="row g-3">
                      {featured_categories?.slice(0, 4).map((item) => (
                        <div
                          key={item?.category_id}
                          className="col-sm-6 col-lg-4 col-xl-3"
                        >
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
                                <JawlattLink
                                  href={`/category/${item?.category_slug}`}
                                >
                                  {item?.category_name}
                                </JawlattLink>
                              </h4>
                              <p>
                                أسرة ذكية بأسعار مذهلة في مصر - لا تفوت الفرصة
                              </p>
                              <div className="d-flex">
                                <p className=" arab24-text-gray fw-medium mb-0">
                                  ذكية بأسعار
                                </p>
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
              {/* topics of interest */}
              {Array.isArray(featured_categories) &&
                featured_categories?.slice(0, 1).map((item) => (
                  <div key={item?.category_id}>
                    <div className="jawlatt-single-news pt-3 px-0">
                      <h3 className="fw-bold m-0 text-dark jawlatt-border-bottom d-flex align-items-center gap-2">
                        <RedCaret />
                        {item?.category_name}
                      </h3>
                    </div>
                    {item?.news?.slice(0, 7).map((news) => (
                      <div key={news?.id}>
                        <NewsItem item={news} />
                      </div>
                    ))}
                  </div>
                ))}
              <div className="jawlatt-single-news py-3 px-0">
                <h3 className="fw-bold m-0 text-dark d-flex align-items-center gap-2">
                  <RedCaret />
                  منتجات قد تعجبك
                </h3>
              </div>
              <div className="row g-3 mb-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card1 arab24-card2 border bg-white">
                      <div className="arab24-card2-img">
                        <img
                          src="./images/hospital-img.png"
                          alt="img"
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
              {/* topics of interest */}
              {Array.isArray(featured_categories) &&
                featured_categories?.slice(1).map((item) => (
                  <div key={item?.category_id}>
                    <div className="jawlatt-single-news pt-3 px-0">
                      <h3 className="fw-bold m-0 text-dark jawlatt-border-bottom d-flex align-items-center gap-2">
                        <RedCaret />
                        {item?.category_name}
                      </h3>
                    </div>
                    {item?.news && item?.news?.length > 0 ? (
                      <>
                        {item?.news?.map((news) => (
                          <div key={news?.id}>
                            <NewsItem item={news} />
                          </div>
                        ))}
                      </>
                    ) : (
                      <p className="text-center mt-3">No Data</p>
                    )}
                  </div>
                ))}
            </div>
          </div>
          {/* left side */}
          <div className="col-md-3">
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
              <div className="full-img mb-0 mb-lg-3">
                {isMobile ? (
                  <div
                    className={
                      "wrapper wrapper-sm p-2 mb-1 mb-lg-5 text-center "
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
                    {Array.isArray(sources) &&
                      sources?.slice(0, 7).map((item, index) => (
                        <li
                          key={index}
                          className="list-group-item py-2 px-0 border-0"
                        >
                          <div className="d-flex gap-2 align-items-center justify-content-between w-100 ">
                            <JawlattLink
                              className="d-flex text-decoration-none"
                              href={`/new/source/${item?.name}`}
                            >
                              <p
                                className="m-0 fw-bold text-start"
                                style={{ fontSize: "15px", cursor: "pointer" }}
                              >
                                <img
                                  style={{
                                    width: 20,
                                    height: 20,
                                    marginLeft: 6,
                                  }}
                                  src={item?.image}
                                  className="rounded-circle"
                                />
                                {item?.name}
                              </p>
                            </JawlattLink>
                            <div className="plus">
                              <img
                                src="./images/Group 1304.png"
                                alt="img"
                                style={{ width: 20 }}
                              />
                            </div>
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
    </>
  );
};

Home.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default Home;
