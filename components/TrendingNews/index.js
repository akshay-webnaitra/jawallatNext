import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PostLink from "@/components/PostLink";
import JawlattLink from "@/components/JawlattLink";
import Slider from "react-slick";

export default function HeaderNews({ tags }) {
  var header_news = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={"mb-3 " + styles.jawlatt_header}>
        <div className="container">
          <Slider {...header_news}>
            {tags &&
              tags.map((item, index) => (
                <div key={item?.id} className={styles.jawlatt_newsCard}>
                  <a
                    href={`/search?q=${item?.tag_name}&type=exact`}
                    target="_blank" rel="noreferrer"
                  >
                    <span className={styles.jawlatt_newsTredn}>
                      <i className="fa-solid fa-arrow-trend-up"></i>
                    </span>
                    <img
                      src={
                        item && item.media
                          ? item.media?.image_url
                          : item?.news_source_icon
                      }
                      height={96}
                      width={160}
                      alt={item?.tag_name}
                    />
                    <h6>{item?.tag_name}</h6>
                  </a>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
