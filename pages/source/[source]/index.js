import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import JawlattLink from "@/components/JawlattLink";
import Header from "@/partials/header";
import Footer from "@/partials/footer";
import NewsCard from "@/components/SubCategoryNewsCard";
import MediaCard from "@/components/NewsMediaCard/index";
import Category from "@/components/CategoryCard/index";
import HomeSinglePost from "@/components/SinglePostAmount";
import MediaCardSingle from "@/components/NewsMediaCardLarge/index";
import HeaderNews from "@/components/TrendingNews/index";
import NewsImg from "@/public/logo.png";
import take from "lodash/take";
import find from "lodash/find";
import { useMediaQuery } from "react-responsive";
import InfiniteScroll from "react-infinite-scroller";
import GoogleAds from "@/components/GoogleAds";
import JawlattShopIframe from "@/components/JawlattShopIframe";
import JawlattShopSingleIframe from "@/components/JawlattShopSingleIframe";
import Ads6 from "@/public/ads6.jpg";
import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";

import { wrapper } from "@/utils/store";
import {
  fetchSources,
  fetchSourcesItems,
  sourcesSelector,
} from "@/slices/sources";
import {
  fetchCategories,
  fetchCategoriesItems,
  categoriesSelector,
} from "@/slices/categories";
import { fetchServerItem, serverItemSelector } from "@/slices/serverItems";
import Head from "next/head";
//import news from '@/slices/news';
const news = [];

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources());
    await store.dispatch(fetchCategories());
    await store.dispatch(
      fetchSourcesItems(context.query.source, null, null, session)
    );
    await store.dispatch(fetchServerItem());
  }
);

