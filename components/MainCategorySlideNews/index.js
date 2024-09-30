import styles from "./style.module.css";
import Slider from "react-slick";
import MediaCardSingle from "../NewsMediaCardLarge/index";

export default function MainCategorySlideNews({ news }) {
  const slider = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <>
      <div className={styles.jawlatt_slideMain}>
        <Slider {...slider}>
          {news.length > 0 &&
            news.map((item, index) => (
              <div className={styles.jawlatt_category_slide} key={item?.id}>
                <MediaCardSingle item={item} />
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}
