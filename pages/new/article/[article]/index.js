import Sidebar from "@/partials/v2/Sidebar";
import NewsItem from "@/components/v2/NewsItem";
import MainLayout from "layout/mainLayout";
import SkyNews from "assets/images/sky-news-round.png";
import Group from "assets/images/group 1197.png";
import Plus from "assets/images/group 1304.png";
import { getSession, useSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories, fetchCategoriesItems } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import Headphone from "@/components/v2/icons/headphone";
import PlayBtn from "@/components/v2/icons/playbtn";
import SocialIconOne from "@/components/v2/icons/socialIcon1";
import SocialIconTwo from "@/components/v2/icons/socialIcon2";
import SocialIconThree from "@/components/v2/icons/socialIcon3";
import RedCaret from "@/components/v2/RedCaret";
import Share from "@/components/v2/icons/share";
import ShareRed from "@/components/v2/icons/shareRed";
import GoogleAds from "@/components/GoogleAds";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { fetchNews, newsSelector } from "@/slices/news";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useRouter } from "next/router";
import { addUserFavorite, deleteUserFavorite } from "@/slices/user";
import { toast } from "react-toastify";
import CountryNewsCard from "@/components/CountryNewsCard";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchNews(session));
    await store.dispatch(fetchSources());
    await store.dispatch(fetchHomeItems(session));
    await store.dispatch(
      fetchCategoriesItems(context.query.category, null, null, session)
    );
    await store.dispatch(fetchServerItem(session));
  }
);
const Article = () => {
  const { top_news } = useSelector(homeItemsSelector);
  const router = useRouter();
  const id = router?.query?.article;
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const [markedItems, setMarkedItems] = useState([]);
  const { data: session, status } = useSession();
  const { news, related_news } = useSelector(newsSelector);
  const toggleFavourite = (item) => {
    const userId = session?.user?.id;
    const newsId = item?.id;
    if (status !== "authenticated") {
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
            toast.error("تمت إزالة إشارة مرجعية بنجاح");
            setMarkedItems((prev) => prev.filter((id) => id !== newsId));
          })
        );
      }
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(isMobileMedia);
    }
  }, [isMobileMedia]);
  useEffect(() => {
    if (id) {
      dispatch(fetchNews(id, "id"));
    }
  }, [id, dispatch]);

  return (
    <>
      <section>
        <div className="container">
          <div className="row g-3 mt-5 flex-column-reverse flex-md-row">
            {/* right side */}
            <div className="col-md-9">
              <div className="ps-md-5">
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center gap-3 ps-3">
                    <img
                      src={news?.news_source_icon}
                      style={{ width: 35, height: 35 }}
                      alt="img"
                      className="rounded-circle border"
                    />
                    <p className="fs-14 m-0">{news?.news_source}</p>
                  </div>
                  <div className="d-flex align-items-center gap-3 border-end pe-3">
                    <p className="fs-14 fw-semibold m-0">34k</p>
                    <p className="fs-14 m-0">المتابعون</p>
                    <button className="btn arab24-bg-black text-white fs-12  p-0 px-2">
                      + متابعة
                    </button>
                    <ShareRed />
                  </div>
                </div>
                <h2 style={{ fontSize: 38 }} className="fw-bold">
                  {news?.news_title}
                </h2>
                <div className="d-flex align-items-center gap-4 arab24-newsItem-card my-3 flex-wrap">
                  <ul
                    style={{
                      listStyleType: "disc",
                      color: news?.category?.cat_color,
                    }}
                    className="m-0 p-0"
                  >
                    <li className=" me-4">
                      <p
                        className="m-0"
                        style={{ color: news?.category?.cat_color }}
                      >
                        {news?.category?.cat_name}
                      </p>
                    </li>
                  </ul>
                  <p className="m-0">{moment(news?.created_at).fromNow()}</p>
                  <p className="d-flex align-items-center gap-1 m-0">
                    23
                    <SocialIconThree />
                  </p>
                  <p className="d-flex align-items-center gap-1 m-0">
                    23
                    <SocialIconTwo />
                  </p>
                  <p className="d-flex align-items-center gap-1 m-0">
                    23
                    <SocialIconOne />
                  </p>
                  <div
                    style={{ fontSize: 8 }}
                    className="text-white fw-medium d-flex arab24-btn-red align-items-center gap-2 rounded-pill px-1 py-1 ps-2"
                  >
                    <PlayBtn />
                    123
                    <Headphone />
                  </div>
                  <a href="#">
                    <Share />
                  </a>
                </div>
                <div className="article">
                  <div className="article-banner mb-3">
                    <img src={news?.news_image} alt="img" />
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: news?.news_content }}
                  ></div>
                  <div className="d-flex flex-wrap gap-2 mb-2">
                    <span
                      style={{ background: "#f7f7f7", color: "#000000" }}
                      className="rounded-pill p-1 px-3 "
                    >
                      وردود الفع
                    </span>
                    <span
                      style={{ background: "#f7f7f7", color: "#000000" }}
                      className="rounded-pill p-1 px-3"
                    >
                      وردود الفع
                    </span>
                    <span
                      style={{ background: "#f7f7f7", color: "#000000" }}
                      className="rounded-pill p-1 px-3"
                    >
                      وردود الفع
                    </span>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <span
                      style={{ background: "#f7f7f7", color: "#000000" }}
                      className="rounded-pill p-1 px-3"
                    >
                      وردود الفع
                    </span>
                    <span
                      style={{ background: "#f7f7f7", color: "#000000" }}
                      className="rounded-pill p-1 px-3"
                    >
                      وردود الفع
                    </span>
                  </div>
                </div>
                <div className="border-bottom pb-3 mt-5">
                  <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
                    <RedCaret />| أخبار ذات صلة
                  </h3>
                </div>
                <div>
                  {Array.isArray(related_news) &&
                    related_news
                      ?.slice(0, 4)
                      .map((item) => (
                        <NewsItem
                          marked={markedItems.includes(item?.id)}
                          addFavourite={() => toggleFavourite(item)}
                          key={item?.id}
                          item={item}
                        />
                      ))}
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
                {Array.isArray(related_news) &&
                  related_news
                    ?.slice(4)
                    .map((item) => (
                      <NewsItem
                        marked={markedItems.includes(item?.id)}
                        addFavourite={() => toggleFavourite(item)}
                        key={item?.id}
                        item={item}
                      />
                    ))}
              </div>
            </div>
            {/* left side */}
            <div className="col-md-3">
              <div className="left-side">
                <CountryNewsCard item={top_news} />
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
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Article.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default Article;
