import Header from "@/partials/v2/Header";
import Sidebar from "@/partials/v2/Sidebar";

const Video = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row jawlatt-bnr-top">
          <div className="col-md-9 ">
            <div className="card-body px-3">
              <div className="jawlatt-single-news py-3">
                <h3 className="mb-0 pb-2 text-dark fw-bold jawlatt-news-title">
                  <svg
                    width="13"
                    height="25"
                    viewBox="0 0 13 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 12.48L12.48 0V24.96L0 12.48Z"
                      fill="#EA5153"
                    ></path>
                  </svg>
                  فيديو
                </h3>
              </div>
              <div className="d-flex gap-3 align-items-center my-3">
                <button
                  type="button"
                  className="btn btn-light px-5"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Tooltip on top"
                >
                  كوميدي
                </button>
                <button
                  type="button"
                  className="btn btn-light px-5"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Tooltip on top"
                >
                  اخبار
                </button>
                <button
                  type="button"
                  className="btn btn-danger px-5"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Tooltip on top"
                >
                  رياضة
                </button>
                <button
                  type="button"
                  className="btn btn-light px-5"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Tooltip on top"
                >
                  اقتصاد
                </button>
                <button
                  type="button"
                  className="btn btn-light px-5"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Tooltip on right"
                >
                  إسلاميات
                </button>
                <button
                  type="button"
                  className="btn btn-light px-5"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Tooltip on bottom"
                >
                  سياحة
                </button>
                <button
                  type="button"
                  className="btn btn-light px-5"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Tooltip on left"
                >
                  صحة
                </button>
              </div>

              <h2 className="card-title fw-bolder">
                <a
                  href="#"
                  className="text-decoration-none text-dark fs-4 lh-sm mt-2"
                >
                  إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون <br />{" "}
                  موقف مصر
                </a>
              </h2>

              <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end mb-2">
                <ul className="d-flex p-0 list-unstyled mb-0 align-items-center jawlatt-social-icon">
                  <li>
                    <a
                      href="#"
                      className="text-decoration-none d-flex align-items-center jawlatt-primary-color"
                    >
                      <img
                        src="/images/Vector (4).png"
                        alt=""
                        className="jawlatt-icon-small"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-decoration-none d-flex align-items-center jawlatt-feedback"
                    >
                      12
                      <img
                        src="/images/Vector (3).png"
                        alt=""
                        className="jawlatt-icon-small me-1"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-decoration-none d-flex align-items-center jawlatt-feedback"
                    >
                      23
                      <img
                        src="/images/Vector (5).png"
                        alt=""
                        className="jawlatt-icon-small me-1"
                      />
                    </a>
                  </li>
                </ul>
                <p className="m-0 d-flex align-items-center text-end fw-semibold jawlatt-news-source">
                  <img
                    src="/images/sky-news-round.png"
                    alt=""
                    className="ms-2"
                  />{" "}
                  سكاي نيوز عربية
                </p>
              </div>

              <div className="row ps-5">
                <div className="col-md-12">
                  <a
                    href="https://www.youtube.com/watch?v=example4"
                    className="jawlatt-video-stop text-decoration-none"
                    target="_blank" rel="noreferrer"
                  >
                    <img
                      src="/images/Screenshot 2024-04-24 at 9.32 2.png"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="jawlatt-sop">
                      <img src="/images/video-stop.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>

              <div className="row ps-5">
                <div className="col-md-12">
                  <h2 className="card-title fw-bolder">
                    <a
                      href="#"
                      className="text-decoration-none text-dark fs-4 lh-sm mt-2"
                    >
                      وإسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون{" "}
                      <br /> موقف مصر{" "}
                    </a>
                  </h2>

                  <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end mb-2">
                    <ul className="d-flex p-0 list-unstyled mb-0 align-items-center jawlatt-social-icon">
                      <li>
                        <a
                          href="#"
                          className="text-decoration-none d-flex align-items-center jawlatt-primary-color"
                        >
                          <img
                            src="/images/Vector (4).png"
                            alt=""
                            className="jawlatt-icon-small"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-decoration-none d-flex align-items-center jawlatt-feedback"
                        >
                          12
                          <img
                            src="/images/Vector (3).png"
                            alt=""
                            className="jawlatt-icon-small me-1"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-decoration-none d-flex align-items-center jawlatt-feedback"
                        >
                          23
                          <img
                            src="/images/Vector (5).png"
                            alt=""
                            className="jawlatt-icon-small me-1"
                          />
                        </a>
                      </li>
                    </ul>
                    <p className="m-0 d-flex align-items-center fw-semibold text-end jawlatt-news-source">
                      <img
                        src="/images/sky-news-round.png"
                        alt=""
                        className="ms-2"
                      />{" "}
                      سكاي نيوز عربية
                    </p>
                  </div>
                </div>
              </div>

              <div className="row ps-5">
                <div className="col-md-12 ">
                  <a
                    href="https://www.youtube.com/"
                    className="jawlatt-video-stop text-decoration-none"
                    target="_blank" rel="noreferrer"
                  >
                    <img
                      src="/images/Mask group (10).1.png"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="jawlatt-sop">
                      <img src="/images/video-stop.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>

              <div className="row ps-5">
                <div className="col-md-12">
                  <h2 className="card-title fw-bolder">
                    <a
                      href="#"
                      className="text-decoration-none text-dark fs-4 lh-sm mt-2"
                    >
                      إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون{" "}
                      <br />
                      موقف مصر
                    </a>
                  </h2>

                  <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end mb-2">
                    <ul className="d-flex p-0 list-unstyled mb-0 align-items-center jawlatt-social-icon">
                      <li>
                        <a
                          href="#"
                          className="text-decoration-none jawlatt-primary-color"
                        >
                          <img
                            src="/images/Vector (4).png"
                            alt=""
                            className="jawlatt-icon-small"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-decoration-none jawlatt-feedback"
                        >
                          12
                          <img
                            src="/images/Vector (3).png"
                            alt=""
                            className="jawlatt-icon-small me-1"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-decoration-none jawlatt-primary-color jawlatt-card-text"
                        >
                          23
                          <img
                            src="/images/Vector (5).png"
                            alt=""
                            className="jawlatt-icon-small me-1"
                          />
                        </a>
                      </li>
                    </ul>
                    <p className="m-0 d-flex align-items-center text-end fw-semibold jawlatt-news-source">
                      <img
                        src="/images/sky-news-round.png"
                        alt=""
                        className="ms-2"
                      />{" "}
                      سكاي نيوز عربية
                    </p>
                  </div>
                </div>
              </div>

              <div className="row ps-5">
                <div className="col-md-12">
                  <a
                    href="https://www.youtube.com/watch?v=example4"
                    className="jawlatt-video-stop text-decoration-none"
                    target="_blank" rel="noreferrer"
                  >
                    <img
                      src="/images/Mask group (11).1.png"
                      alt=" "
                      className="img-fluid"
                    />
                    <div className="jawlatt-sop">
                      <img src="/images/video-stop.png" alt=" " />
                    </div>
                  </a>
                </div>
              </div>

              <div className="row mt-5 ps-5">
                <div className="col-md-12">
                  <img
                    src="/images/Screenshot 2024-04-20 at 4.17 3.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="row ps-5">
                <div className="col-md-12">
                  <h2 className="card-title fw-bolder mt-4">
                    <a
                      href="#"
                      className="text-decoration-none text-dark fs-4 lh-sm mt-2"
                    >
                      وإسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون{" "}
                      <br /> موقف مصر{" "}
                    </a>
                  </h2>
                  <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end align-items-center mb-2">
                    <ul className="d-flex p-0 list-unstyled mb-0 align-items-center jawlatt-social-icon">
                      <li>
                        <a
                          href="#"
                          className="text-decoration-none jawlatt-primary-color"
                        >
                          <img
                            src="/images/Vector (4).png"
                            alt=""
                            className="jawlatt-icon-small"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-decoration-none jawlatt-feedback"
                        >
                          12
                          <img
                            src="/images/Vector (3).png"
                            alt=""
                            className="jawlatt-icon-small me-1"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-decoration-none jawlatt-primary-color jawlatt-card-text"
                        >
                          23
                          <img
                            src="/images/Vector (5).png"
                            alt=""
                            className="jawlatt-icon-small me-1"
                          />
                        </a>
                      </li>
                    </ul>
                    <p className="m-0 d-flex align-items-center text-end fw-semibold jawlatt-news-source">
                      <img
                        src="/images/sky-news-round.png"
                        alt=""
                        className="ms-2"
                      />{" "}
                      سكاي نيوز عربية
                    </p>
                  </div>
                </div>
              </div>

              <div className="row ps-5">
                <div className="col-md-12">
                  <a
                    href="https://www.youtube.com/watch?v=example4"
                    className="jawlatt-video-stop"
                    target="_blank" rel="noreferrer"
                  >
                    <img
                      src="/images/Mask group (12).1.png"
                      alt="Video Thumbnail"
                      className="img-fluid"
                    />
                    <div className="jawlatt-sop">
                      <img
                        src="/images/video-stop.png"
                        alt="Play Button"
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </div>

                <div className="col-md-12 text-center p-5">
                  <img
                    src="/images/loading-01 1.png"
                    alt="Loading"
                    style={{ width: "70px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <Sidebar>
            <div className="jawlatt-news-image mt-5">
              <img src="/images/product-img.png" alt="news" className="w-100" />
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

export default Video;
