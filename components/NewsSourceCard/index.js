import JawlattLink from "../JawlattLink";
import Plus from "../../assets/images/subscribePlus.png";
const NewsSourceCard = ({ sources }) => {
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
            {Array.isArray(sources) &&
              sources?.slice(0, 7).map((item, index) => (
                <li key={index} className="list-group-item py-2 px-0 border-0">
                  <div className="d-flex gap-2 align-items-center justify-content-between w-100 ">
                    <JawlattLink
                      className="d-flex text-decoration-none"
                      href={`/new/source/${item?.name}`}
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
                    <div className="plus">
                      <img src={Plus.src} alt="img" style={{ width: 20 }} />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="detail-btn mb-3  text-center">
          <button className="text-white px-3  border-0 jawlatt-bg-red jawlatt-detail-btn-border fw-medium">
            المزيد
          </button>
        </div>
      </div>
    </>
  );
};
export default NewsSourceCard;
