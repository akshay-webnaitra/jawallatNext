import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import icon1 from "../../../../assets/images/icon1.png";
import icon2 from "../../../../assets/images/icon2.png";
import Hospital from "../../../../assets/images/hospital-img.png";
import SkyNews from "../../../../assets/images/sky-news.png";
import { useSelector, useDispatch } from "react-redux";
import { wrapper } from "@/utils/store";
import {
  fetchCategories,
  fetchCategoriesItems,
  categoriesSelector,
} from "@/slices/categories";
import { fetchSources, sourcesSelector } from "@/slices/sources";
import { fetchServerItem, serverItemSelector } from "@/slices/serverItems";
import { useMediaQuery } from "react-responsive";
import GreenCaret from "@/components/v2/GreenCaret";
import NewsItem from "@/components/v2/NewsItem";
import RedCaret from "@/components/v2/RedCaret";
import Sidebar from "@/partials/v2/Sidebar";
import MainLayout from "layout/mainLayout";
import GoogleAds from "@/components/GoogleAds";
import Table from "@/components/v2/table";
import CategorySlider from "@/components/v2/CategorySlider";
import InfiniteScroll from "react-infinite-scroller";
import { fetchHomeItems } from "@/slices/homeItems";
import JawlattLink from "@/components/JawlattLink";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchSources());
    await store.dispatch(fetchHomeItems(session));
    await store.dispatch(
      fetchCategoriesItems(context.query.category, null, null, session)
    );
    await store.dispatch(fetchServerItem(session));
  }
);

const CategoryPage = () => {
  const [loadMoreNews, setloadMoreNews] = useState([]);
  const [nextPage, setNextPage] = useState(2);
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    videos,
    featured_categories,
    category,
    tags,
    news,
    lastPage,
    main_news,
    related_news,
    categoriesItemHasError,
    categoriesItemLoading,
  } = useSelector(categoriesSelector);
  const { sources } = useSelector(sourcesSelector);
  const categoryName = router.query.category;

  console.log(category, "data");

  const takeAndSkip = (array, skip, n) => {
    let skippedArray = array.slice(skip - 1, skip + n);
    return skippedArray;
  };

  const loadNextPage = () => {
    dispatch(
      fetchCategoriesItems(router.query.category, nextPage, (data) => {
        setloadMoreNews([...loadMoreNews, ...data?.news?.data]);
        setNextPage(nextPage + 1);
      })
    );
  };
  useEffect(() => {
    setloadMoreNews([]);
  }, [categoryName]);
  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);

  return (
    <>
      <section className="notification">
        <div className="container">
          <div className="row g-3">
            <div className="col-12">
              {categoryName === "رياضة" && (
                <>
                  <div className="border-bottom pb-3">
                    <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
                      <RedCaret />| فن
                    </h3>
                  </div>
                  <CategorySlider />
                </>
              )}
            </div>
            {/* right side */}
            <div className="col-md-9 order-2 order-md-1">
              <div className="ps-md-5">
                {categoryName !== "رياضة" && (
                  <>
                    <div className="border-bottom pb-3">
                      <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
                        <GreenCaret />| {category?.cat_name}
                      </h3>
                    </div>
                    <div className="d-flex flex-wrap gap-2 mt-3">
                      <button
                        onClick={() => setShow(!show)}
                        className="btn btn-dark arab24-bg-black text-white"
                      >
                        <img
                          src={icon2.src}
                          style={{ width: 26, height: 26 }}
                          className="ms-1"
                          alt="img"
                        />{" "}
                        أسعار الذهب
                      </button>
                      <button className="btn btn-dark arab24-bg-black text-white">
                        <img
                          src={icon1.src}
                          style={{ width: 26, height: 26 }}
                          className="ms-1"
                          alt="img"
                        />{" "}
                        أسعار الصرف
                      </button>
                    </div>
                  </>
                )}
                {show && categoryName === "إقتصاد" && (
                  <div className="my-4 table-responsive">
                    <Table />
                  </div>
                )}
                {/* <div className="border-bottom pb-3">
                  <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
                    <RedCaret />| الاكثر قراءة
                  </h3>
                </div> */}
                <div className="row jawlatt-bnr-top">
                  <div className="col-12 ">
                    {Array.isArray(news) &&
                      news
                        ?.slice(0, 3)
                        ?.map((item) => (
                          <NewsItem key={item?.id} item={item} />
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
                        ?.slice(3, 7)
                        ?.map((item) => (
                          <NewsItem key={item?.id} item={item} />
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
                    <div className="border-bottom pb-3">
                      <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
                        <RedCaret />
                        الاكثر قراءة
                      </h3>
                    </div>
                    {Array.isArray(news) &&
                      news
                        ?.slice(7, 13)
                        ?.map((item) => (
                          <NewsItem key={item?.id} item={item} />
                        ))}
                    <div className="row my-5">
                      <div
                        className="col-md-12 py-4 px-0"
                        style={{ backgroundColor: "#F6F8F8", borderRadius: 8 }}
                      >
                        <div className="jawlatt-single-news pt-3">
                          <h3 className="text-dark fw-bold m-0 jawlatt-news-small-title d-flex gap-2 align-items-center">
                            <RedCaret />
                            موضوعات تهمك
                          </h3>
                        </div>
                        <div className="jawlatt-news-image px-4 mt-4">
                          <div className="row g-3">
                            {Array.isArray(featured_categories) &&
                              featured_categories?.slice(0, 4)?.map((item) => (
                                <div
                                  key={item?.id}
                                  className="col-sm-6 col-lg-4 col-xl-3"
                                >
                                  <div className="card1 h-100 pb-4 bg-white">
                                    <div>
                                      <img
                                        src={Hospital.src}
                                        alt="img"
                                        className="img-fluid w-100"
                                      />
                                    </div>
                                    <div className="jawlatt-card1-heading px-2">
                                      <h4 className="my-2 px-1 jawlatt-right-border">
                                        {item?.category_name}
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
                    {Array.isArray(featured_categories) &&
                      featured_categories?.map((item, index) => (
                        <div key={index}>
                          <div className="jawlatt-single-news pt-3 px-0">
                            <h3 className="fw-bold m-0 text-dark jawlatt-border-bottom d-flex align-items-center gap-2">
                              <RedCaret />
                              {item?.category_name}
                            </h3>
                          </div>
                          {item?.news?.map((news) => (
                            <div key={news?.id}>
                              <NewsItem item={news} />
                            </div>
                          ))}
                        </div>
                      ))}
                    <div className="container wrapper mb-3 mb-lg-1">
                      <div className="section-block">
                        <InfiniteScroll
                          className="row"
                          pageStart={0}
                          loadMore={loadNextPage}
                          hasMore={nextPage <= lastPage && nextPage < 6}
                          loader={
                            <div className="loader" key={0}>
                              جارى التحميل ...
                            </div>
                          }
                          threshold={500}
                        >
                          {loadMoreNews?.map((item) => (
                            <NewsItem key={item?.id} item={item} />
                          ))}
                        </InfiniteScroll>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* left side */}
            <div className="col-md-3 order-1 order-md-2">
              <div className="left-side">
                {/* <div className="card mb-3 jawlatt-card-border rounded-4">
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
                </div> */}
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
                                  style={{
                                    fontSize: "15px",
                                    cursor: "pointer",
                                  }}
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
                                  src="../../images/Group 1304.png"
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
CategoryPage.getLayout = (page) => {
  return (
    <MainLayout title={"الرئيسية"} category>
      {page}
    </MainLayout>
  );
};
export default CategoryPage;
