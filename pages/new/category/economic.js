import RedCaret from "@/components/v2/RedCaret";
import Header from "@/partials/v2/Header";
import Sidebar from "@/partials/v2/Sidebar";
import NewsItem from "@/components/v2/NewsItem";

const Economic = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row jawlatt-bnr-top">
          <div className="col-md-9 jawlatt-bnr-top-mid jawlatt-bnr-top-rt">
            <div className="jawlatt-single-news pt-3">
              <h3 className="m-0 fw-bold text-dark jawlatt-border-bottom">
                <RedCaret />
                اقتصاد
              </h3>
            </div>
            <div className="jawlatt-single-news mt-3">
              <button
                className="border-0 text-white"
                style={{
                  backgroundColor: "#EBAD12",
                  borderRadius: 6,
                  padding: "5px 12px",
                }}
              >
                <img
                  src="/images/Vector (18.1).png"
                  alt=""
                  style={{ width: "22.5px" }}
                />{" "}
                الصرف أسعار{" "}
              </button>
              <button
                className="border-0 text-white"
                style={{
                  backgroundColor: "#4DB22C",
                  borderRadius: 6,
                  padding: "5px 12px",
                }}
              >
                <img
                  src="/images/Vector (4.1).png"
                  alt=""
                  srcSet=""
                  style={{ width: "22.5px" }}
                />
                أسعارالذهب{" "}
              </button>
            </div>
            <div className="row jawlatt-right-image-left-text my-5">
              <div className="col-md-12 px-0 ">
                <h4 style={{ fontSize: 14 }} className="py-2">
                  متوسط أسعار السوق بالجنيه المصرى 17 يوليو 2024
                </h4>
                <table className="table ">
                  <thead className=" text-white jawlatt-table-title ">
                    <tr>
                      <th scope="col ">العملة</th>
                      <th scope="col">دولار</th>
                      <th scope="col">بيع</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="jawlatt-table-heading">
                      <td>أمريكي دولار</td>
                      <td>48.1706</td>
                      <td>48.2706</td>
                    </tr>
                    <tr className="table-secondary  jawlatt-table-heading">
                      <td>يورو</td>
                      <td>52.6890</td>
                      <td>52.8177</td>
                    </tr>
                    <tr className="jawlatt-table-heading">
                      <td>إسترلينيجنيه</td>
                      <td>62.8096</td>
                      <td>62.9593</td>
                    </tr>
                    <tr className="table-secondary jawlatt-table-heading">
                      <td>فرنك سويسرى</td>
                      <td>54.2706</td>
                      <td>54.4078</td>
                    </tr>
                    <tr className="jawlatt-table-heading">
                      <td>100 ين ياباني</td>
                      <td>30.7622</td>
                      <td>30.8281</td>
                    </tr>
                    <tr className="table-secondary jawlatt-table-heading">
                      <td>سعودی ریال</td>
                      <td>12.8424</td>
                      <td>12.8698</td>
                    </tr>
                    <tr className="jawlatt-table-heading">
                      <td>كويتي دينار</td>
                      <td>158.0621</td>
                      <td>158.0621</td>
                    </tr>
                    <tr className="table-secondary jawlatt-table-heading">
                      <td>درهم اماراتی</td>
                      <td>157.6314</td>
                      <td>13.1424</td>
                    </tr>
                    <tr className="jawlatt-table-heading">
                      <td>الصيني اليوان</td>
                      <td>13.1144</td>
                      <td>6.6507</td>
                    </tr>
                  </tbody>
                </table>
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
                          src="/images/hospital-img.png"
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
                          src="/images/radio-img.png"
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
                          src="/images/bedroom-img1.png"
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
                          src="/images/Ac-img.png"
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
            <div className="card mb-3 mt-5 jawlatt-card-border">
              <div className="card-header pb-0">
                <h5 className="card-title text-end mb-0" dir="ltr">
                  أخبار مصر
                  <i className="fa-solid fa-caret-left ml-4 jawlatt-text-red"></i>
                </h5>
              </div>
              <div className="card-body px-3 ">
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
                            src="/images/Group 1197.png"
                            alt=""
                          />
                          اليوم السابع
                        </p>
                        <div className="plus">
                          <img
                            src="/images/Group 1304.png"
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
                            src="/images/Group 1198.png"
                            alt=""
                          />
                          سكاي نيوز عربية
                        </p>
                        <div className="plus">
                          <img
                            src="/images/Group 1304.png"
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
                            src="/images/Group 1205.png"
                            alt=""
                          />
                          مصراوي
                        </p>
                        <div className="plus">
                          <img
                            src="/images/Group 1304.png"
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
                            src="/images/Group 1206.png"
                            alt=""
                          />
                          الجزيرة
                        </p>
                        <div className="plus">
                          <img
                            src="/images/Group 1304.png"
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
                            src="/images/Group 1207.png"
                            alt=""
                          />
                          المصري اليوم
                        </p>
                        <div className="plus">
                          <img
                            src="/images/Group 1304.png"
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
                            src="/images/Group 1208.png"
                            alt=""
                          />
                          سكاي نيوز عربية
                        </p>
                        <div className="plus">
                          <img
                            src="/images/Group 1304.png"
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
                            src="/images/Group 1209.png"
                            alt=""
                          />
                          الحدث اليوم
                        </p>
                        <div className="plus">
                          <img
                            src="/images/Group 1304.png"
                            alt=""
                            style={{ width: 20 }}
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="detail-btn mt-2 text-center">
                  <button
                    className="border-0 text-white jawlatt-bg-red jawlatt-card-text"
                    style={{ borderRadius: 3, padding: "0px 5px" }}
                  >
                    {" "}
                    المزيد
                  </button>
                </div>
              </div>
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

export default Economic;
