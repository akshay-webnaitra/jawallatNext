import styles from "./style.module.css";
import PostMeta from "@/components/PostMeta";
import PostLink from "@/components/PostLink";
import { decode } from "html-entities";

export default function MediaNews({ item, type, lastChild }) {
  if (!item) {
    return null;
  }

  return (
    <>
      <div
        className={
          (type == "large"
            ? styles.jawallat_media +
              " " +
              styles.jawallat_media_small +
              " " +
              styles.component_news_media_card_large
            : styles.jawallat_media) +
          " " +
          (lastChild ? styles.last_child : "")
        }
      >
        <div
          className={
            !item?.has_source_logo
              ? styles.jawallat_thumb
              : styles.jawallat_thumb + " " + styles.logo_image
          }
        >
          <PostLink item={item}>
            <a>
              <img
                src={
                  !!item?.news_image_url
                    ? item?.news_image_url
                    : item?.news_source_icon
                }
                height={68}
                width={72}
                alt={item?.news_title?.substr(0, 15)}
              />
            </a>
          </PostLink>
        </div>
        <div className={styles.jawallat_media_body}>
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
      </div>
    </>
  );
}
