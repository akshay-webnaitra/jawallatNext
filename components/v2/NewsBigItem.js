import { useEffect, useState } from "react";
import RelatedNewsBigItem from "@/components/v2/RelatedNewsBigItem";
import moment from "moment";
import "moment/locale/ar";
const NewsBigItem = ({ item }) => {
  moment.locale("ar");
  const [relatedNewsOpen, setRelatedNewsOpen] = useState(false);

  return (
    <>
      <div className="arab24-right-content my-4">
        <div className="">
          <div className="card mb-3 border-0">
            <div className="row g-4">
              <div className="col-md-5">
                <div className="arab24-right-image">
                  <img
                    src={item?.news_image_url}
                    className="img-fluid rounded-3"
                    alt="news"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="card-body p-0">
                  <div className="d-flex gap-2 align-items-center">
                    <a className="d-block text-decoration-none" href="#">
                      <img src="/images/sky-news-round.png" className="ms-2" />
                    </a>
                    <a
                      className="fw-medium text-black"
                      href="# "
                      style={{ fontSize: "14px", padding: "4px 10px" }}
                    >
                      {item?.news_site}
                    </a>
                    <a
                      className="jawlatt-hdr-lt-btn fw-normal text-white px-3"
                      href="# "
                      style={{ fontSize: "12px", padding: "4px 10px" }}
                    >
                      متابعة
                    </a>
                  </div>
                  <h2 className="card-title fw-bolder mt-2">
                    {item?.news_title}
                  </h2>
                  <p>{item?.news_excerpt}</p>
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
                    <p className="jawlatt-time-text">
                      {item?.created_at
                        ? moment(item?.created_at).fromNow()
                        : "N/A"}
                    </p>
                    <ul
                      className="p-0 me-3 status"
                      style={{ listStyleType: "disc" }}
                    >
                      <li>
                        <a
                          className="fw-semibold text-end jawlatt-list-color"
                          href="#"
                        >
                          {item?.category?.cat_name}
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
        <div className="row">
          {[...Array(6)].map(() => (
            <>
              <RelatedNewsBigItem containerClassName="col-sm-6 col-md-4 col-lg-3 col-xl-2" />
            </>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default NewsBigItem;