const SourcePage = () => {
  const { category, tags, news, lastPage, related_news, videos, sources } =
    useSelector(sourcesSelector);
  const router = useRouter();
  const dispatch = useDispatch();
  const [currentSource, setCurrentSource] = useState({});
  const [loadMoreNews, setloadMoreNews] = useState([]);
  const [nextPage, setNextPage] = useState(2);
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);

  useEffect(() => {
    if (sources.length) {
      setCurrentSource({});
      setloadMoreNews([]);
      let currentSource = find(sources, { name: router?.query?.source });
      setCurrentSource({ ...currentSource });
    }
  }, [sources, router]);

  const takeAndSkip = (array, skip, n) => {
    let skippedArray = array.slice(skip - 1, skip + n);
    return skippedArray;
  };

  const handleSourceChange = (e) => {
    router.push(`/source/${e?.target?.value}`);
  };

  const loadNextPage = () => {
    dispatch(
      fetchSourcesItems(router?.query?.source, nextPage, (data) => {
        setloadMoreNews([...loadMoreNews, ...data?.news?.data]);
        setNextPage(nextPage + 1);
      })
    );
  };

  return (
    <>
      <Header />
      <Head>
        <title>{currentSource?.name}</title>
      </Head>

      <div className={styles.jawlatt_newsSourceSection}>
        <div className={styles.jawlatt_newsSource}>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <h2>مصادر الأخبار</h2>
              </div>
              <div className="col-auto">
                <div className={styles.jawlatt_newsSourceSelect}>
                  <select onChange={handleSourceChange}>
                    {sources.map((item, index) => (
                      <option
                        value={item?.name}
                        key={item?.name}
                        selected={router?.query?.source == item?.name}
                      >
                        {item?.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.jawlatt_cityNewspaper}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-auto">
                    <div className={styles.jawlatt_cityNewspaperImage}>
                      <img
                        src={
                          !!currentSource?.image
                            ? currentSource?.image
                            : NewsImg?.src
                        }
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <h3>{currentSource?.name}</h3>
                    <p>{currentSource?.description}</p>
                    <ul>
                      {!!currentSource?.url && (
                        <li>
                          <span>الموقع الإلكتروني</span>
                          <Link href={currentSource?.url}>
                            <a>{currentSource?.url}</a>
                          </Link>
                        </li>
                      )}
                      {!!currentSource?.contact && (
                        <li>
                          <span>البريد الإلكتروني</span>
                          <Link href="#">
                            <a>currentSource?.contact</a>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>
              <div className="col-auto">
                {!!currentSource?.twitter_url && (
                  <TwitterShareButton
                    url={currentSource?.twitter_url}
                    quote={
                      "next-share is a social share buttons for your next React apps."
                    }
                    hashtag={"#nextshare"}
                  >
                    <TwitterIcon className="ms-2" size={30} round />
                  </TwitterShareButton>
                )}
                {!!currentSource?.facebook_url && (
                  <FacebookShareButton
                    url={currentSource?.facebook_url}
                    quote={
                      "next-share is a social share buttons for your next React apps."
                    }
                    hashtag={"#nextshare"}
                  >
                    <FacebookIcon size={30} round />
                  </FacebookShareButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

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
                        category={{ news: takeAndSkip(news, 6, 4) }}
                        hideTitle={true}
                      />
                    </div>
                    <div className={"col-12 col-lg-4 mb-3 mb-lg-0"}>
                      <Category
                        category={{ news: takeAndSkip(news, 10, 4) }}
                        hideTitle={true}
                      />
                    </div>
                    <div className={"col-12 col-lg-4 mb-3 mb-lg-0"}>
                      <Category
                        category={{ news: takeAndSkip(news, 14, 4) }}
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
                    {takeAndSkip(news, 20, 18).map((item, index) => (
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
                    <NewsCard item={news[38]} />
                    <div className={styles.jawlatt_post_media_card}>
                      <MediaCard item={news[39]} />
                      <MediaCard item={news[40]} />
                    </div>
                  </div>
                  <div
                    className={
                      "col-12 col-lg-6 mb-4 mb-lg-0  d-none d-lg-block " +
                      styles.jawlaat_saudi_news_col
                    }
                  >
                    <NewsCard item={news[0]} />
                    <div className={styles.jawlatt_post_media_card}>
                      <MediaCard item={news[41]} />
                      <MediaCard item={news[42]} />
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
                        category={{ news: takeAndSkip(news, 43, 4) }}
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
                        category={{ news: takeAndSkip(news, 47, 4) }}
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
                        category={{ news: takeAndSkip(news, 51, 4) }}
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
                    {takeAndSkip(news, 55, 12).map((item, index) => (
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
                {/* <GoogleAds
                  id="div-gpt-ad-1686734411945-0"
                  slot="/29958771/New_Jaw_Leader_Desktop_02"
                  width={728}
                  height={90}
                /> */}
              </div>
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
                      <GoogleAds
                        id="div-gpt-ad-1686735176139-0"
                        slot="/29958771/New_Jaw_MPU_Mobile_01"
                        width={300}
                        height={250}
                      />
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
                    <MediaCard item={news[70]} />
                    <MediaCard item={news[71]} />
                    <MediaCard item={news[72]} />
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
                      <GoogleAds
                        id="div-gpt-ad-1686735196963-0"
                        slot="/29958771/New_Jaw_MPU_Mobile_02"
                        width={300}
                        height={250}
                      />
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
                    <MediaCard item={news[73]} />
                    <MediaCard item={news[74]} />
                    <MediaCard item={news[75]} />
                    <MediaCard item={news[76]} />
                    <MediaCard item={news[77]} />
                  </div>

                  <div className={"mb-4 p-0 " + styles.jawlatt_post_media_card}>
                    <div
                      className={
                        "redcolor_heading " + styles.jawlaat_card_badge_heading
                      }
                    >
                      <h4>ما يشاهدة زوارنا الآن</h4>
                    </div>
                    <MediaCard item={news[78]} />
                    <MediaCard item={news[79]} />
                    <MediaCard item={news[80]} />
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
                      <GoogleAds
                        id="div-gpt-ad-1686735215972-0"
                        slot="/29958771/New_Jaw_MPU_Mobile_03"
                        width={300}
                        height={250}
                      />
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
                </div>
              </div>
            </div>

            <div className="wrapper mb-3 mb-lg-1">
              <div className="section-block">
                <div className={styles.jawlaat_card_badge_heading}>
                  <h4>الأكثر قراءة</h4>
                </div>
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

export default SourcePage;
