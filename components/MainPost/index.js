import styles from "./style.module.css";
import PostMeta from "@/components/PostMeta";
import PostLink from "@/components/PostLink";
import { decode } from "html-entities";

export default function Post({ item }) {
  if (!item) {
    return null;
  }

  return (
    <>
      <div className={styles.jawallat_main_slider}>
        <div className={styles.jawallat_main_sec_slide}>
          <div
            className={"carousel-caption " + styles.jawallat_carousel_caption}
          >
            <span className={styles.jawallat_badge}>
              {item?.category?.cat_name}
            </span>
            <h1>
              <PostLink item={item}>
                <a>{decode(item?.news_title)}</a>
              </PostLink>
            </h1>
            <PostMeta
              source={item?.news_site}
              date={item?.news_date}
              item={item}
            />
          </div>
          <div
            className={
              !item?.has_source_logo
                ? "full-img"
                : "full-img" + " " + styles.jawallat_logo_image
            }
          >
            <img
              src={
                !!item?.news_image_url
                  ? item?.news_image_url
                  : item?.news_source_icon
              }
              width={628}
              height={407}
              alt={item?.news_title?.substr(0, 15)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
