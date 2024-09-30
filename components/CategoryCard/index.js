import styles from "./style.module.css";
import NewsMediaCardLarge from "@/components/NewsMediaCardLarge";
import NewsMediaCard from "@/components/NewsMediaCard";
import JawlattLink from "@/components/JawlattLink";

export default function Category({ category, hideTitle, parentCategory }) {
  if (!category) {
    return null;
  }
  const { news, category_name, category_color } = category;

  return (
    <>
      {!hideTitle && (
        <div className={styles.jawlatt_category_posts_head}>
          <JawlattLink
            href={
              parentCategory
                ? `/category/${parentCategory.cat_slug}/${category.category_slug}`
                : `/category/${category.category_slug}`
            }
          >
            <a>
              <h5 style={{ "--category-color-var": category_color }}>
                {category_name}
              </h5>
            </a>
          </JawlattLink>
        </div>
      )}

      <div className={styles.jawallat_post_list_box}>
        <div className="d-none d-lg-block">
          <NewsMediaCardLarge item={news[0]} />
        </div>
        <div className={styles.jawallat_post_list}>
          <NewsMediaCard item={news[1]} />
          <NewsMediaCard item={news[2]} />
          <NewsMediaCard item={news[3]} />
          <NewsMediaCard item={news[4]} />
        </div>
      </div>
    </>
  );
}
