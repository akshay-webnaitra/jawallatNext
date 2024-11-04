import NewsBigItem from "@/components/v2/NewsBigItem";
import NewsItem from "@/components/v2/NewsItem";
import RedCaret from "@/components/v2/RedCaret";
import Header from "@/partials/v2/Header";
import Sidebar from "@/partials/v2/Sidebar";

const Home = () => (
  <>
    <Header />
    <div className="container">
      <div className="row jawlatt-bnr-top">
        <div className="col-md-9 jawlatt-bnr-top-mid jawlatt-bnr-top-rt">
          <NewsBigItem />
          <div className="jawlatt-single-news pt-3 px-0">
            <h3 className="fw-bold m-0 text-dark jawlatt-border-bottom">
              <RedCaret />
              موضوعات تهمك
            </h3>
          </div>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <div className="jawlatt-news-image">
            <img src="images/news-bg.png" alt="news" className="w-100" />
          </div>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <div className="row">
            <div
              className="col-md-12 py-5 px-0"
              style={{ backgroundColor: "#F6F8F8", borderRadius: 8 }}
            >
              <div className="jawlatt-single-news pt-3">
                <h3 className="text-dark fw-bold m-0 jawlatt-news-small-title">
                  <RedCaret />
                  موضوعات تهمك
                </h3>
              </div>
              <div className="jawlatt-news-image">
                <div className="row">
                  <div className="col-md-3">
                    <div className="card1 pb-4 bg-white">
                      <img
                        src="./images/hospital-img.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="jawlatt-card1-heading px-2">
                        <h4 className="mt-2 px-1 jawlatt-right-border">
                          إعلان
                        </h4>
                        <p>أسرة ذكية بأسعار مذهلة في مصر - لا تفوت الفرصة</p>
                        <a
                          href="#"
                          className="text-decoration-none jawlatt-time-text "
                        >
                          {" "}
                          ذكية بأسعار
                        </a>{" "}
                        <button className="btn border me-4">ابحث الآن</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card1 pb-4 bg-white">
                      <img
                        src="./images/radio-img.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="jawlatt-card1-heading px-2">
                        <h4 className="mt-2 px-1 jawlatt-right-border">
                          إعلان
                        </h4>
                        <p>أسرة ذكية بأسعار مذهلة في مصر - لا تفوت الفرصة</p>
                        <a
                          href="#"
                          className="text-decoration-none  jawlatt-time-text"
                        >
                          {" "}
                          ذكية بأسعار
                        </a>{" "}
                        <button className="btn border me-4">ابحث الآن</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card1 pb-4 bg-white">
                      <img
                        src="./images/bedroom-img1.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="jawlatt-card1-heading px-2">
                        <h4 className="mt-2 px-1 jawlatt-right-border">
                          إعلان
                        </h4>
                        <p>أسرة ذكية بأسعار مذهلة في مصر - لا تفوت الفرصة</p>
                        <a
                          href="#"
                          className="text-decoration-none jawlatt-time-text "
                        >
                          {" "}
                          ذكية بأسعار
                        </a>{" "}
                        <button className="btn border me-4">ابحث الآن</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card1 pb-4 bg-white">
                      <img
                        src="./images/Ac-img.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="jawlatt-card1-heading px-2">
                        <h4 className="mt-2 px-1 jawlatt-right-border">
                          إعلان
                        </h4>
                        <p>أسرة ذكية بأسعار مذهلة في مصر - لا تفوت الفرصة</p>
                        <a
                          href="#"
                          className="text-decoration-none jawlatt-time-text "
                        >
                          {" "}
                          ذكية بأسعار
                        </a>{" "}
                        <button className="btn border me-4">ابحث الآن</button>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-start pt-3">للإعلان معنا</p>
              </div>
            </div>
          </div>
          <div className="jawlatt-single-news pt-3 px-0">
            <h3 className="fw-bold m-0 text-dark jawlatt-border-bottom">
              <RedCaret />
              موضوعات تهمك
            </h3>
          </div>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <div className="row">
            <div className="col-md-12 text-center p-5">
              <img src="/images/Vector (2).png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-3 jawlatt-bnr-top-lt">
          <div className="card mb-3 jawlatt-card-border">
            <div className="card-header pb-0">
              <h5 className="card-title text-end mb-0" dir="ltr">
                أخبار مصر
                <i className="fa-solid fa-caret-left ml-4 jawlatt-text-red" />
              </h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item pr-0">
                  <div className="d-flex gap-2">
                    <a className="d-block text-decoration-none" href="#">
                      <p className="m-0 fw-bold text-start jawlatt-card-fs">
                        <img
                          style={{ width: 20 }}
                          src="images/sky-news.png"
                          alt=""
                        />
                        سكاي نيوز عربية
                      </p>
                    </a>
                    <ul className="p-0 jawlatt-card-body-badge">
                      <li>
                        <a href="#">رياضة</a>
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="text-decoration-none">
                    إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون موقف
                    مصر
                  </a>
                </li>
                <li className="list-group-item">
                  <div className="d-flex gap-2">
                    <a className="d-block text-decoration-none" href="#">
                      <p className="m-0 fw-bold text-start jawlatt-card-fs">
                        <img style={{ width: 20 }} src="images/sky-news.png" />
                        سكاي نيوز عربية
                      </p>
                    </a>
                    <ul className="p-0 jawlatt-card-body-badge">
                      <li>
                        <a href="#">رياضة</a>
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="text-decoration-none">
                    إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون موقف
                    مصر
                  </a>
                </li>
                <li className="list-group-item">
                  <div className="d-flex gap-2">
                    <a className="d-block text-decoration-none" href="#">
                      <p className="m-0 fw-bold text-start jawlatt-card-fs">
                        <img style={{ width: 20 }} src="images/sky-news.png" />
                        سكاي نيوز عربية
                      </p>
                    </a>
                    <ul className="p-0 jawlatt-card-body-badge">
                      <li>
                        <a href="#">رياضة</a>
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="text-decoration-none">
                    إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون موقف
                    مصر
                  </a>
                </li>
                <li className="list-group-item">
                  <div className="d-flex gap-2">
                    <a className="d-block text-decoration-none" href="#">
                      <p className="m-0 fw-bold text-start jawlatt-card-fs">
                        <img style={{ width: 20 }} src="images/sky-news.png" />
                        سكاي نيوز عربية
                      </p>
                    </a>
                    <ul className="p-0 jawlatt-card-body-badge">
                      <li>
                        <a href="#">رياضة</a>
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="text-decoration-none">
                    إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون موقف
                    مصر
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" mb-3">
            <img
              src="images/news-ad.png"
              className="card-img-top"
              alt="NewsAd"
            />
          </div>
          <Sidebar>
            <ul className="list-group mt-3">
              <li className="list-group-item pr-0 border-0">
                <div className="d-flex gap-2">
                  <a
                    className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                    href="#"
                  >
                    <p className="m-0 fw-bold text-start jawlatt-card-fs">
                      <img
                        style={{ width: 20, marginLeft: 6 }}
                        src="images/Group 1197.png"
                      />
                      اليوم السابع
                    </p>
                    <div className="plus">
                      <img
                        src="./images/Group 1304.png"
                        alt=""
                        style={{ width: 20 }}
                      />
                    </div>
                  </a>
                </div>
              </li>
              <li className="list-group-item pr-0 border-0">
                <div className="d-flex gap-2">
                  <a
                    className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                    href="#"
                  >
                    <p className="m-0 fw-bold text-start jawlatt-card-fs">
                      <img
                        style={{ width: 20, marginLeft: 6 }}
                        src="images/Group 1198.png"
                      />
                      سكاي نيوز عربية
                    </p>
                    <div className="plus">
                      <img
                        src="./images/Group 1304.png"
                        alt=""
                        style={{ width: 20 }}
                      />
                    </div>
                  </a>
                </div>
              </li>
              <li className="list-group-item pr-0 border-0">
                <div className="d-flex gap-2">
                  <a
                    className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                    href="#"
                  >
                    <p className="m-0 fw-bold text-start jawlatt-card-fs">
                      <img
                        style={{ width: 20, marginLeft: 6 }}
                        src="images/Group 1205.png"
                      />
                      مصراوي
                    </p>
                    <div className="plus">
                      <img
                        src="./images/Group 1304.png"
                        alt=""
                        style={{ width: 20 }}
                      />
                    </div>
                  </a>
                </div>
              </li>
              <li className="list-group-item pr-0 border-0">
                <div className="d-flex gap-2">
                  <a
                    className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                    href="#"
                  >
                    <p className="m-0 fw-bold text-start jawlatt-card-fs">
                      <img
                        style={{ width: 20, marginLeft: 6 }}
                        src="images/Group 1206.png"
                      />
                      الجزيرة
                    </p>
                    <div className="plus">
                      <img
                        src="./images/Group 1304.png"
                        alt=""
                        style={{ width: 20 }}
                      />
                    </div>
                  </a>
                </div>
              </li>
              <li className="list-group-item pr-0 border-0">
                <div className="d-flex gap-2">
                  <a
                    className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                    href="#"
                  >
                    <p className="m-0 fw-bold text-start jawlatt-card-fs">
                      <img
                        style={{ width: 20, marginLeft: 6 }}
                        src="images/Group 1207.png"
                      />
                      المصري اليوم
                    </p>
                    <div className="plus">
                      <img
                        src="./images/Group 1304.png"
                        alt=""
                        style={{ width: 20 }}
                      />
                    </div>
                  </a>
                </div>
              </li>
              <li className="list-group-item pr-0 border-0">
                <div className="d-flex gap-2">
                  <a
                    className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                    href="#"
                  >
                    <p className="m-0 fw-bold text-start jawlatt-card-fs">
                      <img
                        style={{ width: 20, marginLeft: 6 }}
                        src="images/Group 1208.png"
                      />
                      سكاي نيوز عربية
                    </p>
                    <div className="plus">
                      <img
                        src="./images/Group 1304.png"
                        alt=""
                        style={{ width: 20 }}
                      />
                    </div>
                  </a>
                </div>
              </li>
              <li className="list-group-item pr-0 border-0">
                <div className="d-flex gap-2">
                  <a
                    className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                    href="#"
                  >
                    <p className="m-0 fw-bold text-start jawlatt-card-fs">
                      <img
                        style={{ width: 20, marginLeft: 6 }}
                        src="images/Group 1209.png"
                      />
                      الحدث اليوم
                    </p>
                    <div className="plus">
                      <img
                        src="./images/Group 1304.png"
                        alt=""
                        style={{ width: 20 }}
                      />
                    </div>
                  </a>
                </div>
              </li>
            </ul>
            <div className="detail-btn mt-2  text-center">
              <button className="text-white border-0 jawlatt-bg-red jawlatt-detail-btn-border">
                المزيد
              </button>
            </div>
          </Sidebar>
        </div>
      </div>
    </div>
  </>
);

export default Home;
