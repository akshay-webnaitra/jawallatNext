import NewsItem from "@/components/v2/NewsItem";
import Header from "@/partials/v2/Header";
import Sidebar from "@/partials/v2/Sidebar";

const Favorite = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row jawlatt-bnr-top">
          <div className="col-md-9 jawlatt-bnr-top-mid jawlatt-bnr-top-rt">
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
            <NewsItem />
            <NewsItem />
            <NewsItem />
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

export default Favorite;
