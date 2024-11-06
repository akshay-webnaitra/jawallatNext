import { useEffect, useState } from "react";
import RelatedNewsItem from "@/components/v2/RelatedNewsItem";
import SocialIconOne from "./icons/socialIcon1";
import SocialIconThree from "./icons/socialIcon3";
import SocialIconTwo from "./icons/socialIcon2";

const NewsItem = ({ green }) => {
  const [relatedNewsOpen, setRelatedNewsOpen] = useState(false);

  return (
    <>
      <div className="arab24-newsItem-card jawlatt-right-image-left-text my-4">
        <div className="card border-0">
          <div className="d-flex flex-column flex-sm-row gap-4 gap-md-0">
            {/* right side */}
            <div className="arab24-newsItem-card-img">
              <img src="/images/newsImage.png" className="" alt="news" />
            </div>
            {/* left side */}
            <div className="card-body p-0">
              <div className="d-flex gap-2 align-items-center">
                <a className="d-block text-decoration-none" href="#">
                  <p className="m-0 text-end fw-semibold jawlatt-news-source">
                    <img src="/images/sky-news-round.png" className="ms-2" />
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
              <h2 className="card-title fw-bolder mt-2 mt-sm-3 fs-6">
                وزير الخارجية يلتقي مستشارة الرئيس الفرنسي لشؤون الشرق الأوسط -
                ضمن سلسلة من اللقاءات الدولية لتعزيز العلاقات
              </h2>
              <div className="d-flex gap-3 flex-row-reverse justify-content-end mt-sm-4">
                <ul className="d-flex p-0 list-unstyled jawlatt-social-icon">
                  <li>
                    <a href="#" className="text-dark">
                      <SocialIconThree />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark">
                      <SocialIconTwo />
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
                      <SocialIconOne />
                    </a>
                  </li>
                </ul>
                <p className="jawlatt-time-text">قبل 6 ساعات</p>
                <ul className="p-0 me-3" style={{ listStyleType: "disc" }}>
                  <li className={green ? "dot2" : "dot"}>
                    <a
                      className={`text-decoration-none fw-semibold text-end ${
                        green ? " arab24-green" : "jawlatt-list-color"
                      } `}
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
      {relatedNewsOpen ? (
        <div className="jawlatt-mid-grey-cards mb-3">
          <div className="row g-2">
            <RelatedNewsItem containerClassName="col-sm-6 col-lg-4" />
            <RelatedNewsItem containerClassName="col-sm-6 col-lg-4" />
            <RelatedNewsItem containerClassName="col-sm-6 col-lg-4" />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NewsItem;
