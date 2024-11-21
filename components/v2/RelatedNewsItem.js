import SocialIconOne from "./icons/socialIcon1";
import SocialIconTwo from "./icons/socialIcon2";
import SocialIconThree from "./icons/socialIcon3";
import moment from "moment";

const RelatedNewsItem = ({ containerClassName, data }) => {
  return (
    <div className={containerClassName}>
      <div className="card rounded-3">
        <div className="card-body p-3">
          <h5
            className="fw-medium text-dark news-title"
            style={{ fontSize: "14", lineHeight: "19.9px" }}
          >
            {data?.news_title}
          </h5>
          <div className="jawlatt-mid-grey-card-content d-flex justify-content-between align-items-center mt-2">
            <div className="card-text d-flex align-items-center gap-1">
              <img
                src={data?.news_image}
                alt="Al Jazeera Logo"
                width="28px"
                height="28px"
                className="rounded-circle"
              />
              <p
                className="fw-bold text-dark m-0"
                style={{ fontSize: "8.58px", lineHeight: "10.29px" }}
              >
                {data?.news_source}
                <br />
                <span className="text-end fw-semibold jawlatt-span-text ">
                  {data?.created_at
                    ? moment(data?.created_at).fromNow()
                    : "N/A"}
                </span>
              </p>
            </div>
            <ul className="d-flex p-0 gap-3 list-unstyled m-0 jawlatt-social-icon">
              {/* <li>
                <a href="#" className="text-dark">
                  <SocialIconThree />
                </a>
              </li> */}
              <li>
                <a href="#" className="text-dark">
                  <SocialIconTwo />
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  <SocialIconOne />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RelatedNewsItem;
