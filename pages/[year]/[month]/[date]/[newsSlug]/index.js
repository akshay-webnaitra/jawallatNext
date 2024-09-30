import moment from "moment";
import React, { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "./style.module.css";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroller";
import { decode } from "html-entities";
import JawlattLink from "@/components/JawlattLink";
import Header from "@/partials/header";
import Footer from "@/partials/footer";
import PostMeta from "@/components/PostMeta";
import MediaCard from "@/components/NewsMediaCard/index";
import RelatedNewsMediaCard from "@/components/RelatedNewsMediaCard/index";
import MediaCardSingle from "@/components/NewsMediaCardLarge/index";
import Envelope from "@/public/envelope.svg";
import Share from "@/public/share.svg";
import GoogleAds from "@/components/GoogleAds";
import JawlattShopIframe from "@/components/JawlattShopIframe";
import JawlattShopSingleIframe from "@/components/JawlattShopSingleIframe";
import getPostLink from "@/utils/getPostLink";
import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

import { wrapper } from "@/utils/store";
import { fetchSources } from "@/slices/sources";
import { fetchCategories, categoriesSelector } from "@/slices/categories";
import { fetchNews, newsSelector } from "@/slices/news";
import { useDispatch, useSelector } from "react-redux";
import { fetchServerItem, serverItemSelector } from "@/slices/serverItems";

import Head from "next/head";
import NewsLetterForm from "@/components/NewsLetterForm";
import { useMediaQuery } from "react-responsive";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    let news = false;
    const session = await getSession(context);
    await store.dispatch(fetchSources());
    await store.dispatch(fetchCategories());
    await store.dispatch(
      fetchNews(
        context.query.newsSlug,
        "slug",
        (data) => {
          news = data;
        },
        session
      )
    );
    await store.dispatch(fetchServerItem());

    return {
      props: { data: news }, // will be passed to the page component as props
    };
  }
);

