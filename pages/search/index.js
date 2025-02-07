import Sidebar from "@/partials/v2/Sidebar";
import NewsItem from "@/components/v2/NewsItem";
import MainLayout from "layout/mainLayout";
import NewsAdd from "assets/images/news-ad.png";
import RedCaret from "@/components/v2/RedCaret";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchSearch, searchSelector } from "@/slices/search";
import GoogleAds from "@/components/GoogleAds";
import { useMediaQuery } from "react-responsive";
import InfiniteScroll from "react-infinite-scroller";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
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
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const Search = () => {
  const router = useRouter();
  const { searchResults, currentPage, total, lastPage } =
    useSelector(searchSelector);
  const [nextPage, setNextPage] = useState(2);
  const { q, category, source, type } = router.query;
  const [searchResultItems, setSearchResultItems] = useState([]);
  const dispatch = useDispatch();
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);
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

  const takeAndSkip = (array, skip, n) => {
    let skippedArray = array.slice(skip - 1, skip + n);
    return skippedArray;
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row g-3 mt-5 flex-column-reverse flex-md-row">
            {/* right side */}
            <div className="col-md-9">
              <div className="ps-md-5">
                <div className="pb-3">
                  <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
                    <RedCaret />
                    نتائج البحث
                  </h3>
                  <p className="fs-20 m-0">
                    نتائج البحث عن “الخبز السياحي في مصر”
                  </p>
                </div>
                <div>
                  {Array.isArray(searchResults) &&
                    searchResults
                      ?.slice(0, 4)
                      ?.map((item) => <NewsItem key={item?.id} item={item} />)}
                  <div className="jawlatt-news-image">
                    <img
                      src="/images/news-bg.png"
                      alt="news"
                      className="w-100"
                    />
                  </div>
                  {Array.isArray(searchResults) &&
                    searchResults
                      ?.slice(4, 8)
                      ?.map((item) => <NewsItem key={item?.id} item={item} />)}

                  <div
                    className={"wrapper wrapper-sm p-2 mb-1 mt-0 text-center"}
                  >
                    {!isMobile ? (
                      <GoogleAds
                        id="div-gpt-ad-1686734411945-0"
                        slot="/29958771/New_Jaw_Leader_Desktop_02"
                        width={728}
                        height={90}
                      />
                    ) : (
                      <GoogleAds
                        id="div-gpt-ad-1686734836746-0"
                        slot="/29958771/New_Jaw_Leader_Mobile_02"
                        width={320}
                        height={100}
                      />
                    )}
                  </div>
                  {Array.isArray(searchResults) &&
                    searchResults
                      ?.slice(8, 11)
                      ?.map((item) => <NewsItem key={item?.id} item={item} />)}
                </div>
                <div className="container wrapper mb-3 mb-lg-1">
                  <div className="section-block">
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
                          <NewsItem key={item?.id} item={item} />
                        ))}
                    </InfiniteScroll>
                  </div>
                </div>
              </div>
            </div>
            {/* left side */}
            <div className="col-md-3 jawlatt-bnr-top-lt">
              <div className="left-side">
                <div className="full-img mb-0 mb-lg-3">
                  {isMobile ? (
                    <div
                      className={
                        "wrapper wrapper-sm p-2 mb-1 mb-lg-5 text-center "
                        // + styles.jawallat_ads_section
                      }
                    >
                      <GoogleAds
                        id="div-gpt-ad-1686735176139-0"
                        slot="/29958771/New_Jaw_MPU_Mobile_01"
                        width={300}
                        height={250}
                      />
                    </div>
                  ) : (
                    <GoogleAds
                      id="div-gpt-ad-1686735042414-0"
                      slot="/29958771/New_Jaw_MPU_Desktop_01"
                      width={300}
                      height={250}
                    />
                  )}
                </div>
                <div className="full-img mb-0 mb-lg-3">
                  {isMobile ? (
                    <div
                      className={
                        "wrapper wrapper-sm p-2 mb-1 mb-lg-5 text-center "
                        // + styles.jawallat_ads_section
                      }
                    >
                      <GoogleAds
                        id="div-gpt-ad-1686735196963-0"
                        slot="/29958771/New_Jaw_MPU_Mobile_01"
                        width={300}
                        height={250}
                      />
                    </div>
                  ) : (
                    <GoogleAds
                      id="div-gpt-ad-1686735196963-0"
                      slot="/29958771/New_Jaw_MPU_Desktop_01"
                      width={300}
                      height={250}
                    />
                  )}
                </div>
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Search.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default Search;
