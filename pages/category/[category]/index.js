import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "./style.module.css";
import InfiniteScroll from "react-infinite-scroller";
import JawlattLink from "@/components/JawlattLink";
import Header from "@/partials/header";
import Footer from "@/partials/footer";
import MainCategoryMainPost from "@/components/MainCategoryMainPost/index";
import MainCategoryNewsCard from "@/components/MainCategoryNewsCard/index";
import MainCategorySlideNews from "@/components/MainCategorySlideNews/index";
import NewsCard from "@/components/NewsCard";
import NewsMediaCard from "@/components/NewsMediaCard/index";
import CategoryCard from "@/components/CategoryCard";
import HomeSinglePost from "@/components/SinglePostAmount";
import MediaCardSingle from "@/components/NewsMediaCardLarge/index";
import TrendingNews from "@/components/TrendingNews/index";
import JawlattShopIframe from "@/components/JawlattShopIframe";
import Ads6 from "@/public/ads6.jpg";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import HeaderV2 from "@/partials/v2/Header";
import GoogleAds from "@/components/GoogleAds";

import { wrapper } from "@/utils/store";
import {
  fetchCategories,
  fetchCategoriesItems,
  categoriesSelector,
} from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem, serverItemSelector } from "@/slices/serverItems";
import Category from "@/components/CategoryCard";
import { useMediaQuery } from "react-responsive";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchSources());
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

  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);

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

  const dispatch = useDispatch();

  const takeAndSkip = (array, skip, n) => {
    let skippedArray = array.slice(skip - 1, skip + n);
    return skippedArray;
  };

  useEffect(() => {
    setloadMoreNews([]);
  }, [router]);

  const loadNextPage = () => {
    dispatch(
      fetchCategoriesItems(router.query.category, nextPage, (data) => {
        setloadMoreNews([...loadMoreNews, ...data?.news?.data]);
        setNextPage(nextPage + 1);
      })
    );
  };

  return (
    <>
      {/* <Header /> */}
      <HeaderV2 />
      <Head>
        <title>{category?.cat_name}</title>
      </Head>
      <TrendingNews tags={tags} />

      <div className={"wrapper pt-0 " + styles.jawallat_home_top_wrapper}>
        <div className="container">
          <div className="w1 row g-3">
            <div
              className={
                "col-lg-3  d-block " + styles.jawallat_home_right_banner
              }
            >
              <div className="row g-3">
                <div className="col-md-12">
                  {main_news.length > 0 && (
                    <div className="d-lg-none d-xl-none d-block">
                      <MainCategoryMainPost item={news[0]} />
                    </div>
                  )}

                  {news.length > 0 && (
                    <div className="d-block">
                      <MainCategoryNewsCard item={news[1]} />
                    </div>
                  )}

                  {news.length > 1 && (
                    <div className="d-block">
                      <MainCategoryNewsCard item={news[2]} />
                    </div>
                  )}

                  {news.length > 2 && (
                    <div className="d-block">
                      <MainCategoryNewsCard item={news[3]} />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-3 mb-lg-0">
              {news.length > 3 && (
                <div className=" d-none d-lg-block">
                  <MainCategoryMainPost item={main_news[0]} />
                </div>
              )}
            </div>
            <div
              className={
                "col-lg-3  d-block " + styles.jawallat_home_right_banner
              }
            >
              <div className="row g-3">
                <div className="col-md-12">
                  <JawlattLink href="#" className="d-block">
                    <div className="full-img mb-0 text-center">
                      {!isMobile && (
                        <GoogleAds
                          id="div-gpt-ad-1686735042414-0"
                          slot="/29958771/New_Jaw_MPU_Desktop_01"
                          width={300}
                          height={250}
                        />
                      )}
                    </div>
                  </JawlattLink>
                  <div className={styles.jawlatt_post_media_card}>
                    {news.length > 4 && (
                      <NewsMediaCard item={news[4]} type="small" />
                    )}
                    {news.length > 5 && (
                      <NewsMediaCard item={news[5]} type="small" />
                    )}
                    {news.length > 6 && (
                      <NewsMediaCard item={news[6]} type="small" />
                    )}
                    {news.length > 7 && (
                      <NewsMediaCard item={news[7]} type="small" />
                    )}
                  </div>
                  <div className="full-img mb-0 text-center">
                    {isMobile && (
                      <GoogleAds
                        id="div-gpt-ad-1686735176139-0"
                        slot="/29958771/New_Jaw_MPU_Mobile_01"
                        width={300}
                        height={250}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

      <div className={"mb-5 " + styles.jawlatt_royalSec}>
        <div className="container">
          <div className={styles.jawlatt_heading}>
            <h3>أخبار منوعة</h3>
          </div>
          <div className={styles.jawlatt_royalSlider}>
            <MainCategorySlideNews news={takeAndSkip(news, 8, 10)} />
          </div>
        </div>
      </div>

      {featured_categories.length > 0 && (
        <div className={styles.jawlatt_saudi_news}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-9">
                <div className={styles.jawlatt_heading}>
                  <JawlattLink
                    href={`/category/${category?.cat_slug}/${featured_categories[0]?.category_slug}`}
                  >
                    <a>
                      <h3>{featured_categories[0]?.category_name} </h3>
                    </a>
                  </JawlattLink>
                </div>
                <div className="row">
                  <div
                    className={
                      "col-12 col-lg-6 mb-4 mb-lg-0 " +
                      styles.jawlaat_saudi_news_col
                    }
                  >
                    <div className="d-block">
                      {featured_categories[0]?.news.length > 0 && (
                        <NewsCard item={featured_categories[0]?.news[0]} />
                      )}
                    </div>
                    <div className={styles.jawlatt_post_media_card}>
                      {featured_categories[0]?.news.length > 1 && (
                        <NewsMediaCard
                          item={featured_categories[0]?.news[1]}
                          type="large"
                        />
                      )}
                      {featured_categories[0]?.news.length > 2 && (
                        <NewsMediaCard
                          item={featured_categories[0]?.news[2]}
                          type="large"
                        />
                      )}
                    </div>

                    <div
                      className={
                        "d-block d-lg-none " + styles.jawlatt_post_media_card
                      }
                    >
                      {featured_categories[0]?.news.length > 3 && (
                        <NewsMediaCard
                          item={featured_categories[0]?.news[3]}
                          type="large"
                        />
                      )}
                      {featured_categories[0]?.news.length > 4 && (
                        <NewsMediaCard
                          item={featured_categories[0]?.news[4]}
                          type="large"
                        />
                      )}
                    </div>
                  </div>
                  <div
                    className={
                      "col-12 col-lg-6 mb-4 mb-lg-0 " +
                      styles.jawlaat_saudi_news_col
                    }
                  >
                    <div className="d-none d-lg-block">
                      {featured_categories[0]?.news.length > 5 && (
                        <NewsCard
                          item={featured_categories[0]?.news[5]}
                          type="large"
                        />
                      )}
                    </div>
                    <div className={styles.jawlatt_post_media_card}>
                      {featured_categories[0]?.news.length > 6 && (
                        <NewsMediaCard
                          item={featured_categories[0]?.news[6]}
                          type="large"
                        />
                      )}
                      {featured_categories[0]?.news.length > 7 && (
                        <NewsMediaCard
                          item={featured_categories[0]?.news[7]}
                          type="large"
                        />
                      )}
                    </div>
                    <div
                      className={
                        "d-block d-lg-none " + styles.jawlatt_post_media_card
                      }
                    >
                      {featured_categories[0]?.news.length > 8 && (
                        <NewsMediaCard
                          item={featured_categories[0]?.news[8]}
                          type="large"
                        />
                      )}
                      {featured_categories[0]?.news.length > 9 && (
                        <NewsMediaCard
                          item={featured_categories[0]?.news[9]}
                          type="large"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className={styles.jawlatt_heading}>
                  <h3>النشرة البريدية</h3>
                </div>

                <div className={styles.jawlatt_category_form}>
                  <p>
                    قم بالتسجيل في نشرتنا البريدية للحصول على أخر الاخبار يومياً
                    علي إيميلك
                  </p>
                  <form>
                    <input type="text" placeholder="بريدك الإلكتروني" />
                    <button type="submit">تسجيل</button>
                  </form>
                </div>

                <JawlattLink href="#" className="d-block">
                  <div className="full-img mb-4 jawallat-ggl-ads-sec">
                    {!isMobile && (
                      <div className="jawallat-mid-GoogleAds">
                        <GoogleAds
                          id="div-gpt-ad-1686735076275-0"
                          slot="/29958771/New_Jaw_MPU_Desktop_02"
                          width={300}
                          height={250}
                        />
                      </div>
                    )}
                  </div>
                </JawlattLink>

                <div className={styles.jawlatt_heading}>
                  <h3>التواصل الإجتماعي</h3>

                  <div className={styles.jawlatt_sidebarSocial}>
                    <ul>
                      <li className={styles.jawlatt_sidebarSocial_facebook}>
                        <button>
                          <i className="fa-brands fa-facebook-f"></i>
                        </button>
                      </li>
                      <li className={styles.jawlatt_sidebarSocial_twitter}>
                        <button>
                          <i className="fa-brands fa-twitter"></i>
                        </button>
                      </li>
                      <li className={styles.jawlatt_sidebarSocial_youtube}>
                        <button>
                          <i className="fa-brands fa-youtube"></i>
                        </button>
                      </li>
                      <li className={styles.jawlatt_sidebarSocial_instagram}>
                        <button>
                          <i className="fa-brands fa-instagram"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {featured_categories.length > 1 && (
        <>
          <div className={"wrapper wrapper-sm p-2 my-2 my-lg-4 text-center"}>
            {!isMobile ? (
              <GoogleAds
                id="div-gpt-ad-1686734581577-0"
                slot="/29958771/New_Jaw_Leader_Desktop_03"
                width={728}
                height={90}
              />
            ) : (
              <GoogleAds
                id="div-gpt-ad-1686734877675-0"
                slot="/29958771/New_Jaw_Leader_Mobile_03"
                width={320}
                height={100}
              />
            )}
          </div>

          <div
            className={"wrapper mb-4 d-block " + styles.jawlatt_cars_last_sec}
          >
            {isMobile && (
              <div
                className={"wrapper wrapper-sm p-2 my-2 my-lg-4 text-center"}
              >
                <GoogleAds
                  id="div-gpt-ad-1686735196963-0"
                  slot="/29958771/New_Jaw_MPU_Mobile_02"
                  width={300}
                  height={250}
                />
              </div>
            )}
            <div className="container">
              <div className="section-block">
                <div className="row">
                  <div className={"col-lg-3"}>
                    {featured_categories.length > 1 && (
                      <CategoryCard
                        category={featured_categories[1]}
                        parentCategory={category}
                      />
                    )}
                  </div>

                  <div className={"col-lg-3"}>
                    {featured_categories.length > 2 && (
                      <CategoryCard
                        category={featured_categories[2]}
                        parentCategory={category}
                      />
                    )}
                  </div>

                  {isMobile && (
                    <div className="wrapper wrapper-sm p-2 my-2 my-lg-4 text-center">
                      <GoogleAds
                        id="div-gpt-ad-1686735215972-0"
                        slot="/29958771/New_Jaw_MPU_Mobile_03"
                        width={300}
                        height={250}
                      />
                    </div>
                  )}
                  <div className={"col-lg-3"}>
                    {featured_categories.length > 3 && (
                      <CategoryCard
                        category={featured_categories[3]}
                        parentCategory={category}
                      />
                    )}
                  </div>

                  <div
                    className={
                      "col-lg-3 mt-4 mt-lg-0 d-flex d-lg-block " +
                      styles.jawlatt_categorySection
                    }
                  >
                    {!isMobile && (
                      <JawlattLink href="#" className="d-block mb-2">
                        <div className="full-img mb-0">
                          <GoogleAds
                            id="div-gpt-ad-1686735098461-0"
                            slot="/29958771/New_Jaw_MPU_Desktop_03"
                            width={300}
                            height={250}
                          />
                        </div>
                      </JawlattLink>
                    )}

                    <JawlattLink href="#" className="d-block mb-2 mt-2">
                      <div className="full-img">
                        <JawlattShopIframe />
                      </div>
                    </JawlattLink>
                    {!isMobile && (
                      <JawlattLink href="#" className="d-block mb-2">
                        <div className="full-img mb-0">
                          <GoogleAds
                            id="div-gpt-ad-1686735122756-0"
                            slot="/29958771/New_Jaw_MPU_Desktop_04"
                            width={300}
                            height={250}
                          />
                        </div>
                      </JawlattLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {isMobile && (
        <div className="wrapper wrapper-sm p-2 my-2 my-lg-4 text-center">
          <GoogleAds
            id="div-gpt-ad-1686735245717-0"
            slot="/29958771/New_Jaw_MPU_Mobile_04"
            width={300}
            height={250}
          />
        </div>
      )}
      {videos.length > 0 && (
        <div
          className={"mb-2 mb-lg-4 " + styles.jawlatt_category_video_section}
        >
          <div className={styles.jawlatt_category_video_section_overlay}></div>
          <div className={styles.jawlatt_category_video_section_main}>
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-1"></div>
                <div className="col">
                  <h3>فيديو</h3>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-lg-1"></div>
                <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                  {videos.length > 0 && (
                    <div className={styles.jawlatt_video_mainSec}>
                      <MainCategoryMainPost item={videos[0]} />
                    </div>
                  )}
                </div>
                <div className="col-12 col-lg-4">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <div className="row">
                        <div
                          className={
                            "col-6 col-lg-12 " +
                            styles.jawlatt_video_mainSec_card
                          }
                        >
                          {videos.length > 1 && (
                            <MediaCardSingle item={videos[1]} />
                          )}
                        </div>
                        <div
                          className={
                            "col-6 col-lg-12 " +
                            styles.jawlatt_video_mainSec_card
                          }
                        >
                          {videos.length > 2 && (
                            <MediaCardSingle item={videos[2]} />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="row">
                        <div
                          className={
                            "col-6 col-lg-12 " +
                            styles.jawlatt_video_mainSec_card
                          }
                        >
                          {videos.length > 3 && (
                            <MediaCardSingle item={videos[3]} />
                          )}
                        </div>
                        <div
                          className={
                            "col-6 col-lg-12 " +
                            styles.jawlatt_video_mainSec_card
                          }
                        >
                          {videos.length > 4 && (
                            <MediaCardSingle item={videos[4]} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={"wrapper wrapper-sm p-2 mb-2 mb-lg-5 text-center "}>
        {!isMobile ? (
          <GoogleAds
            id="div-gpt-ad-1686734621761-0"
            slot="/29958771/New_Jaw_Leader_Desktop_04"
            width={728}
            height={90}
          />
        ) : (
          <GoogleAds
            id="div-gpt-ad-1686734911927-0"
            slot="/29958771/New_Jaw_Leader_Mobile_04"
            width={320}
            height={100}
          />
        )}
      </div>
      {/*** featured_categories.length > 4 && (
        <>


          <div className={"wrapper mb-5 " + styles.jawlatt_cars_last_sec}>
            <div className="container">
              <div className="section-block">
                <div className="row">
                  <div className={"col-lg-3 order-1 order-lg-1 "}>
                    {featured_categories.length > 4 && (
                      <CategoryCard
                        category={featured_categories[4]}
                        parentCategory={category}
                      />
                    )}
                  </div>

                  <div className={"col-lg-3 order-2  order-lg-2 "}>
                    {featured_categories.length > 5 && (
                      <CategoryCard
                        category={featured_categories[5]}
                        parentCategory={category}
                      />
                    )}
                  </div>

                  <div className={"col-lg-3 order-4  order-lg-3 "}>
                    {featured_categories.length > 6 && (
                      <CategoryCard
                        category={featured_categories[6]}
                        parentCategory={category}
                      />
                    )}
                  </div>

                  <div
                    className={
                      "col-lg-3 order-3 order-lg-4 mt-4 mt-lg-0 d-flex d-lg-block " +
                      styles.jawlatt_categorySection
                    }
                  >
                    <JawlattLink href="#" className="d-block">
                      <div className="full-img mb-4"></div>
                    </JawlattLink>
                    <JawlattLink href="#" className="d-block">
                      <div className="full-img">
                        <JawlattShopIframe />
                      </div>
                    </JawlattLink>
                    <JawlattLink href="#" className="d-block">
                      <div className="full-img d-lg-none">
                        <JawlattShopIframe />
                      </div>
                    </JawlattLink>
                    <JawlattLink href="#" className="d-block">
                      <div className="full-img d-lg-none">
                        <JawlattShopIframe />
                      </div>
                    </JawlattLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
                  ) ****/}

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
            {loadMoreNews.map((item, index) => (
              <div key={item?.id} className="col-6 col-sm-4 col-lg-3">
                <MediaCardSingle item={item} />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
