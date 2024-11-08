import Sidebar from "@/partials/v2/Sidebar";
import MainLayout from "layout/mainLayout";
import NewsAdd from "assets/images/news-ad.png";
import RedCaret from "@/components/v2/RedCaret";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import NewsImg from "assets/images/images 3.png";
import Like from "@/components/v2/icons/like";
import Favourite from "@/components/v2/icons/favourite";
import ShareOutline from "@/components/v2/icons/shareOutline";
import VideoPlayBtn from "@/components/v2/icons/videoPlayBtn";
import { useRef } from "react";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const Category = () => {
  const videoRef = useRef([]);
  const slider = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handlePlay = (index) => {
    const video = videoRef.current[index];
    console.log(video, "video");
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <>
      <section className="notification video">
        <div className="container">
          <div className="row g-3 mt-3">
            {/* right side */}
            <div className="col-md-9">
              <div className="pb-3">
                <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
                  <RedCaret />
                  فيديو
                </h3>
              </div>
              <Slider {...slider} className="blur-effect mb-4">
                {[...Array(16)].map((_, index) => (
                  <div
                    key={index}
                    className={`slick-slide ${
                      index === 0 ? "first-slide" : ""
                    }`}
                  >
                    <button
                      className="btn text-nowrap fs-16 px-3 border"
                      style={{
                        borderRadius: 13,
                        border: "2px solid #E5E5E5",
                      }}
                    >
                      الحرب في غزة
                    </button>
                  </div>
                ))}
              </Slider>
              <div className="ps-sm-5">
                {[...Array(3)].map((_, index) => (
                  <div className="news-video-card mb-5">
                    <div className="row">
                      <div className="col-md-8">
                        <h4 className="fw-bold">
                          إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون
                          موقف مصر
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-4 mt-2">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={NewsImg.src}
                          style={{ minWidth: 34, height: 34 }}
                          alt="img"
                          className="rounded-circle"
                        />
                        <p className="m-0">سكاي نيوز عربية</p>
                      </div>
                      <p className="fs-12 m-0">
                        23 <ShareOutline />
                      </p>
                      <p className="fs-12 m-0">
                        12 <Favourite />
                      </p>
                      <p className="fs-12 m-0">
                        2k <Like />
                      </p>
                    </div>
                    <div className="news-video-card-img mt-3">
                      <video
                        ref={(el) => (videoRef.current[index] = el)}
                        style={{ width: "100%" }}
                      >
                        <source
                          src={
                            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                          }
                          type="video/mp4"
                        />
                      </video>
                      <button
                        onClick={() => handlePlay(index)}
                        className="btn rounded-circle border-0 video-play-btn"
                      >
                        <VideoPlayBtn />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* left side */}
            <div className="col-md-3 jawlatt-bnr-top-lt">
              <div className="p-md-4 mb-3">
                <img src={NewsAdd.src} className="card-img-top" alt="NewsAd" />
              </div>
              <div className="p-md-4 mb-3">
                <img src={NewsAdd.src} className="card-img-top" alt="NewsAd" />
              </div>
              <Sidebar></Sidebar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Category.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default Category;
