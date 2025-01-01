import { useEffect, useState } from "react";
import RelatedNewsItem from "@/components/v2/RelatedNewsItem";
import SocialIconOne from "./icons/socialIcon1";
import SocialIconThree from "./icons/socialIcon3";
import SocialIconTwo from "./icons/socialIcon2";
import moment from "moment";
import "moment/locale/ar";
import PostLink from "../PostLink";
const NewsItem = ({ item, addFavourite, marked, shareNews }) => {
  const [relatedNewsOpen, setRelatedNewsOpen] = useState(false);
  const [status, setStatus] = useState(false);
  return (
    <>
      <div className="arab24-newsItem-card jawlatt-right-image-left-text my-4">
        <div className="card border-0">
          <div className="d-flex flex-column flex-sm-row gap-4 gap-md-0">
            {/* right side */}
            <div className="arab24-newsItem-card-img">
              <PostLink item={item}>
                <img src={item?.news_image_url} className="border" alt="news" />
              </PostLink>
            </div>
            {/* left side */}
            <div className="card-body p-0">
              <div className="d-flex gap-2 align-items-center">
                <a className="d-block text-decoration-none" href="#">
                  <p className="m-0 text-end fw-semibold jawlatt-news-source">
                    <img src="/images/sky-news-round.png" className="ms-2" />
                    {item?.news_site}
                  </p>
                </a>
                <button
                  className={`btn  ${
                    status ? "bg-dark" : "btn-danger"
                  } text-white fw-semibold`}
                  href="# "
                  style={{ fontSize: "11.71px", padding: "4px 10px" }}
                  onClick={() => setStatus(!status)}
                >
                  {status ? "تمت المتابعة" : "+ متابعة"}
                </button>
              </div>
              <h2 className="card-title fw-bolder mt-2   mt-sm-3 fs-6">
                <PostLink item={item}>{item?.news_title}</PostLink>
              </h2>
              <div className="d-flex gap-3 flex-row-reverse justify-content-end mt-sm-4">
                <ul className="d-flex p-0 list-unstyled jawlatt-social-icon">
                  <li>
                    <button onClick={shareNews} className="text-dark">
                      <SocialIconThree />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => addFavourite(item)}
                      className="border-0 btn p-0 text-dark"
                    >
                      {marked ? "Fav" : <SocialIconTwo />}
                    </button>
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
                <p className="jawlatt-time-text">
                  {item?.created_at
                    ? moment(item?.created_at).fromNow()
                    : "N/A"}
                </p>
                <ul className="p-0 me-3">
                  <li
                    style={{
                      listStyleType: "disc",
                      color: item?.category?.cat_color,
                    }}
                  >
                    <a
                      className={`text-decoration-none fw-semibold text-end`}
                      style={{ color: item?.category?.cat_color }}
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
      {relatedNewsOpen ? (
        <div className="jawlatt-mid-grey-cards mb-3">
          {item?.related_news ? (
            <div className="row g-2">
              {item?.related_news?.slice(0, 3).map((res) => (
                <RelatedNewsItem
                  key={res?.id}
                  data={res}
                  containerClassName="col-sm-6 col-lg-4"
                />
              ))}
            </div>
          ) : (
            <p>No Data</p>
          )}
        </div>
      ) : null}
    </>
  );
};

export default NewsItem;
