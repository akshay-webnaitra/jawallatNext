import JawlattLink from "../JawlattLink";
import Plus from "../../assets/images/subscribePlus.png";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { getSourcesSuccess, subscribeSources } from "@/slices/sources";
import { useEffect, useState } from "react";
const NewsSourceCard = ({ sources }) => {
  const [showAll, setShowAll] = useState(false);
  const session = useSession();
  const dispatch = useDispatch();
  const handleSubscribe = (id) => {
    const source_id = id;
    const user_id = session?.data?.user?.id || null;
    if (user_id) {
      dispatch(subscribeSources(user_id, source_id));
      dispatch(
        getSourcesSuccess(
          sources.map((source) =>
            source.id === source_id
              ? {
                  ...source,
                  subscribe: source.subscribe === "true" ? "false" : "true",
                }
              : source
          )
        )
      );
    }
  };

  const displayedSources = showAll ? sources : sources?.slice(0, 7);
  const handleShowMore = () => {
    setShowAll((prev) => !prev);
  };

  useEffect(() => {
    if (sources) {
      dispatch(getSourcesSuccess(sources));
    }
  }, [dispatch, sources]);

  return (
    <>
      <div className="card mb-3 jawlatt-card-border rounded-4">
        <div className="card-header py-3 pb-0">
          <h5 className="card-title fw-bold text-end mb-0" dir="ltr">
            أخبار مصر
            <i className="fa-solid fa-caret-left ms-2  jawlatt-text-red" />
          </h5>
        </div>
        <div className="card-body p-3">
          <ul className="list-group ">
            {Array.isArray(displayedSources) &&
              displayedSources?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="list-group-item py-2 px-0 border-0"
                  >
                    <div className="d-flex gap-2 align-items-center justify-content-between w-100 ">
                      <JawlattLink
                        className="d-flex text-decoration-none"
                        href={`/source/${item?.name}`}
                      >
                        <p
                          className="m-0 fw-bold text-start"
                          style={{ fontSize: "15px", cursor: "pointer" }}
                        >
                          <img
                            style={{
                              width: 20,
                              height: 20,
                              marginLeft: 6,
                            }}
                            src={item?.image}
                            className="rounded-circle"
                          />
                          {item?.name}
                        </p>
                      </JawlattLink>
                      {item?.subscribe === "true" ? (
                        <span
                          className="minus"
                          onClick={() => handleSubscribe(item?.id)}
                        >
                          -
                        </span>
                      ) : (
                        <div className="plus">
                          <img
                            src={Plus.src}
                            onClick={() => handleSubscribe(item?.id)}
                            alt="img"
                            style={{ width: 20, cursor: "pointer" }}
                          />
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="detail-btn mb-3  text-center">
          <button
            className="text-white px-3 border-0 jawlatt-bg-red jawlatt-detail-btn-border fw-medium"
            onClick={handleShowMore}
          >
            {showAll ? "إخفاء" : "المزيد"}
          </button>
        </div>
      </div>
    </>
  );
};
export default NewsSourceCard;
