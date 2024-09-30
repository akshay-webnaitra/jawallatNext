import styles from "./style.module.css";
import PostMeta from "@/components/PostMeta";
import PostLink from "@/components/PostLink";
import { decode } from "html-entities";

export default function MainCategoryMainPost({ item }) {
  if (!item) {
    return null;
  }

  return (
    <>
      <div className={styles.jawallat_main_slider}>
        <div className={styles.jawallat_main_sec_slide}>
          <div
            className={
              !item?.has_source_logo
                ? styles.slideImg
                : styles.slideImg + " " + styles.logo_image
            }
          >
            <img
              src={
                !!item?.news_image_url
                  ? item?.news_image_url
                  : item?.news_source_icon
              }
              height={350}
              alt={item?.news_title?.substr(0, 15)}
            />
          </div>
          <div className={styles.jawallat_carousel_caption}>
            <span
              className={styles.jawallat_badge}
              style={{ background: item?.category?.cat_color }}
            >
              {item?.category?.cat_name}
            </span>
            <h4>
              <PostLink item={item}>
                <a>{decode(item?.news_title)}</a>
              </PostLink>
            </h4>
            {item.news_excerpt ? <p>{item.news_excerpt}</p> : ""}
            <PostMeta
              source={item?.news_site}
              date={item?.news_date}
              item={item}
            />
          </div>
        </div>
      </div>
    </>
  );
}
