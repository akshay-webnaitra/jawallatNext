const CountryNewsCard = ({ item }) => {
  return (
    <>
      <div className="card mb-3 jawlatt-card-border rounded-4">
        <div className="card-header py-3 pb-0">
          <h5 className="card-title fw-bold text-end mb-0" dir="ltr">
            أخبار مصر
            <i className="fa-solid fa-caret-left ms-2  jawlatt-text-red" />
          </h5>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {Array.isArray(item) &&
              item?.map((res, index) => (
                <li
                  key={index}
                  className="list-group-item pr-0"
                  style={{
                    borderBottom:
                      index === item.length - 1
                        ? "none"
                        : "1.1px solid hsl(0deg 0% 0% / 11%)",
                  }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <div className="d-block text-decoration-none" href="#">
                      <p className="m-0 fw-bold text-start jawlatt-card-fs">
                        <img
                          style={{ width: 20 }}
                          src={res?.news_source_icon}
                          alt="img"
                          className="ms-1 border rounded-circle"
                        />
                        {res?.news_source}
                      </p>
                    </div>
                    <ul className="p-0 jawlatt-card-body-badge">
                      <li
                        style={{
                          listStyleType: "disc",
                          color: res?.category?.cat_color,
                        }}
                      >
                        <span
                          href="#"
                          style={{
                            color: res?.category?.cat_color,
                            fontSize: 13,
                          }}
                        >
                          {res?.category?.cat_name || "no data"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <p
                    href="#"
                    style={{ fontSize: 15 }}
                    className="text-decoration-none fw-semibold"
                  >
                    {res?.news_title}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default CountryNewsCard;
