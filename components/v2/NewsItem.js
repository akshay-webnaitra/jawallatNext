import { useEffect, useState } from "react";
import RelatedNewsItem from "@/components/v2/RelatedNewsItem";

const NewsItem = () => {
  const [relatedNewsOpen, setRelatedNewsOpen] = useState(false);

  return (
    <>
      <div className="row jawlatt-right-image-left-text my-5">
        <div className="col-md-12">
          <div className="card mb-3 border-0">
            <div className="row g-0">
              <div className="col-md-2">
                <img
                  src="/images/newsImage.png"
                  className="img-fluid rounded-start"
                  alt="news"
                />
              </div>
              <div className="col-md-10">
                <div className="card-body p-0">
                  <div className="d-flex gap-2 align-items-center">
                    <a className="d-block text-decoration-none" href="#">
                      <p className="m-0 text-end fw-semibold jawlatt-news-source">
                        {/*** get public path to the below image from /public/images folder */}
                        <img
                          src="/images/sky-news-round.png"
                          className="ms-2"
                        />
                        سكاي نيوز عربية
                      </p>
                    </a>
                    <a
                      className="jawlatt-hdr-lt-btn text-decoration-none text-white bg-dark fw-semibold"
                      href="# "
                      style={{ fontSize: "11.71px", padding: "4px 10px" }}
                    >
                      تمت المتابعة
                    </a>
                  </div>
                  <h2 className="card-title fw-bolder mt-2 fs-6">
                    وزير الخارجية يلتقي مستشارة الرئيس الفرنسي لشؤون الشرق
                    الأوسط - ضمن سلسلة من اللقاءات الدولية لتعزيز العلاقات
                  </h2>
                  <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end jawlatt-gap-margin">
                    <ul className="d-flex p-0 list-unstyled jawlatt-social-icon">
                      <li>
                        <a href="#" className="text-dark">
                          <i className="fa-solid fa-share" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-dark">
                          <i className="fa-solid fa-bookmark" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setRelatedNewsOpen(!relatedNewsOpen);
                          }}
                          className="text-dark"
                        >
                          <i className="fa-solid fa-book" />
                        </a>
                      </li>
                    </ul>
                    <p className="jawlatt-time-text">قبل 6 ساعات</p>
                    <ul className="p-0 me-3" style={{ listStyleType: "disc" }}>
                      <li>
                        <a
                          className="text-decoration-none fw-semibold text-end jawlatt-list-color"
                          href="#"
                        >
                          سياسة
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {relatedNewsOpen ? (
        <div className="jawlatt-mid-grey-cards">
          <div className="row">
            <RelatedNewsItem containerClassName="col-md-4" />
            <RelatedNewsItem containerClassName="col-md-4" />
            <RelatedNewsItem containerClassName="col-md-4" />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NewsItem;
