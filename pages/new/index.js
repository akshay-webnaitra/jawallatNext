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
import { addUserFavorite, deleteUserFavorite } from "@/slices/user";
import { toast } from "react-toastify";
import CountryNewsCard from "@/components/CountryNewsCard";
import NewsSourceCard from "@/components/NewsSourceCard";
import HomeVideoCard from "@/components/HomeVideoCard";
import HomeTopicCard from "@/components/HomeTopicCard";
import HomeProductCard from "@/components/HomeProductCard";
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
  const { videos, products, featured, featured_categories, top_news } =
    useSelector(homeItemsSelector);
  const { sources } = useSelector(sourcesSelector);
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);
  const [markedItems, setMarkedItems] = useState([]);
  const { data: session, status } = useSession();
  console.log(sources);

  const dispatch = useDispatch();
  const toggleFavourite = (item) => {
    const userId = session?.user?.id;
    const newsId = item?.id;
    if (status !== "authenticated") {
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
                    <Link href={"/new/video"}>المزيد</Link>
                  </h3>
                </div>
                <div className="p-4">
                  <div className="row g-3">
                    {Array.isArray(videos) &&
                      videos?.slice(0, 3).map((item) => (
                        <div key={item?.id} className="col-sm-6 col-lg-4">
                          <HomeVideoCard item={item} />
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
                          <HomeTopicCard item={item} />
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
                {Array.isArray(products) &&
                  products.map((res, index) => (
                    <div key={res?.id} className="col-sm-6 col-lg-4 col-xl-3">
                      <HomeProductCard res={res} />
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
              <CountryNewsCard item={top_news} />
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
              <NewsSourceCard sources={sources} />
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
