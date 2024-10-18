import RedCaret from "@/components/v2/RedCaret";
import Header from "@/partials/v2/Header";
import NewsItem from "@/components/v2/NewsItem";
import CategorySlider from "@/components/v2/CategorySlider";

const Category = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="jawlatt-single-news pt-3">
          <h3 className="text-dark fw-bold m-0 jawlatt-news-small-title">
            <RedCaret />| اقتصاد
          </h3>
        </div>
        <CategorySlider />

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
            <NewsItem />
          </div>
          <div className="col-md-3 jawlatt-bnr-top-lt">
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
            <div className="jawlatt-news-image my-5">
              <div className="row jawlatt-bg-light">
                <div className="col-8">
                  <h4 className="pt-2 fw-bold jawlatt-fs-1531">تطبيق عربي</h4>
                  <p className="jawlatt-fs-945">
                    حمل التطبيق الآن وتمتع بميزات عديدة
                  </p>
                  <a href="#" className="ms-1">
                    <img src="./images/App Store.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="./images/App Store (1).png" alt="" />
                  </a>
                </div>
                <div className="col-4 ">
                  <img
                    src="/images/image 1 (4).png"
                    alt=""
                    style={{ width: 120 }}
                    className="img-fluid "
                  />
                </div>
              </div>
            </div>
            <div className="jawlatt-news-image mt-5">
              <div className="jawlatt-social-link">
                <a href="#" className="text-dark">
                  <i className="fa-brands fa-tiktok " />
                </a>
                <a href="#" className="text-dark">
                  <i className="fa-brands fa-youtube " />
                </a>
                <a href="#" className="text-dark">
                  <i className="fa-brands fa-instagram " />
                </a>
                <a href="#" className="text-dark">
                  <i className="fa-brands fa-facebook-f " />
                </a>
                <a href="#" className="text-dark">
                  <i className="fa-brands fa-x-twitter " />
                </a>
              </div>
              <p className="pt-4 text-center">
                الشروط وسياسة الخصوصية لوحة معلومات الخصوصية يعلن حول إعلاناتنا
                وظائفي © 2024 خبر الإخبارية. كل الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Slick JS */}
    </>
  );
};

export default Category;
