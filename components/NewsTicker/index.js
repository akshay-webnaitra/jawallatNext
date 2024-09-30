import styles from "./style.module.css";
import Link from "next/link";
import PostLink from "@/components/PostLink";
import Slider from "react-slick";
import { decode } from "html-entities";

const NewsTicker = ({ items }) => {
  if (!items) {
    return null;
  }

  const news_tickets = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };
  return (
    <>
      <div
        className={
          styles.jawlatt_news_ticker + " " + styles.component_news_ticker
        }
      >
        <div className="container">
          <div className={styles.jawlatt_acme_news_ticker}>
            <div className={styles.jawlatt_acme_news_ticker_label}>عاجل</div>
            <div className={styles.jawlatt_acme_news_ticker_section}>
              <Slider {...news_tickets}>
                {items &&
                  items.map((item, index) => (
                    <div
                      key={item?.id}
                      className={styles.jawlatt_acme_news_ticker_box}
                    >
                      <PostLink item={item}>
                        <a>
                          <strong>{item?.news_site}</strong>{" "}
                          {decode(item?.news_title)}
                        </a>
                      </PostLink>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsTicker;
