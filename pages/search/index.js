import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import styles from "./style.module.css";
import Header from "@/partials/header";
import Footer from "@/partials/footer";
import NewsMediaCardLarge from "@/components/NewsMediaCardLarge";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSearch, searchSelector } from "@/slices/search";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import InfiniteScroll from "react-infinite-scroller";
import Head from "next/head";
import JawlattLink from "@/components/JawlattLink";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources());
    await store.dispatch(fetchCategories());
    await store.dispatch(
      fetchSearch(
        {
          keyword: context?.query?.q,
          category: context?.query?.category,
          source: context?.query?.source,
          type: context?.query?.type,
        },
        1,
        () => {},
        session
      )
    );
    await store.dispatch(fetchServerItem());
  }
);

const Search = () => {
  const router = useRouter();
  const { searchResults, currentPage, total, lastPage } =
    useSelector(searchSelector);
  const { q, category, source, type } = router.query;
  const [searchTerm, setSearchTerm] = useState(q);
  const [searchResultItems, setSearchResultItems] = useState([]);
  const dispatch = useDispatch();
  const loadMoreResults = () => {
    dispatch(
      fetchSearch(
        {
          keyword: q,
          category: category,
          source: source,
          type: type,
        },
        currentPage + 1,
        (results) => {
          if (searchResultItems.length) {
            setSearchResultItems([...searchResultItems, ...results]);
          } else {
            setSearchResultItems([...searchResults, ...results]);
          }
        }
      )
    );
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Search Results for {searchTerm}</title>
      </Head>
      <Header />

      <div className={"mb-5 " + styles.jawllat_policy_Text}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className={"mb-5 " + styles.jawllat_policy_form}>
                <h1 className="mb-3">نتائج عن {q}</h1>
                {searchResults.concat(searchResultItems).length == 0 ? (
                  <>
                    <p>
                      آسف ، ولكن لا شيء يطابق شروط البحث الخاصة بك. أرجو
                      المحاولة مرة أخرى بإستخدام كلمات أخرى.
                    </p>
                    <form method="get" action="/search">
                      <div className="mt-4">
                        <input
                          type="search"
                          name="q"
                          placeholder="كلمات البحث…."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className={styles.jwalatt_form_group}
                        />
                      </div>
                      <div className="mt-4">
                        <input type="submit" value="بحث" />
                      </div>
                    </form>
                  </>
                ) : (
                  <p>لقد وجدنا {total} نتيجة لبحثك.</p>
                )}
              </div>

              {searchResults.concat(searchResultItems).length > 0 && (
                <div className={styles.jawllat_search_cnt}>
                  <InfiniteScroll
                    className="row"
                    pageStart={0}
                    loadMore={loadMoreResults}
                    hasMore={
                      searchResults.concat(searchResultItems).length < total
                    }
                    loader={
                      <div className="loader" key={0}>
                        جارى التحميل ...
                      </div>
                    }
                    threshold={500}
                  >
                    {searchResults
                      .concat(searchResultItems)
                      .map((item, index) => (
                        <div key={item?.id} className="col-6 col-sm-4 col-lg-3">
                          <NewsMediaCardLarge item={item} />
                        </div>
                      ))}
                  </InfiniteScroll>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Search;
