import Sidebar from "@/partials/v2/Sidebar";
import MainLayout from "layout/mainLayout";
import NewsAdd from "assets/images/news-ad.png";
import RedCaret from "@/components/v2/RedCaret";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import DownArrow from "../../../assets/images/down-arrow.png";
import React, { useEffect, useState } from "react";
import GoogleAds from "@/components/GoogleAds";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedVideo } from "@/slices/livestream";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const LiveStream = () => {
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);
  const data = [
    {
      id: 1,
      title:
        "&quot;سلمان للإغاثة&quot; يوقع برنامجا مع الصحة العالمية لـتحسين خدمات المياه والصرف الصحي في اليمن",
      description:
        "&quot;سلمان للإغاثة&quot; يوقع برنامجا مع الصحة العالمية لـتحسين خدمات المياه والصرف الصحي في اليمن",
      thumbnail:
        "https://dashboard.jawlatt.com/storage/images/2024/5/306378-2389839.jpg",
      video: "https://www.youtube.com/watch?v=4i79mMroF40",
      link: "https://www.al-madina.com/article/889450/دولية/سلمان-للإغاثة-يوقع-برنامجا-مع-الصحة-العالمية-لتحسين-خدمات-المياه-والصرف-الصحي-في-اليمن",
      created_at: "2024-11-14T11:39:36.000000Z",
      updated_at: "2024-11-14T11:39:36.000000Z",
    },
    {
      id: 2,
      title: "وصول الفوج الأول من حجاج سوريا إلى مكة",
      description:
        "وصل إلى مكة المكرمة اليوم, الفوج الأول من حجاج سوريا، القادمين من سوريا, ويضم نحو مئتي حاج.وعمل مكتب ( 60 ) بشركة رواف منى, على تجهيز وإعداد جميع الإمكانيات وتجنيد الطاقات البشرية...",
      thumbnail:
        "https://dashboard.jawlatt.com/storage/images/2024/5/306379-5648.jpg",
      video: "https://www.youtube.com/watch?v=j9mTwNMJydM",
      link: "https://dashboard.jawlatt.com/storage/images/2024/5/306379-5648.jpg",
      created_at: "2024-11-14T11:48:03.000000Z",
      updated_at: "2024-11-14T11:48:03.000000Z",
    },
    {
      id: 3,
      title:
        "&quot;سلمان للإغاثة&quot; يوقع برنامجا مع الصحة العالمية لـتحسين خدمات المياه والصرف الصحي في اليمن",
      description:
        "&quot;سلمان للإغاثة&quot; يوقع برنامجا مع الصحة العالمية لـتحسين خدمات المياه والصرف الصحي في اليمن",
      thumbnail:
        "https://dashboard.jawlatt.com/storage/images/2024/5/306378-2389839.jpg",
      video: "https://www.youtube.com/watch?v=4i79mMroF40",
      link: "https://www.al-madina.com/article/889450/دولية/سلمان-للإغاثة-يوقع-برنامجا-مع-الصحة-العالمية-لتحسين-خدمات-المياه-والصرف-الصحي-في-اليمن",
      created_at: "2024-11-14T11:39:36.000000Z",
      updated_at: "2024-11-14T11:39:36.000000Z",
    },
    {
      id: 4,
      title: "وصول الفوج الأول من حجاج سوريا إلى مكة",
      description:
        "وصل إلى مكة المكرمة اليوم, الفوج الأول من حجاج سوريا، القادمين من سوريا, ويضم نحو مئتي حاج.وعمل مكتب ( 60 ) بشركة رواف منى, على تجهيز وإعداد جميع الإمكانيات وتجنيد الطاقات البشرية...",
      thumbnail:
        "https://dashboard.jawlatt.com/storage/images/2024/5/306379-5648.jpg",
      video: "https://www.youtube.com/watch?v=gCNeDWCI0vo",
      link: "https://dashboard.jawlatt.com/storage/images/2024/5/306379-5648.jpg",
      created_at: "2024-11-14T11:48:03.000000Z",
      updated_at: "2024-11-14T11:48:03.000000Z",
    },
  ];
  const selectedVideo = useSelector((state) => state.live.selectedVideo);
  console.log(selectedVideo);

  const dispatch = useDispatch();
  const getYouTubeEmbedUrl = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S+\/|\S+\/\S+|\S+\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    if (matches && matches[1]) {
      return `https://www.youtube.com/embed/${matches[1]}`;
    }
    return "";
  };
  useEffect(() => {
    if (!selectedVideo) {
      dispatch(setSelectedVideo(data[0].video));
    }
  }, [selectedVideo, dispatch]);
  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);
  return (
    <>
      <section className="notification live-stream">
        <div className="container">
          <div className="row g-3 mt-3 flex-column-reverse flex-md-row">
            {/* right side */}
            <div className="col-md-9">
              <div className="ps-md-5">
                <div className="pb-3">
                  <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
                    <RedCaret />
                    البث المباشر
                  </h3>
                </div>
                <div className="live-stream-banner mb-5">
                  {selectedVideo ? (
                    <iframe
                      width="100%"
                      height="500"
                      src={getYouTubeEmbedUrl(selectedVideo)}
                      title="YouTube video"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <p>Loading video...</p>
                  )}
                </div>
                <div className="mb-5">
                  <h5 className="fw-bold">الدولة</h5>
                  <div className="mt-2 position-relative">
                    <select
                      className="form-select shadow-none pe-3 "
                      style={{ border: "1px solid #00000045" }}
                      aria-label="Default select example"
                    >
                      <option>مصر</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div className="down-arrow">
                      <img src={DownArrow.src} alt="img" />
                    </div>
                  </div>
                </div>
                <div className="row g-4">
                  {data.map((item) => (
                    <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3">
                      <div
                        className="live-stream-card border text-center"
                        onClick={() => dispatch(setSelectedVideo(item.video))}
                      >
                        <div className="live-stream-card-img">
                          <img src={item.thumbnail} alt="img" />
                        </div>
                        <p className="m-0 p-2">{item?.title?.slice(0, 12)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* left side */}
            <div className="col-md-3">
              <div className="left-side">
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
                <div className="full-img mb-0 mb-lg-3">
                  {isMobile ? (
                    <div
                      className={
                        "wrapper wrapper-sm p-2 mb-1 mb-lg-5 text-center "
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

LiveStream.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default LiveStream;
