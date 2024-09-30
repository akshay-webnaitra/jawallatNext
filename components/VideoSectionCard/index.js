import styles from "./style.module.css";
import PostMeta from "@/components/PostMeta";
import { decode } from "html-entities";

export default function VideoSectionCard({ callback, active, item }) {
  return (
    <>
      <div
        className={`${styles.jawlatt_media} ${
          active ? styles.jawlatt_active : styles.jawlatt_activeTile
        }`}
        onClick={() => {
          callback();
        }}
      >
        <div className={styles.jawlatt_thumb}>
          <img
            src={item?.news_image_url}
            height={84}
            width={112}
            alt={item?.news_title}
          />
        </div>
        <div className={styles.jawlatt_media_body}>
          <h6>{decode(item?.news_title)}</h6>
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
