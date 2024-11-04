import NewsItem from "@/components/v2/NewsItem";
import RedCaret from "@/components/v2/RedCaret";
import Header from "@/partials/v2/Header";
import Sidebar from "@/partials/v2/Sidebar";

const Search = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row jawlatt-bnr-top">
          <div className="col-md-9 jawlatt-bnr-top-mid jawlatt-bnr-top-rt">
            <div className="jawlatt-single-news pt-3">
              <h3 className="m-0 fw-bold text-dark jawlatt-news-small-title">
                <RedCaret />
                اقتصاد
              </h3>
              <p>نتائج البحث عن “الخبز السياحي في مصر”</p>
            </div>

            <NewsItem />
            <NewsItem />
            <NewsItem />

            <div className="jawlatt-news-image">
              <img src="/images/news-bg.png" alt="news" className="w-100" />
            </div>
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />

            <NewsItem />
            <div className="row">
              <div className="col-md-12 py-5 px-0">
                <div className="jawlatt-news-image">
                  <a href="#">
                    {" "}
                    <img
                      src="/images/Screenshot 2024-04-20 at 4.17 3.png"
                      alt="news"
                      className="w-100"
                    />
                  </a>
                </div>
              </div>
            </div>

            <NewsItem />
            <NewsItem />
            <NewsItem />

            <div className="row">
              <div className="col-md-12 text-center p-5">
                <img src="/images/Vector (2).png" alt="" />
              </div>
            </div>
          </div>

          <Sidebar>
            <div className="jawlatt-news-image mt-5">
              <img src="/images/product-img.png" alt="news" className="w-100" />
            </div>
            <div className="jawlatt-news-image">
              <img
                src="/images/Screenshot 2024-04-20 at 3.19 1.png"
                alt="news"
                className="w-100"
              />
            </div>
          </Sidebar>
        </div>
      </div>
    </>
  );
};

export default Search;
