import styles from "./style.module.css";
import PostMeta from "@/components/PostMeta";
import Image from "next/image";
import JawlattLink from "@/components/JawlattLink";

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
              <JawlattLink href={"#"}>
                <a>{item?.news_title}</a>
              </JawlattLink>
            </h1>
            <PostMeta
              source={item?.news_site}
              date={item?.news_date}
              item={item}
            />
          </div>
          <div className="full-img">
            <img
              src="https://placeimg.com/628/407/nature"
              width={628}
              height={407}
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