const SingleNews = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { news, related_news } = data;
  const { previous_news_id } = useSelector(newsSelector);
  const [title, setTitle] = useState(false);
  const [activeShare, setActiveShare] = useState(false);
  const [allNews, setAllNews] = useState([data]);
  const [newsLoading, setNewsLoading] = useState(false);
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);
  const toggleHandler = () => {
    setActiveShare(!activeShare);
  };

  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getShareLink = (news) => {
    return process.env.NEXT_PUBLIC_HOST + getPostLink(news);
  };

  const handleScroll = () => {
    let sidebar = document.getElementById("sidebar");
    // if(sidebar){
    //   if((window.scrollY + window.innerHeight) > sidebar.offsetHeight){
    //     sidebar.style.position = 'fixed';
    //     sidebar.style.bottom = 0;
    //   } else {
    //     sidebar.style.position = 'initial';
    //     sidebar.style.top = 0;
    //   }

    // }
  };

  const loadNextPage = () => {
    if (!newsLoading) {
      setNewsLoading(true);
      dispatch(
        fetchNews(previous_news_id, "id", (respData) => {
          let dateObject = moment(respData?.news?.news_date);
          let formattedYear = dateObject?.format("YYYY");
          let formattedMonth = dateObject?.format("MM");
          let formattedDate = dateObject?.format("DD");
          let formattedSlug = respData?.news?.news_name;

          setAllNews([...allNews, respData]);

          router.push(
            {
              pathname: `/[year]/[month]/[date]/[newsSlug]`,
              query: {
                year: formattedYear,
                month: formattedMonth,
                date: formattedDate,
                newsSlug: formattedSlug,
              },
            },
            `/${formattedYear}/${formattedMonth}/${formattedDate}/${formattedSlug}`,
            { shallow: true }
          );
          setTitle(decode(respData?.news?.news_title));
          setNewsLoading(false);
        })
      );
    }
  };

  useEffect(() => {
    if (router.query.refresh) {
      setAllNews([data]);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [router.asPath]);
  return (
    <>
      <Head>
        {title ? (
          <title>{title}</title>
        ) : (
          <title>{decode(news?.news_title)}</title>
        )}
      </Head>
      <Header />
      <div className={"wrapper mt-3 " + styles.jawallat_home_top_wrapper}>
        <div className="container">
          <div className="w1 row g-3">
            <div className="col-12 col-lg-9 ">
              <div
                className={`${styles.jawlatt_post_main_inset} hidden-post`}
                style={{ display: "none" }}
              >
                <div className={styles.jawlaat_news_details_mainpost}>
                  <div className={styles.jawlaat_news_detail_meta}>
                    <ul>
                      <li>
                        <JawlattLink href="/">
                          <a>الرئيسية</a>
                        </JawlattLink>
                        <span>
                          <i className="fa-solid fa-greater-than"></i>
                        </span>
                      </li>
                      {!!news?.category?.cat_slug && (
                        <li>
                          <JawlattLink
                            href={`/category/${news?.category?.cat_slug}`}
                          >
                            <a>{news?.category?.cat_name}</a>
                          </JawlattLink>
                        </li>
                      )}
                      {!!news?.subcategory?.cat_slug &&
                        !!news?.subcategory?.cat_slug && (
                          <li>
                            <JawlattLink
                              href={`/category/${news?.category?.cat_slug}/${news?.subcategory?.cat_slug}`}
                            >
                              <a>{news?.subcategory?.cat_name}</a>
                            </JawlattLink>
                          </li>
                        )}
                    </ul>
                  </div>
                  <h1>{decode(news?.news_title)}</h1>
                  <PostMeta
                    source={news?.news_site}
                    date={news?.news_date}
                    item={news}
                  />
                  <div
                    className={
                      "mt-3 mt-lg-5 mb-4 " + styles.jawlatt_post_media_img
                    }
                  >
                    <img
                      src={news?.news_image_url}
                      width={900}
                      height={475}
                      alt={decode(news?.news_title)}
                    />
                  </div>
                  <div
                    className={styles.jawlatt_main_content}
                    dangerouslySetInnerHTML={{ __html: news?.news_content }}
                  ></div>
                  {/* <p></p> */}
                  <div className={styles.jawlaat_btn_res}>
                    <a
                      href={news?.news_source_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      إقرأ في المصدر
                    </a>
                  </div>

                  {news &&
                  news.hasOwnProperty("tags") &&
                  news.tags &&
                  news.tags.length ? (
                    <>
                      <div className={"mt-4 " + styles.jawlaat_related_words}>
                        <ul>
                          <li>
                            <b>كلمات ذات صلة:</b>
                          </li>
                          {news.tags.map((item, index) => (
                            <li key={index}>
                              <JawlattLink href={`/search?q=${item?.tag_name}`}>
                                <a>{item?.tag_name}</a>
                              </JawlattLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {news &&
                  news.hasOwnProperty("keywords") &&
                  news.keywords &&
                  news.keywords.length ? (
                    <>
                      <div className={"mt-4 " + styles.jawlaat_related_words}>
                        <ul>
                          <li>
                            <b>كلمات ذات صلة:</b>
                          </li>
                          {news.keywords.map((item, index) => (
                            <li key={index}>
                              <JawlattLink
                                href={`/search?q=${item?.keyword_name}`}
                              >
                                <a>{item?.keyword_name}</a>
                              </JawlattLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <div className="mt-3 mb-4 mb-lg-5">
                    <hr />
                  </div>
                </div>
              </div>

              {/*** Please do not place advertisement code above this line */}

              <InfiniteScroll
                className="row"
                pageStart={0}
                loadMore={loadNextPage}
                hasMore={!!previous_news_id}
                loader={
                  <div className="loader" key={0}>
                    جارى التحميل ...
                  </div>
                }
                threshold={500}
              >
                {allNews.map(({ news, related_news }, index) => (
                  <div className={styles.jawlatt_post_main_inset} key={index}>
                    <div className={styles.jawlaat_news_details_mainpost}>
                      <div className={styles.jawlaat_news_detail_meta}>
                        <ul>
                          <li>
                            <JawlattLink href="/">
                              <a>الرئيسية</a>
                            </JawlattLink>
                            <span>
                              <i className="fa-solid fa-greater-than"></i>
                            </span>
                          </li>
                          {!!news?.category?.cat_slug && (
                            <li>
                              <JawlattLink
                                href={`/category/${news?.category?.cat_slug}`}
                              >
                                <a>{news?.category?.cat_name}</a>
                              </JawlattLink>
                            </li>
                          )}
                          {!!news?.subcategory?.cat_slug &&
                            !!news?.subcategory?.cat_slug && (
                              <li>
                                <span>
                                  <i className="fa-solid fa-greater-than"></i>
                                </span>

                                <JawlattLink
                                  href={`/category/${news?.category?.cat_slug}/${news?.subcategory?.cat_slug}`}
                                >
                                  <a>{news?.subcategory?.cat_name}</a>
                                </JawlattLink>
                              </li>
                            )}
                        </ul>
                      </div>
                      <h1>{decode(news?.news_title)}</h1>
                      <PostMeta
                        source={news?.news_site}
                        date={news?.news_date}
                        item={news}
                      />
                      <div
                        className={`mt-3 mt-lg-5 mb-4 
                              ${styles.jawlatt_post_media_img}

                              ${
                                news?.has_source_logo
                                  ? styles.jawlatt_post_media_source_img
                                  : ""
                              }

                              ${
                                news?.image_size[0] > news?.image_size[1]
                                  ? styles.jawlatt_post_media_landscape_img
                                  : styles.jawlatt_post_media_portrait_img
                              }`}
                      >
                        <img
                          src={news?.news_image_url}
                          width={900}
                          height={475}
                          alt={decode(news?.news_title)}
                        />
                      </div>
                      <div
                        className={
                          activeShare
                            ? styles.jawlatt_social_section +
                              " " +
                              styles.activeSh
                            : styles.jawlatt_social_section
                        }
                      >
                        <button
                          onClick={toggleHandler}
                          className={styles.jawlatt_uploadBtn}
                        >
                          <img src={Share?.src} alt="Icon" />
                        </button>
                        <div className={styles.jawlatt_hidden_Icons}>
                          <PinterestShareButton
                            url={getShareLink(news)}
                            title={news?.news_title}
                          >
                            <PinterestIcon />
                          </PinterestShareButton>

                          <LinkedinShareButton
                            url={getShareLink(news)}
                            title={news?.news_title}
                          >
                            <LinkedinIcon />
                          </LinkedinShareButton>
                        </div>
                        <EmailShareButton
                          url={getShareLink(news)}
                          title={news?.news_title}
                        >
                          <img src={Envelope?.src} alt="Icon" />
                        </EmailShareButton>
                        <TwitterShareButton
                          url={getShareLink(news)}
                          quote={news?.news_title}
                          hashtag={"#jawlatt"}
                        >
                          مشاركة علي تويتر
                          <TwitterIcon />
                        </TwitterShareButton>
                        <FacebookShareButton
                          url={getShareLink(news)}
                          quote={news?.news_title}
                          hashtag={"#jawlatt"}
                        >
                          مشاركة علي فيسبوك
                          <FacebookIcon />
                        </FacebookShareButton>

                        {/* <ul>
                          <li className={styles.jawlatt_twitterCount}>
                            <h3>2.4 K</h3>
                            <span>مشاهدة</span>
                          </li>
                          <li className={styles.jawlatt_facebookCount}>
                            <h3>2.4 K</h3>
                            <span>مشاركة</span>
                          </li>
                        </ul> */}
                      </div>
                      {index == 0 ? (
                        <>
                          {isMobile ? (
                            <div className="d-block mb-3 mb-lg-4 text-center">
                              <GoogleAds
                                id="div-gpt-ad-1686734836746-0"
                                slot="/29958771/New_Jaw_Leader_Mobile_02"
                                width={320}
                                height={100}
                              />
                            </div>
                          ) : (
                            <div className="d-block  mb-3 mb-lg-4 text-center">
                              <GoogleAds
                                id="div-gpt-ad-1686734411945-0"
                                slot="/29958771/New_Jaw_Leader_Desktop_02"
                                width={728}
                                height={90}
                              />
                            </div>
                          )}
                        </>
                      ) : null}
                      <div
                        className={styles.jawlatt_main_content}
                        dangerouslySetInnerHTML={{ __html: news?.news_content }}
                      ></div>
                      {index == 0 ? (
                        <>
                          {isMobile ? (
                            <div className="d-block mb-3 mb-lg-4 text-center">
                              <GoogleAds
                                id="div-gpt-ad-1686734877675-0"
                                slot="/29958771/New_Jaw_Leader_Mobile_03"
                                width={320}
                                height={100}
                              />
                            </div>
                          ) : (
                            <div className="d-block  mb-3 mb-lg-4 text-center">
                              <GoogleAds
                                id="div-gpt-ad-1686734581577-0"
                                slot="/29958771/New_Jaw_Leader_Desktop_03"
                                width={728}
                                height={90}
                              />
                            </div>
                          )}
                        </>
                      ) : null}
                      <div className={styles.jawlaat_btn_res}>
                        <a
                          href={news?.news_source_link + "#"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          إقرأ في المصدر
                        </a>
                      </div>
                      {isMobile && index == 0 ? (
                        <div className="row">
                          <div className="col-12 d-block mb-3 mt-3 mb-lg-4 text-center">
                            <div className="full-img">
                              <GoogleAds
                                id="div-gpt-ad-1686735215972-0"
                                slot="/29958771/New_Jaw_MPU_Mobile_03"
                                width={300}
                                height={250}
                              />
                            </div>
                          </div>
                        </div>
                      ) : null}
                      {news &&
                      news.hasOwnProperty("tags") &&
                      news.tags &&
                      news.tags.length ? (
                        <>
                          <div
                            className={"mt-4 " + styles.jawlaat_related_words}
                          >
                            <ul>
                              <li>
                                <b>كلمات ذات صلة:</b>
                              </li>
                              {news.tags.map((item, index) => (
                                <li key={index}>
                                  <JawlattLink href={`/tag/${item?.tag_name}`}>
                                    <a>{item?.tag_name}</a>
                                  </JawlattLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      <div className={"mt-4 " + styles.jawlaat_related_news}>
                        <h4 className="d-none d-lg-block">أخبار ذات صلة</h4>
                        <div
                          className={
                            "d-lg-none " + styles.jawlatt_category_posts_head
                          }
                        >
                          <h5>أخبار ذات صلة</h5>
                        </div>
                        {related_news && related_news.length ? (
                          <>
                            <div className={styles.jawlatt_media_detils}>
                              <div className="row">
                                {related_news && related_news.length > 3 ? (
                                  <div className="col-12 col-lg-6">
                                    <RelatedNewsMediaCard
                                      item={related_news[3]}
                                    />
                                  </div>
                                ) : null}

                                {related_news && related_news.length > 4 ? (
                                  <div className="col-12 col-lg-6">
                                    <RelatedNewsMediaCard
                                      item={related_news[4]}
                                    />
                                  </div>
                                ) : null}
                                {related_news && related_news.length > 5 ? (
                                  <div className="col-12 col-lg-6">
                                    <RelatedNewsMediaCard
                                      item={related_news[5]}
                                    />
                                  </div>
                                ) : null}
                                {related_news && related_news.length > 6 ? (
                                  <div className="col-12 col-lg-6">
                                    <RelatedNewsMediaCard
                                      item={related_news[6]}
                                    />
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </>
                        ) : null}
                      </div>
                      {index == 0 ? (
                        <>
                          {isMobile ? (
                            <div className="d-block mb-3 mt-3 mb-lg-4 text-center">
                              <GoogleAds
                                id="div-gpt-ad-1686734911927-0"
                                slot="/29958771/New_Jaw_Leader_Mobile_04"
                                width={320}
                                height={100}
                              />
                            </div>
                          ) : (
                            <div className="d-block  mb-3 mb-lg-4 text-center">
                              <GoogleAds
                                id="div-gpt-ad-1686734621761-0"
                                slot="/29958771/New_Jaw_Leader_Desktop_04"
                                width={728}
                                height={90}
                              />
                            </div>
                          )}
                        </>
                      ) : null}

                      {related_news && related_news.length > 3 ? (
                        <div
                          className={
                            "d-none d-lg-block " + styles.jawlaat_choose_section
                          }
                        >
                          <div className={styles.jawlaat_choose_section_head}>
                            <h4>إختارنا لكم</h4>
                          </div>
                          <div className="row">
                            {related_news && related_news.length > 7 ? (
                              <div className="col-6 col-sm-4">
                                <MediaCardSingle item={related_news[7]} />
                              </div>
                            ) : null}

                            {related_news && related_news.length > 8 ? (
                              <div className="col-6 col-sm-4">
                                <MediaCardSingle item={related_news[8]} />
                              </div>
                            ) : null}

                            {related_news && related_news.length > 9 ? (
                              <div className="col-6 col-sm-4">
                                <MediaCardSingle item={related_news[9]} />
                              </div>
                            ) : null}
                          </div>
                          {isMobile && index == 0 ? (
                            <div className="row">
                              <div className="col-12 d-block mb-3 mt-3 mb-lg-4 text-center">
                                <div className="full-img">
                                  <GoogleAds
                                    id="div-gpt-ad-1686735196963-0"
                                    slot="/29958771/New_Jaw_MPU_Mobile_02"
                                    width={300}
                                    height={250}
                                  />
                                </div>
                              </div>
                            </div>
                          ) : null}
                          <div className="row">
                            {related_news && related_news.length > 10 ? (
                              <div className="col-6 col-sm-4">
                                <MediaCardSingle item={related_news[10]} />
                              </div>
                            ) : null}

                            {related_news && related_news.length > 11 ? (
                              <div className="col-6 col-sm-4">
                                <MediaCardSingle item={related_news[11]} />
                              </div>
                            ) : null}

                            {related_news && related_news.length > 12 ? (
                              <div className="col-6 col-sm-4">
                                <MediaCardSingle item={related_news[12]} />
                              </div>
                            ) : null}
                          </div>
                        </div>
                      ) : null}
                      <div className="mt-4 mt-lg-0 wrapper mb-3 mb-lg-5">
                        <div className="section-block">
                          {/* <div className={styles.jawlaat_card_badge_heading}>
                                            <h4>سلع مختارة</h4>
                                        </div> */}

                          {isMobile && index == 0 ? (
                            <div className={"row "}>
                              <div className="col-12 d-block mb-3 mt-3 mb-lg-4 text-center">
                                <div className="full-img">
                                  <GoogleAds
                                    id="div-gpt-ad-1686735176139-0"
                                    slot="/29958771/New_Jaw_MPU_Mobile_01"
                                    width={300}
                                    height={250}
                                  />
                                </div>
                              </div>
                            </div>
                          ) : null}

                          <div className={styles.jawlatt_category_posts_head}>
                            <h5>سلع مختارة</h5>
                          </div>
                          <div
                            className={"row " + styles.jawlatt_categorySection}
                          >
                            <div className="col-4 ">
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

                          {isMobile && index == 0 ? (
                            <div className="row">
                              <div className="col-12 d-block mb-3 mt-3 mb-lg-4 text-center">
                                <div className="full-img">
                                  <GoogleAds
                                    id="div-gpt-ad-1686735245717-0"
                                    slot="/29958771/New_Jaw_MPU_Mobile_04"
                                    width={300}
                                    height={250}
                                  />
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div
                        className={
                          "mt-4 d-lg-none " + styles.jawlaat_related_news
                        }
                      >
                        <div className={styles.jawlatt_category_posts_head}>
                          <h5>أخبار ذات صلة</h5>
                        </div>
                        <div className={"" + styles.jawlatt_media_detils}>
                          <div className="row">
                            <div className="col-12 col-lg-6">
                              <MediaCard />
                            </div>
                            <div className="col-12 col-lg-6">
                              <MediaCard />
                            </div>
                            <div className="col-12 col-lg-6 d-lg-none">
                              <MediaCard />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 mb-4 mb-lg-5">
                        <hr />
                      </div>
                    </div>
                  </div>
                ))}
              </InfiniteScroll>
            </div>
            <div
              className={`col-lg-3 d-none d-lg-block ${styles.jawallat_home_right_banner}`}
            >
              <div
                className={`row g-3 ${styles.jawallat_sidebar}`}
                id="sidebar"
              >
                <div className="col-md-12">
                  {!isMobile ? (
                    <GoogleAds
                      id="div-gpt-ad-1686735042414-0"
                      slot="/29958771/New_Jaw_MPU_Desktop_01"
                      width={300}
                      height={250}
                    />
                  ) : null}

                  {/* <div
                    className={
                      "redcolor_heading mt-4 " +
                      styles.jawlaat_card_badge_heading
                    }
                  >
                    <div className={styles.jawlatt_category_posts_head}>
                      <h5>النشرة البريدية</h5>
                    </div>
                  </div>
                  <div className={styles.jawlatt_category_form}>
                    <p>
                      قم بالتسجيل في نشرتنا البريدية للحصول على أخر الاخبار
                      يومياً علي إيميلك
                    </p>
                    <NewsLetterForm type="button"/>
                  </div> */}

                  <div className={"mb-4 " + styles.jawlatt_post_media_card}>
                    <div
                      className={
                        "redcolor_heading " + styles.jawlaat_card_badge_heading
                      }
                    >
                      <div className={styles.jawlatt_category_posts_head}>
                        <h5>ما يشاهدة زوارنا الآن</h5>
                      </div>
                    </div>
                    {related_news && related_news.length ? (
                      <>
                        {related_news && related_news.length > 0 ? (
                          <MediaCard item={related_news[0]} />
                        ) : null}
                        {related_news && related_news.length > 1 ? (
                          <MediaCard item={related_news[1]} />
                        ) : null}
                        {related_news && related_news.length > 2 ? (
                          <MediaCard item={related_news[2]} />
                        ) : null}
                      </>
                    ) : null}
                  </div>
                  {!isMobile ? (
                    <GoogleAds
                      id="div-gpt-ad-1686735076275-0"
                      slot="/29958771/New_Jaw_MPU_Desktop_02"
                      width={300}
                      height={250}
                    />
                  ) : null}

                  <JawlattLink href="#" className="d-block">
                    <div className="full-img mb-4">
                      <JawlattShopIframe />
                    </div>
                  </JawlattLink>
                  {!isMobile ? (
                    <GoogleAds
                      id="div-gpt-ad-1686735098461-0"
                      slot="/29958771/New_Jaw_MPU_Desktop_03"
                      width={300}
                      height={250}
                    />
                  ) : null}
                  <div className={"mb-4 " + styles.jawlatt_post_media_card}>
                    <div
                      className={
                        "redcolor_heading " + styles.jawlaat_card_badge_heading
                      }
                    >
                      <div className={styles.jawlatt_category_posts_head}>
                        <h5>أخبار مختارة</h5>
                      </div>
                    </div>
                    <MediaCard />
                    <MediaCard />
                    <MediaCard />
                  </div>
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
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleNews;
