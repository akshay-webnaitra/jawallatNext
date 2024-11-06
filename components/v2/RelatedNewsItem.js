const RelatedNewsItem = ({ containerClassName }) => {
  return (
    <div className={containerClassName}>
      <div className="card">
        <div className="card-body p-3">
          <h5
            className="fw-medium text-dark"
            style={{ fontSize: "14", lineHeight: "19.9px" }}
          >
            يرى ترامب أخيرًا عواقب فمه الكبير في محاكمة الصمت بشأن الأموال.....
          </h5>
          <div className="jawlatt-mid-grey-card-content d-flex justify-content-between align-items-center mt-2">
            <div className="card-text d-flex align-items-center gap-1">
              <img
                src="/images/sadaElBada.png"
                alt="Al Jazeera Logo"
                width="28px"
                height="28px"
              />
              <p
                className="fw-bold text-dark m-0"
                style={{ fontSize: "8.58px", lineHeight: "10.29px" }}
              >
                البلاد
                <br />
                <span className="text-end fw-semibold jawlatt-span-text ">
                  منذ ٣٧ ثانية.
                </span>
              </p>
            </div>
            <ul className="d-flex p-0 list-unstyled m-0 jawlatt-social-icon">
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
              {/* <li>
                <a href="#" className="text-dark">
                  <i className="fa-solid fa-book" />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RelatedNewsItem;
