import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "./style.module.css";
import VideoSectionCard from "@/components/VideoSectionCard";
import Slider from "react-slick";

export default function VideoSection({ videos }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [sliderRandomKey, setSliderRandomKey] = useState(0);
  const [sliderVideoUrl, setSliderVideoUrl] = useState(videos[0]?.news_video);
  const [sliderActiveIndex, setSliderActiveIndex] = useState(0);
  const handleVideoClick = (val, slideIndex) => {
    setSliderRandomKey(Math.random());
    setSliderVideoUrl(val);
    setSliderActiveIndex(slideIndex);
  };
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  const slider2 = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };
  return (
    <>
      <div
        className={"mb-3 mb-lg-5 p-0 p-lg-5 " + styles.jawlatt_video_wrapper}
      >
        <div className="container">
          <div className={styles.jawlatt_video_heading}>
            <h2>فيديو</h2>
          </div>
          <div className={"px-4 pt-4 p-lg-0 " + styles.jawlatt_video_section}>
            <div className="row g-0">
              <div className={"col-lg-4 " + styles.jawlatt_video_tab_col}>
                <Slider
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2)}
                  {...slider2}
                >
                  {videos.length &&
                    videos.map((item, index) => (
                      <div
                        key={item?.id}
                        className={styles.jawlatt_video_slide}
                      >
                        <VideoSectionCard
                          item={item}
                          callback={() => {
                            handleVideoClick(item?.news_video, index);
                          }}
                          active={sliderActiveIndex == index}
                        />
                      </div>
                    ))}
                </Slider>
              </div>
              <div className={"col-lg-8 " + styles.jawlatt_video_tabs}>
                <div className={styles.jawlatt_videoPlayCard}>
                  <div className={styles.jawlatt_videoPlayCard_inset}>
                    <ReactPlayer url={sliderVideoUrl} key={sliderRandomKey} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
