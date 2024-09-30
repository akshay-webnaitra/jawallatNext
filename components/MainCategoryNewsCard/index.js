import styles from "./style.module.css";
import PostMeta from "@/components/PostMeta";
import PostLink from "@/components/PostLink";
import { decode } from "html-entities";

export default function NewsCard({ item }) {
  if (!item) {
    return null;
  }

  return (
    <>
      <div className={styles.jawallat_card_block}>
        <div className={styles.jawallat_content}>
          <span
            className={styles.jawallat_badge}
            style={{ background: item?.category?.cat_color }}
          >
            {item?.category?.cat_name}
          </span>
          <h6>
            <PostLink item={item}>
              <a>{decode(item?.news_title)}</a>
            </PostLink>
          </h6>
          <PostMeta
            source={item?.news_site}
            date={item?.news_date}
            item={item}
          />
        </div>
        <div
          className={
            !item?.has_source_logo
              ? styles.jawallat_fullImg
              : styles.jawallat_fullImg + " " + styles.logo_image
          }
        >
          <img
            src={
              !!item?.news_image_url
                ? item?.news_image_url
                : item?.news_source_icon
            }
            height={196}
            width={308}
            alt={item?.news_title}
          />
        </div>
      </div>
    </>
  );
}
