import styles from "./style.module.css";
import PostMeta from "@/components/PostMeta";
import PostLink from "@/components/PostLink";
import { decode } from "html-entities";

export default function MyNewsMediaCard({ item }) {
  if (!item) {
    return null;
  }

  return (
    <>
      <div
        className={
          styles.jawallat_media + " " + styles.component_my_news_media_card
        }
      >
        <div
          className={
            !item?.has_source_logo
              ? styles.jawallat_thumb
              : styles.jawallat_thumb + " " + styles.jawallat_logo_image
          }
        >
          <img
            src={
              !!item?.news_image_url
                ? item?.news_image_url
                : item?.news_source_icon
            }
            height={180}
            width={300}
            alt={item?.news_title?.substr(0, 15)}
          />
        </div>
        <div className={styles.jawallat_media_body}>
          <h4>
            <PostLink item={item}>
              <a>{decode(item?.news_title)}</a>
            </PostLink>
          </h4>
          <p>
            كشفت وسائل إعلام محلية في الأردن، أن الغاز المتسرب من صهريج في ميناء
            العقبة، الاثنين، هو غاز الكلورين، في حادثة خلفت ضحايا وإصابات.
          </p>
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
