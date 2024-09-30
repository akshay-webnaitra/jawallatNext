import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import JawlattLink from "@/components/JawlattLink";
import Header from "@/partials/header";
import Footer from "@/partials/footer";
import NewsCard from "@/components/SubCategoryNewsCard";
import MediaCard from "@/components/NewsMediaCard/index";
import Category from "@/components/CategoryCard/index";
import GoogleAds from "@/components/GoogleAds";
import MediaCardSingle from "@/components/NewsMediaCardLarge/index";
import Head from "next/head";
import InfiniteScroll from "react-infinite-scroller";
import JawlattShopIframe from "@/components/JawlattShopIframe";
import JawlattShopSingleIframe from "@/components/JawlattShopSingleIframe";
import { useMediaQuery } from "react-responsive";

import { wrapper } from "@/utils/store";
import {
  fetchCategories,
  fetchSubCategoriesItems,
  categoriesSelector,
} from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
//import news from '@/slices/news';
const news = [];

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchCategories());
    await store.dispatch(fetchSources());
    await store.dispatch(
      fetchSubCategoriesItems(context.query.subcategory, null, null, session)
    );
    await store.dispatch(fetchServerItem());
  }
);

const SubCategoryPage = () => {
  const { category, tags, news, lastPage, related_news, videos } =
    useSelector(categoriesSelector);
  const router = useRouter();
  const dispatch = useDispatch();
  const [loadMoreNews, setloadMoreNews] = useState([]);
  const [nextPage, setNextPage] = useState(2);

  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);

  const takeAndSkip = (array, skip, n) => {
    let skippedArray = array.slice(skip - 1, skip + n);
    return skippedArray;
  };

  const loadNextPage = () => {
    dispatch(
      fetchSubCategoriesItems(router?.query?.subcategory, nextPage, (data) => {
        setloadMoreNews([...loadMoreNews, ...data?.news?.data]);
        setNextPage(nextPage + 1);
      })
    );
  };

  useEffect(() => {
    setloadMoreNews([]);
  }, [router]);

  return (
    <>
      <Header />
      <Head>
        <title>{category?.cat_name}</title>
      </Head>

      <div className={"wrapper pt-0 " + styles.jawallat_home_top_wrapper}>
        <div className="container">
          <div className="w1 row g-3">
            <div
              className={
                "col-lg-9 d-lg-block " + styles.jawallat_home_right_banner
              }
            >
              <div
                className={
                  "wrapper mb-3 mb-lg-4 " + styles.jawlatt_cat_mainSection
                }
              >
                <div className="row g-3">
                  <div
                    className={
                      "col-12 col-lg-6 mb-4 mb-lg-0 " +
                      styles.jawlaat_saudi_news_col
                    }
                  >
                    <NewsCard item={news[0]} />
                    <div className={styles.jawlatt_post_media_card}>
                      <MediaCard item={news[1]} />
                      <MediaCard item={news[2]} />
                    </div>
                  </div>
                  <div
                    className={
                      "col-12 col-lg-6 mb-4 mb-lg-0 d-none d-lg-block " +
                      styles.jawlaat_saudi_news_col
                    }
                  >
                    <NewsCard item={news[3]} />
                    <div className={styles.jawlatt_post_media_card}>
                      <MediaCard item={news[4]} />
                      <MediaCard item={news[5]} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={"wrapper wrapper-sm p-2 mb-3 mb-lg-4 text-center "}
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

              {/* <div className={'wrapper mb-3 mb-lg-4 ' + styles.jawlatt_cat_mainSection}>            
                            <div className='row g-3'>
                                <div className={'col-12 col-lg-6 mt-lg-3 mb-0 mb-lg-0 ' + styles.jawlaat_saudi_news_col}>
                                    <div className='d-none d-lg-block'>
                                        <NewsCard />
                                    </div>
                                    <div className={styles.jawlatt_post_media_card}>
                                        <MediaCard /> 
                                        <MediaCard /> 
                                    </div>
                                </div>
                                <div className={'col-12 col-lg-6 mt-0 mt-lg-3 mb-4 mb-lg-0 d-lg-block ' + styles.jawlaat_saudi_news_col}>
                                    <div className='d-none d-lg-block'>
                                        <NewsCard />
                                    </div>
                                    <div className={styles.jawlatt_post_media_card}>
                                        <MediaCard /> 
                                        <MediaCard /> 
                                    </div>
                                </div>
                            </div>
                        </div> */}

              <div className="wrapper mb-3 mb-lg-4">
                <div className="section-block">
                  <div className="row">
                    <div className="col-12 col-lg-4 mb-3 mb-lg-0  d-none d-lg-block">
                      <Category
                        category={{ news: takeAndSkip(news, 7, 3) }}
                        hideTitle={true}
                      />
                    </div>
                    <div className={"col-12 col-lg-4 mb-3 mb-lg-0"}>
                      <Category
                        category={{ news: takeAndSkip(news, 10, 3) }}
                        hideTitle={true}
                      />
                    </div>
                    <div className={"col-12 col-lg-4 mb-3 mb-lg-0"}>
                      <Category
                        category={{ news: takeAndSkip(news, 13, 3) }}
                        hideTitle={true}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="wrapper mb-3 mb-lg-5">
                <div className="section-block">
                  <div className={styles.jawlaat_card_badge_heading}>
                    <h4>سلع مختارة</h4>
                  </div>
                  <div className={"row " + styles.jawlatt_categorySection}>
                    <div className="col-4">
                      <JawlattLink href="#" className="d-block">
                        <div className="full-img">
                          <JawlattShopSingleIframe />
                        </div>
                      </JawlattLink>
                    </div>
                    <div className="col-4">
                      <JawlattLink href="#" className="d-block">
                        <div className="full-img">
                          <JawlattShopSingleIframe />
                        </div>
                      </JawlattLink>
                    </div>
                    <div className="col-4">
                      <JawlattLink href="#" className="d-block">
                        <div className="full-img">
                          <JawlattShopSingleIframe />
                        </div>
                      </JawlattLink>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={"wrapper wrapper-sm p-2 mb-3 mb-lg-4 text-center "}
              >
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

              <div className="wrapper mb-3 mb-lg-1">
                <div className="section-block">
                  <div className={styles.jawlaat_card_badge_heading}>
                    <h4>الأكثر قراءة</h4>
                  </div>
                  <div className="row">
                    {takeAndSkip(news, 16, 11).map((item, index) => (
                      <div key={item?.id} className="col-6 col-sm-4 col-lg-3">
                        <MediaCardSingle item={item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={"wrapper wrapper-sm p-2 mb-3 mb-lg-4 text-center "}
              >
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

              <div className="wrapper mb-3 mb-lg-4">
                <div className="row">
                  <div
                    className={
                      "col-12 col-lg-6 mb-4 mb-lg-0 " +
                      styles.jawlaat_saudi_news_col
                    }
                  >
                    <NewsCard item={news[27]} />
                    <div className={styles.jawlatt_post_media_card}>
                      <MediaCard item={news[28]} />
                      <MediaCard item={news[29]} />
                    </div>
                  </div>
                  <div
                    className={
                      "col-12 col-lg-6 mb-4 mb-lg-0  d-none d-lg-block " +
                      styles.jawlaat_saudi_news_col
                    }
                  >
                    <NewsCard item={news[30]} />
                    <div className={styles.jawlatt_post_media_card}>
                      <MediaCard item={news[31]} />
                      <MediaCard item={news[32]} />
                    </div>
                  </div>
                </div>
              </div>
              {isMobile && (
                <div
                  className={"wrapper wrapper-sm p-2 mb-3 mb-lg-4 text-center "}
                >
                  <GoogleAds
                    id="div-gpt-ad-1686734673245-0"
                    slot="/29958771/New_Jaw_Leader_Mobile_01"
                    width={320}
                    height={100}
                  />
                </div>
              )}

              <div className="wrapper mb-3 mb-lg-4">
                <div className="section-block">
                  <div className="row">
                    <div className="col-12 col-lg-4 mb-3 mb-lg-0 d-none d-lg-block">
                      <Category
                        category={{ news: takeAndSkip(news, 34, 3) }}
                        hideTitle={true}
                      />
                    </div>
                    <div
                      className={
                        "col-12 col-lg-4 mb-3 mb-lg-0 " +
                        styles.jawallat_economySec
                      }
                    >
                      <Category
                        category={{ news: takeAndSkip(news, 37, 3) }}
                        hideTitle={true}
                      />
                    </div>
                    <div
                      className={
                        "col-12 col-lg-4 mb-3 mb-lg-0 " +
                        styles.jawallat_techSec
                      }
                    >
                      <Category
                        category={{ news: takeAndSkip(news, 40, 3) }}
                        hideTitle={true}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="wrapper mb-3 mb-lg-5">
                <div className="section-block">
                  <div className={styles.jawlaat_card_badge_heading}>
                    <h4>سلع مختارة</h4>
                  </div>
                  <div className={"row " + styles.jawlatt_categorySection}>
                    <div className="col-4">
                      <JawlattLink href="#" className="d-block">
                        <a>
                          <div className="full-img">
                            <JawlattShopSingleIframe />
                          </div>
                        </a>
                      </JawlattLink>
                    </div>
                    <div className="col-4">
                      <JawlattLink href="#" className="d-block">
                        <a>
                          <div className="full-img">
                            <JawlattShopSingleIframe />
                          </div>
                        </a>
                      </JawlattLink>
                    </div>
                    <div className="col-4">
                      <JawlattLink href="#" className="d-block">
                        <a>
                          <div className="full-img">
                            <JawlattShopSingleIframe />
                          </div>
                        </a>
                      </JawlattLink>
                    </div>
                  </div>
                </div>
              </div>

              {isMobile && (
                <div
                  className={"wrapper wrapper-sm p-2 mb-3 mb-lg-4 text-center "}
                >
                  <GoogleAds
                    id="div-gpt-ad-1686734836746-0"
                    slot="/29958771/New_Jaw_Leader_Mobile_02"
                    width={320}
                    height={100}
                  />
                </div>
              )}

              <div className="wrapper mb-1 mb-lg-1">
                <div className="section-block">
                  <div className="row">
                    {takeAndSkip(news, 43, 11).map((item, index) => (
                      <div key={item?.id} className="col-6 col-sm-4 col-lg-3">
                        <MediaCardSingle item={item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={"wrapper wrapper-sm p-2 mb-3 mb-lg-4 text-center "}
              ></div>
            </div>
            <div
              className={
                "col-lg-3 d-lg-block " + styles.jawallat_home_right_banner
              }
            >
              <div className="row g-3">
                <div className="col-md-12">
                  <div className="full-img d-block">
                    {!isMobile ? (
                      <GoogleAds
                        id="div-gpt-ad-1686735042414-0"
                        slot="/29958771/New_Jaw_MPU_Desktop_01"
                        width={300}
                        height={250}
                      />
                    ) : (
                      <div className="text-center">
                        <GoogleAds
                          id="div-gpt-ad-1686735176139-0"
                          slot="/29958771/New_Jaw_MPU_Mobile_01"
                          width={300}
                          height={250}
                        />
                      </div>
                    )}
                  </div>
                  <div className={"mb-4 " + styles.jawlatt_post_media_card}>
                    <div
                      className={
                        "redcolor_heading " + styles.jawlaat_card_badge_heading
                      }
                    >
                      <h4>أخبار ذات صلة</h4>
                    </div>
                    <MediaCard item={related_news[0]} />
                    <MediaCard item={related_news[1]} />
                    <MediaCard item={related_news[2]} />
                  </div>

                  <div className="full-img mb-0 d-block">
                    {!isMobile ? (
                      <GoogleAds
                        id="div-gpt-ad-1686735076275-0"
                        slot="/29958771/New_Jaw_MPU_Desktop_02"
                        width={300}
                        height={250}
                      />
                    ) : (
                      <div className="text-center">
                        <GoogleAds
                          id="div-gpt-ad-1686735196963-0"
                          slot="/29958771/New_Jaw_MPU_Mobile_02"
                          width={300}
                          height={250}
                        />
                      </div>
                    )}
                  </div>
                  <div
                    className={
                      "my-4 jawlatt_card_bg " + styles.jawlatt_post_media_card
                    }
                  >
                    <div className={styles.jawlaat_card_badge_heading}>
                      <h4>فيديو</h4>
                    </div>
                    <MediaCard item={videos[0]} />
                    <MediaCard item={videos[1]} />
                    <MediaCard item={videos[2]} />
                    <MediaCard item={videos[3]} />
                    <MediaCard item={videos[4]} />
                  </div>

                  <div className={"mb-4 p-0 " + styles.jawlatt_post_media_card}>
                    <div
                      className={
                        "redcolor_heading " + styles.jawlaat_card_badge_heading
                      }
                    >
                      <h4>ما يشاهدة زوارنا الآن</h4>
                    </div>
                    <MediaCard item={related_news[3]} />
                    <MediaCard item={related_news[4]} />
                    <MediaCard item={related_news[5]} />
                  </div>
                  <div className="full-img mb-4 d-block">
                    {!isMobile ? (
                      <GoogleAds
                        id="div-gpt-ad-1686735098461-0"
                        slot="/29958771/New_Jaw_MPU_Desktop_03"
                        width={300}
                        height={250}
                      />
                    ) : (
                      <div className="text-center">
                        <GoogleAds
                          id="div-gpt-ad-1686735215972-0"
                          slot="/29958771/New_Jaw_MPU_Mobile_03"
                          width={300}
                          height={250}
                        />
                      </div>
                    )}
                  </div>
                  <JawlattLink href="#" className="d-block">
                    <a>
                      <div className="full-img mb-4">
                        <JawlattShopIframe />
                      </div>
                    </a>
                  </JawlattLink>
                  <JawlattLink href="#" className="d-block">
                    <div className="full-img mb-4">
                      <JawlattShopSingleIframe />
                    </div>
                  </JawlattLink>
                  {!isMobile ? (
                    <GoogleAds
                      id="div-gpt-ad-1686735122756-0"
                      slot="/29958771/New_Jaw_MPU_Desktop_04"
                      width={300}
                      height={250}
                    />
                  ) : (
                    <div className="jaw-mpu-mobile-04 text-center">
                      <GoogleAds
                        id="div-gpt-ad-1686735245717-0"
                        slot="/29958771/New_Jaw_MPU_Mobile_04"
                        width={300}
                        height={250}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="wrapper mb-3 mb-lg-1">
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
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SubCategoryPage;
