import styles from "./style.module.css";
import PostLink from "@/components/PostLink";

export default function HomeSinglePost({ item }) {
  return (
    <>
      <div className={styles.jawallat_single_post}>
        <div className={styles.jawallat_single_img}>
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
        <div className={styles.jawallat_single_cnt}>
          <h6>مجموعة ادوات للشواء 25 قطعة مع مقياس حرارة</h6>
          <div className={styles.jawalat_single_cnt_amt}>
            EGP 171.23 <span>66%-</span>
          </div>
        </div>
      </div>
    </>
  );
}
