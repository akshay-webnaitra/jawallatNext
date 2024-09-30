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
      <div className={"mb-4 " + styles.jawallat_single_post_box}>
        <div className={styles.jawallat_post_image}>
          <span
            className={styles.jawallat_badge}
            style={{ background: item?.category?.cat_color }}
          >
            {item?.category?.cat_name}
          </span>
          <div
            className={
              !item?.has_source_logo
                ? "embed-responsive embed-responsive-16by9"
                : "embed-responsive embed-responsive-16by9" +
                  " " +
                  styles.jawallat_logo_image
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
                  height={150}
                  width={300}
                  alt={item?.news_title?.substr(0, 15)}
                />
              </a>
            </PostLink>
          </div>
        </div>
        <div className={styles.jawallat_content}>
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
