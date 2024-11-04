import Header from "@/partials/v2/Header";
import Sidebar from "@/partials/v2/Sidebar";

const Source = ({ source }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row jawlatt-bnr-top">
          <div className="col-md-9 jawlatt-bnr-top-mid jawlatt-bnr-top-rt">
            <div className="jawlatt-box d-flex align-items-center bg-light px-3 py-2 rounded-3">
              <a href="#">
                <img src="/images/sky-news-round.png" alt="" className="mx-1" />
              </a>

              <a
                href="#"
                className="text-decoration-none ms-2 jawlatt-box-right-border"
              >
                <span className="text-dark"> سكاي نيوز عربية</span>
              </a>
              <a
                href="#"
                className="text-decoration-none ms-2 jawlatt-box-right-border"
              >
                <span className="me-3 fw-bold jawlatt-fs-135 text-dark">
                  34k
                  <span className="text-dark">المتابعون</span>
                </span>
              </a>

              <button className="btn btn-dark ms-3 jawlatt-box-border-radio">
                + متابعة
              </button>

              <a href="#">
                <img src="/images/Vector.png" alt="" className="ms-3" />
              </a>
            </div>

            <div className="row jawlatt-right-image-left-text jawlatt-border-line">
              <div className="col-md-12 px-0">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2 jawlatt-img ">
                      <a href="#">
                        {" "}
                        <img
                          src="/images/Mask group (16).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body  px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold  jawlatt-news-source">
                              <img
                                src="/images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                                alt=""
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder">
                          <a
                            href="#"
                            className="text-decoration-none text-dark fs-5 lh-sm mt-2"
                          >
                            وزير الخارجية يلتقي مستشارة الرئيس الفرنسي لشؤون
                            الشرق الأوسط - ضمن سلسلة من اللقاءات الدولية لتعزيز
                            العلاقات
                          </a>
                        </h2>

                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end jawlatt-gap-margin">
                          <ul className="d-flex p-0 list-unstyled jawlatt-social-icon">
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-share"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-bookmark"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="jawlatt-time-text">قبل 6 ساعات</p>
                          <ul className="p-0 me-3 jawlatt-list-disc">
                            <li>
                              <a
                                className="text-decoration-none text-end fw-semibold jawlatt-category-link"
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

            <div className="row jawlatt-right-image-left-text jawlatt-border-line">
              <div className="col-md-12 px-0">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2 jawlatt-img ">
                      <a href="#">
                        {" "}
                        <img
                          src="/images/Mask group (22).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body p-0 px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold jawlatt-news-source">
                              <img
                                src="/images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                                alt=""
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder">
                          <a
                            href="#"
                            className="text-decoration-none text-dark fs-5 lh-sm mt-2"
                          >
                            إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء
                            يناقشون موقف مصر
                          </a>
                        </h2>
                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end jawlatt-gap-margin">
                          <ul className="d-flex p-0 list-unstyled jawlatt-social-icon">
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-share"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-bookmark"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="jawlatt-time-text">قبل 6 ساعات</p>
                          <ul className="p-0 me-3 jawlatt-list-disc">
                            <li>
                              <a
                                className="text-decoration-none text-end fw-semibold jawlatt-category-link"
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

            <div className="row jawlatt-right-image-left-text jawlatt-border-line">
              <div className="col-md-12 px-0">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2 jawlatt-img ">
                      <a href="#">
                        {" "}
                        <img
                          src="/images/alon.png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body p-0 px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold jawlatt-news-source ">
                              <img
                                src="/images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                                alt=""
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder">
                          <a
                            href="#"
                            className="text-decoration-none text-dark fs-5 lh-sm mt-2"
                          >
                            اكتشف محبو Fallout بيضة عيد الفصح التي تثبت اهتمام
                            العرض المذهل بالتفاصيل - وهي تتضمن لعبة تقمص الأدوار
                            الأصلية{" "}
                          </a>
                        </h2>
                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end jawlatt-gap-margin">
                          <ul className="d-flex p-0 list-unstyled jawlatt-social-icon">
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-share"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-bookmark"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="jawlatt-time-text">قبل 6 ساعات</p>
                          <ul className="p-0 me-3 jawlatt-list-disc">
                            <li>
                              <a
                                className="text-decoration-none text-end fw-semibold jawlatt-category-link"
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

            <div className="jawlatt-news-image">
              <img src="/images/news-bg.png" alt="news" className="w-100" />
            </div>

            <div className="row jawlatt-right-image-left-text jawlatt-border-line">
              <div className="col-md-12 px-0">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2 jawlatt-img ">
                      <a href="#">
                        {" "}
                        <img
                          src="/images/Mask group (2).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body p-0 px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold jawlatt-news-source">
                              <img
                                src="/images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                                alt=""
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder">
                          <a
                            href="#"
                            className="text-decoration-none text-dark fs-5 lh-sm mt-2"
                          >
                            مصر تصدر أول عقود لتصدير الوقود الأخضر إلى أوروبا
                            بقيمة 397 مليون يورو - مكاسب كبيرة لتوطين الصناعات
                            المرتبطة بالهيدروجين الأخضر
                          </a>
                        </h2>
                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end jawlatt-gap-margin">
                          <ul className="d-flex p-0 list-unstyled jawlatt-social-icon">
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-share"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-bookmark"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="jawlatt-time-text">قبل 6 ساعات</p>
                          <ul className="p-0 me-3 jawlatt-list-disc">
                            <li>
                              <a
                                className="text-decoration-none text-end fw-semibold jawlatt-category-link"
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
            <div className="row jawlatt-right-image-left-text jawlatt-border-line">
              <div className="col-md-12 px-0">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2 jawlatt-img ">
                      <a href="#">
                        <img
                          src="/images/Mask group (15).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body p-0 px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0  text-end fw-semibold jawlatt-news-source">
                              <img
                                src="/images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                                alt=""
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder">
                          <a
                            href="#"
                            className="text-decoration-none text-dark fs-5 lh-sm mt-2"
                          >
                            اكتشف محبو Fallout بيضة عيد الفصح التي تثبت اهتمام
                            العرض المذهل بالتفاصيل - وهي تتضمن لعبة تقمص الأدوار
                            الأصلية{" "}
                          </a>
                        </h2>
                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end jawlatt-gap-margin">
                          <ul className="d-flex p-0 list-unstyled jawlatt-social-icon">
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-share"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-bookmark"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="jawlatt-time-text">قبل 6 ساعات</p>
                          <ul className="p-0 me-3 jawlatt-list-disc">
                            <li>
                              <a
                                className="text-decoration-none text-end fw-semibold jawlatt-category-link"
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
            <div className="row jawlatt-right-image-left-text jawlatt-border-space">
              <div className="col-md-12 px-0">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2 jawlatt-img ">
                      <a href="#">
                        {" "}
                        <img
                          src="/images/Mask group (3).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body p-0 px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold jawlatt-news-source ">
                              <img
                                src="/images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                                alt=""
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder">
                          <a
                            href="#"
                            className="text-decoration-none text-dark fs-5 lh-sm mt-2"
                          >
                            اكتشف محبو Fallout بيضة عيد الفصح التي تثبت اهتمام
                            العرض المذهل بالتفاصيل - وهي تتضمن لعبة تقمص الأدوار
                            الأصلية{" "}
                          </a>
                        </h2>
                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end jawlatt-gap-margin">
                          <ul className="d-flex p-0 list-unstyled jawlatt-social-icon">
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-share"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-bookmark"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="jawlatt-time-text">قبل 6 ساعات</p>
                          <ul className="p-0 me-3 jawlatt-list-disc">
                            <li>
                              <a
                                className="text-decoration-none text-end fw-semibold fw-semibold jawlatt-category-link"
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

            <div className="row jawlatt-right-image-left-text jawlatt-border-space">
              <div className="col-md-12 px-0">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2 jawlatt-img ">
                      <a href="#">
                        {" "}
                        <img
                          src="/images/Mask group (4).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body p-0 px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold  jawlatt-news-source">
                              <img
                                src="/images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                                alt=""
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder">
                          <a
                            href="#"
                            className="text-decoration-none text-dark fs-5 lh-sm mt-2"
                          >
                            مجلس الوزراء يناقش تحسين حياة المواطن في برنامج
                            الحكومة الجديدة - تركز الحكومة على بناء اقتصاد
                            تنافسي وجاذب للاستثمار
                          </a>
                        </h2>
                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end jawlatt-gap-margin">
                          <ul className="d-flex p-0 list-unstyled jawlatt-social-icon">
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-share"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-bookmark"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="jawlatt-time-text">قبل 6 ساعات</p>
                          <ul className="p-0 me-3 jawlatt-list-disc">
                            <li>
                              <a
                                className="text-decoration-none text-end fw-semibold jawlatt-category-link"
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
            <div className="row">
              <div className="col-md-12 py-5 px-0">
                <div className="jawlatt-news-image">
                  <a href="#">
                    {" "}
                    <img
                      src="/images/Screenshot 2024-04-20 at 4.17 3.png"
                      alt="news"
                      className="w-100"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="row jawlatt-right-image-left-text jawlatt-border-line">
              <div className="col-md-12 px-0">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2 jawlatt-img ">
                      <a href="#">
                        <img
                          src="/images/Mask group (9).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body p-0 px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0  text-end fw-semibold jawlatt-news-source">
                              <img
                                src="/images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                                alt=""
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder">
                          <a
                            href="#"
                            className="text-decoration-none text-dark fs-5 lh-sm mt-2"
                          >
                            باريس هيلتون تنشر الصورة الأولى لابنة زوجها كارتر
                            ريوم في لندن
                          </a>
                        </h2>
                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end jawlatt-gap-margin">
                          <ul className="d-flex p-0 list-unstyled jawlatt-social-icon">
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-share"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-bookmark"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="jawlatt-time-text">قبل 6 ساعات</p>
                          <ul className="p-0 me-3 jawlatt-list-disc">
                            <li>
                              <a
                                className="text-decoration-none text-end fw-semibold jawlatt-category-link"
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
            <div className="row jawlatt-right-image-left-text jawlatt-border-line">
              <div className="col-md-12 px-0">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2 jawlatt-img ">
                      <a href="#">
                        <img
                          src="/images/Mask group (6).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body p-0 px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold jawlatt-news-source">
                              <img
                                src="/images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                                alt=""
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder">
                          <a
                            href="#"
                            className="text-decoration-none text-dark fs-5 lh-sm mt-2"
                          >
                            سيكون مانيكير زيندايا الفرنسي الفاخر في كل مكان هذا
                            الربيع
                          </a>
                        </h2>
                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end jawlatt-gap-margin">
                          <ul className="d-flex p-0 list-unstyled jawlatt-social-icon">
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-share"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-bookmark"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="jawlatt-time-text">قبل 6 ساعات</p>
                          <ul className="p-0 me-3 jawlatt-list-disc">
                            <li>
                              <a
                                className="text-decoration-none text-end fw-semibold jawlatt-category-link"
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
            <div className="row jawlatt-right-image-left-text jawlatt-border-line">
              <div className="col-md-12 px-0">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2 jawlatt-img ">
                      <a href="#">
                        {" "}
                        <img
                          src="/images/Mask group (5).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body p-0 px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold jawlatt-news-source">
                              <img
                                src="/images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                                alt=""
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder">
                          <a
                            href="#"
                            className="text-decoration-none text-dark fs-5 lh-sm mt-2"
                          >
                            جيمي كيميل يذهل زيندايا عندما يكشف أنه ربح 12 ألف
                            دولار في مراهنته عليها في فيلم &quot; الرقص مع
                            النجوم&quot; | فيديو
                          </a>
                        </h2>
                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end jawlatt-gap-margin">
                          <ul className="d-flex p-0 list-unstyled jawlatt-social-icon">
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-share"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-bookmark"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book"></i>
                              </a>
                            </li>
                          </ul>
                          <p className="jawlatt-time-text">قبل 6 ساعات</p>
                          <ul className="p-0 me-3 jawlatt-list-disc">
                            <li>
                              <a
                                className="text-decoration-none text-end fw-semibold jawlatt-category-link"
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

            <div className="row">
              <div className="col-md-12 text-center p-5">
                <img
                  src="/images/loading-01 1.png"
                  alt=""
                  style={{ width: "70px" }}
                />
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

export default Source;
