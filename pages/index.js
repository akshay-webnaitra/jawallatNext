import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import Head from "next/head";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import JawlattLink from "@/components/JawlattLink";
import Header from "@/partials/header";
import HeaderV2 from "@/partials/v2/Header";
import Footer from "@/partials/footer";
import NewsMainPost from "@/components/NewsMainPost";
import NewsCard from "@/components/NewsCard";
import NewsMediaCard from "@/components/NewsMediaCard";
import CategoryCard from "@/components/CategoryCard";
import HomeSinglePost from "@/components/SinglePostAmount";
import VideoNewsGallery from "@/components/VideoNewsGallery";
import TrendingNews from "@/components/TrendingNews";
import NewsTicker from "@/components/NewsTicker";
import GoogleAds from "@/components/GoogleAds";
import JawlattShopIframe from "@/components/JawlattShopIframe";
import JawlattShopSingleIframe from "@/components/JawlattShopSingleIframe";
import Ads6 from "@/public/ads6.jpg";
import { useSelector } from "react-redux";
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
  const {
    tags,
    ticker,
    featured,
    videos,
    featured_categories,
    homeItemHasError,
    homeItemLoading,
  } = useSelector(homeItemsSelector);

  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);

  return (
    <>
      <Head>
        <title>الرئيسية</title>
      </Head>

      <Header />
      <HeaderV2 />
      {/* <TrendingNews tags={tags} /> */}
      <div className="d-lg-block">
        <NewsTicker items={ticker} />
      </div>

      <div className={"wrapper pt-0 " + styles.jawallat_home_top_wrapper}>
        <div className="container">
          <div className="w1 row g-3">
            <div className="col-lg-6">
              {featured_categories[0]?.news?.length > 0 && (
                <NewsMainPost item={featured_categories[0]?.news[0]} />
              )}
              <div className="d-none d-lg-block">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className={styles.jawallat_post_box}>
                      {featured_categories[0]?.news?.length > 1 && (
                        <NewsMediaCard item={featured_categories[0]?.news[1]} />
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className={styles.jawallat_post_box}>
                      {featured_categories[0]?.news?.length > 2 && (
                        <NewsMediaCard item={featured_categories[0]?.news[2]} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                "col-lg-6 d-none d-lg-block " +
                styles.jawallat_home_right_banner
              }
            >
              <div className="row g-3">
                <div
                  className={"col-md-6" + " " + styles.jawallat_card_block_mid}
                >
                  {featured_categories[0]?.news?.length > 3 && (
                    <div
                      className={
                        "d-block" + " " + styles.jawallat_card_block_content
                      }
                    >
                      <NewsCard item={featured_categories[0]?.news[3]} />
                    </div>
                  )}

                  {featured_categories[0]?.news?.length > 4 && (
                    <div
                      className={
                        "d-block" + " " + styles.jawallat_card_block_bottom
                      }
                    >
                      <NewsCard item={featured_categories[0]?.news[4]} />
                    </div>
                  )}
                </div>

                <div
                  className={"col-md-6" + " " + styles.jawallat_card_block_left}
                >
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

                  <JawlattLink href="#" className="d-block">
                    <div className="full-img">
                      <JawlattShopIframe />
                    </div>
                  </JawlattLink>
                </div>
              </div>
            </div>
          </div>
          {isMobile ? (
            <div
              className={
                "mpu_mobile_02 wrapper wrapper-sm p-2 mb-1 mb-lg-5 text-center " +
                styles.jawallat_ads_section
              }
            >
              <GoogleAds
                id="div-gpt-ad-1686735196963-0"
                slot="/29958771/New_Jaw_MPU_Mobile_02"
                width={300}
                height={250}
              />
            </div>
          ) : null}

          <div className={"mb-2 mb-lg-4 " + styles.jawallat_home_news}>
            <div className="row">
              {featured_categories[0]?.news?.length > 5 && (
                <div className="col-lg-3 col-md-6">
                  <NewsMediaCard
                    lastChild={true}
                    item={featured_categories[0]?.news[5]}
                  />
                </div>
              )}
              {featured_categories[0]?.news?.length > 6 && (
                <div className="col-lg-3 col-md-6">
                  <NewsMediaCard
                    lastChild={true}
                    item={featured_categories[0]?.news[6]}
                  />
                </div>
              )}
              {featured_categories[0]?.news?.length > 7 && (
                <div className="col-lg-3 col-md-6">
                  <NewsMediaCard
                    lastChild={true}
                    item={featured_categories[0]?.news[7]}
                  />
                </div>
              )}
              {featured_categories[0]?.news?.length > 8 && (
                <div className="col-lg-3 col-md-6">
                  <NewsMediaCard
                    lastChild={true}
                    item={featured_categories[0]?.news[8]}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          "wrapper wrapper-sm p-2 mb-1 mb-lg-5 text-center " +
          styles.jawallat_ads_section
        }
      >
        {isMobile ? (
          <GoogleAds
            id="div-gpt-ad-1686734836746-0"
            slot="/29958771/New_Jaw_Leader_Mobile_02"
            width={320}
            height={100}
          />
        ) : (
          <GoogleAds
            id="div-gpt-ad-1686734411945-0"
            slot="/29958771/New_Jaw_Leader_Desktop_02"
            width={728}
            height={90}
          />
        )}
      </div>

      <div className="wrapper mb-3 mb-lg-5">
        <div className="container">
          <div className="section-block">
            <div className="row">
              {featured_categories.length > 1 && (
                <>
                  {!isMobile && (
                    <div
                      className={
                        "d-none d-lg-block col-lg-3 order-3 order-lg-3"
                      }
                    >
                      <CategoryCard category={featured_categories[1]} />
                    </div>
                  )}
                  {isMobile ? (
                    <div className={"col-12"}>
                      <CategoryCard category={featured_categories[1]} />
                    </div>
                  ) : null}
                </>
              )}

              {featured_categories.length > 2 && (
                <>
                  {!isMobile && (
                    <div
                      className={
                        "d-none d-lg-block col-lg-3 order-3 order-lg-3"
                      }
                    >
                      <CategoryCard category={featured_categories[2]} />
                    </div>
                  )}
                  {isMobile && (
                    <div className={"col-12"}>
                      <CategoryCard category={featured_categories[2]} />
                    </div>
                  )}
                </>
              )}

              {featured_categories.length > 3 && (
                <>
                  {!isMobile && (
                    <div
                      className={
                        "d-none d-lg-block col-lg-3 order-3 order-lg-3"
                      }
                    >
                      <CategoryCard category={featured_categories[3]} />
                    </div>
                  )}
                  {isMobile && (
                    <div className={"col-12"}>
                      <CategoryCard category={featured_categories[3]} />
                    </div>
                  )}
                </>
              )}

              <div className={"col-lg-3 order-4 order-lg-5 mt-1 mt-lg-0  "}>
                <div
                  className={"d-lg-none " + styles.jawlatt_category_posts_head}
                >
                  <h5>تكنولوجيا</h5>
                </div>
                <div
                  className={
                    "d-flex d-lg-block " + styles.jawlatt_categorySection
                  }
                >
                  {!isMobile && (
                    <div className="full-img mb-0 mb-lg-3">
                      <GoogleAds
                        id="div-gpt-ad-1686735076275-0"
                        slot="/29958771/New_Jaw_MPU_Desktop_02"
                        width={300}
                        height={250}
                      />
                    </div>
                  )}

                  <JawlattLink href="#" className="d-block">
                    <div className="full-img">
                      <JawlattShopSingleIframe />
                    </div>
                  </JawlattLink>
                  <JawlattLink href="#" className="d-block">
                    <div className="full-img mb-2">
                      <JawlattShopSingleIframe />
                    </div>
                  </JawlattLink>
                  <JawlattLink href="#" className="d-block">
                    <div className="full-img mb-2  d-lg-none">
                      <JawlattShopSingleIframe />
                    </div>
                  </JawlattLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          "wrapper wrapper-sm p-2 mb-2 mb-lg-5  text-center " +
          styles.jawallat_ads_section2
        }
      >
        {isMobile ? (
          <GoogleAds
            id="div-gpt-ad-1686734877675-0"
            slot="/29958771/New_Jaw_Leader_Mobile_03"
            width={320}
            height={100}
          />
        ) : (
          <GoogleAds
            id="div-gpt-ad-1686734581577-0"
            slot="/29958771/New_Jaw_Leader_Desktop_03"
            width={728}
            height={90}
          />
        )}
      </div>

      <VideoNewsGallery videos={videos} />

      <div
        className={
          "wrapper wrapper-sm p-2 mb-1 mb-lg-5 text-center " +
          styles.jawallat_ads_section
        }
      >
        {isMobile ? (
          <GoogleAds
            id="div-gpt-ad-1686735215972-0"
            slot="/29958771/New_Jaw_MPU_Mobile_03"
            width={300}
            height={250}
          />
        ) : null}
      </div>

      {/********** Featured Categories More than 4 ***********/}

      {featured_categories.length > 4 && (
        <>
          <div className="wrapper mb-5 jawallat-ads-mid-sec">
            <div className="container">
              <div className="section-block">
                <div className="row">
                  <div className={"col-lg-3 order-1 order-lg-1"}>
                    {featured_categories.length > 4 && (
                      <CategoryCard category={featured_categories[4]} />
                    )}
                  </div>

                  <div className={"col-lg-3 order-3  order-lg-3"}>
                    {featured_categories.length > 5 && (
                      <CategoryCard category={featured_categories[5]} />
                    )}
                  </div>

                  <div className={"col-lg-3 order-5  order-lg-4"}>
                    {featured_categories.length > 6 && (
                      <CategoryCard category={featured_categories[6]} />
                    )}
                  </div>

                  <div className={"col-lg-3 order-4 order-lg-5 mt-1 mt-lg-0  "}>
                    <div
                      className={
                        "d-lg-none " + styles.jawlatt_category_posts_head
                      }
                    >
                      <h5>تكنولوجيا</h5>
                    </div>
                    <div
                      className={
                        "d-flex d-lg-block " + styles.jawlatt_categorySection
                      }
                    >
                      <div className="full-img mb-0 mb-lg-3 d-none d-lg-block">
                        {!isMobile && (
                          <GoogleAds
                            id="div-gpt-ad-1686735098461-0"
                            slot="/29958771/New_Jaw_MPU_Desktop_03"
                            width={300}
                            height={250}
                          />
                        )}
                      </div>
                      <JawlattLink href="#" className="d-block">
                        <div className="full-img">
                          <JawlattShopSingleIframe />
                        </div>
                      </JawlattLink>
                      <JawlattLink href="#" className="d-block">
                        <div className="full-img mb-2">
                          <JawlattShopSingleIframe />
                        </div>
                      </JawlattLink>
                      <JawlattLink href="#" className="d-block">
                        <div className="full-img mb-2  d-lg-none">
                          <JawlattShopSingleIframe />
                        </div>
                      </JawlattLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/********** Featured Categories More than 6 ***********/}
      {featured_categories.length > 6 && (
        <>
          <div
            className={
              "wrapper wrapper-sm p-2 mb-2 mb-lg-5 text-center " +
              styles.jawallat_ads_section2
            }
          >
            {!isMobile && (
              <GoogleAds
                id="div-gpt-ad-1686734621761-0"
                slot="/29958771/New_Jaw_Leader_Desktop_04"
                width={728}
                height={90}
              />
            )}
          </div>

          <div className="wrapper mb-5">
            <div className="container">
              <div className="section-block">
                <div className="row">
                  <div className={"col-lg-3"}>
                    {featured_categories.length > 7 && (
                      <CategoryCard category={featured_categories[7]} />
                    )}
                  </div>
                  {isMobile ? (
                    <div
                      className={
                        "wrapper  d-lg-none mt-4 mt-lg-0 p-2 mb-1 mb-lg-5 text-center " +
                        styles.jawallat_ads_section
                      }
                    >
                      <GoogleAds
                        id="div-gpt-ad-1686734911927-0"
                        slot="/29958771/New_Jaw_Leader_Mobile_04"
                        width={320}
                        height={100}
                      />
                    </div>
                  ) : null}

                  <div className={"col-lg-3"}>
                    {featured_categories.length > 8 && (
                      <CategoryCard category={featured_categories[8]} />
                    )}
                  </div>

                  <div
                    className={
                      "wrapper d-lg-none mt-4 mt-lg-0 p-2 mb-1 mb-lg-5 text-center " +
                      styles.jawallat_ads_section
                    }
                  >
                    {isMobile ? (
                      <GoogleAds
                        id="div-gpt-ad-1686735245717-0"
                        slot="/29958771/New_Jaw_MPU_Mobile_04"
                        width={300}
                        height={250}
                      />
                    ) : null}
                  </div>

                  <div className={"col-lg-3"}>
                    {featured_categories.length > 9 && (
                      <CategoryCard category={featured_categories[9]} />
                    )}
                  </div>

                  <div className="d-none d-lg-block col-lg-3 ">
                    <div className={styles.jawlatt_post_media_card}>
                      <JawlattLink href="#" className="d-block">
                        <div className="full-img mb-0">
                          {!isMobile && (
                            <GoogleAds
                              id="div-gpt-ad-1686735122756-0"
                              slot="/29958771/New_Jaw_MPU_Desktop_04"
                              width={300}
                              height={250}
                            />
                          )}
                        </div>
                      </JawlattLink>
                      <JawlattLink href="#" className="d-block">
                        <div className="full-img mb-0">
                          <JawlattShopSingleIframe />
                        </div>
                      </JawlattLink>
                      <JawlattLink href="#" className="d-block">
                        <div className="full-img mb-0">
                          <JawlattShopSingleIframe />
                        </div>
                      </JawlattLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/********** Featured Categories More than 10 ***********/}
      {featured_categories.length > 10 && (
        <>
          <div
            className={
              "wrapper wrapper-sm p-2 mb-5 text-center d-none d-lg-block " +
              styles.jawallat_ads_section3
            }
          >
            <GoogleAds
              id="div-gpt-ad-1686734304285-0"
              slot="/29958771/New_Jaw_Leader_Desktop_01"
              width={728}
              height={90}
            />
          </div>

          <div
            className={
              "wrapper d-none mb-5 d-lg-block " + styles.jawlatt_cars_last_sec
            }
          >
            <div className="container">
              <div className="section-block">
                <div className="row">
                  <div className={"col-lg-3"}>
                    {featured_categories.length > 10 && (
                      <CategoryCard category={featured_categories[10]} />
                    )}
                  </div>

                  <div className={"col-lg-3"}>
                    {featured_categories.length > 11 && (
                      <CategoryCard category={featured_categories[11]} />
                    )}
                  </div>

                  <div className={"col-lg-3"}>
                    {featured_categories.length > 12 && (
                      <CategoryCard category={featured_categories[12]} />
                    )}
                  </div>

                  <div className="col-lg-3 ">
                    <JawlattLink href="#" className="d-block">
                      <div className="full-img mb-40">
                        <JawlattShopSingleIframe />
                      </div>
                    </JawlattLink>
                    <JawlattLink href="#" className="d-block">
                      <div className="full-img mb-2">
                        <JawlattShopSingleIframe />
                      </div>
                    </JawlattLink>
                    <JawlattLink href="#" className="d-block">
                      <div className="full-img mb-2">
                        <JawlattShopSingleIframe />
                      </div>
                    </JawlattLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default Home;
