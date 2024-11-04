import Header from "@/partials/v2/Header";
import NewsItem from "@/components/v2/NewsItem";
import RedCaret from "@/components/v2/RedCaret";
import Sidebar from "@/partials/v2/Sidebar";

const Article = ({ article }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row jawlatt-bnr-top">
          <div className="col-md-9 jawlatt-bnr-top-mid jawlatt-bnr-top-rt">
            <div className="jawlatt-single-news ">
              <ul className="jawlatt-box d-flex align-items-center list-unstyled ">
                <li>
                  <a href="#">
                    <img src="/images/sky-news-round.png" alt="" className="" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="#"
                    className="text-decoration-none text-dark link-body-emphasis"
                    style={{ fontSize: "15px" }}
                  >
                    سكاي نيوز عربية
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <span
                      className="me-2 fw-bold link-body-emphasis"
                      style={{ fontSize: "13.5px" }}
                    >
                      34k
                    </span>
                  </a>
                </li>
                <li>
                  <button className="btn btn-dark ms-2 jawlatt-radio-btn">
                    + متابعة
                  </button>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <img src="/images/Vector.png" alt="" className="ms-2" />
                  </a>
                </li>
              </ul>

              <h2 className="fw-bold fs-1">
                {" "}
                <a
                  href="#"
                  className="text-decoration-none text-dark  link-body-emphasis fs-1"
                >
                  إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون موقف مصر
                </a>
              </h2>
              <div
                className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end align-items-center"
                style={{ paddingRight: "17px" }}
              >
                <ul className="d-flex p-0 list-unstyled align-items-center jawlatt-social-icon ">
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-book"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-bookmark"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-share"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/images/Group 6409.png"
                        alt=""
                        style={{ width: "50px" }}
                      />
                    </a>
                  </li>
                </ul>
                <p className="jawlatt-time-text">قبل 6 ساعات</p>
                <ul className="p-0 jawlatt-list-disc">
                  <li>
                    <a
                      className="text-decoration-none text-end fw-semibold jawlatt-list-color link-body-emphasis "
                      href="#"
                    >
                      سياسة
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <a href="#">
                  {" "}
                  <img
                    src="/images/Mask group (19).png"
                    alt=""
                    className="img-fluid"
                  />{" "}
                </a>
                <p className="fw-semibold jawlatt-article-text link-body-emphasis">
                  في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي، بنيامين
                  نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي قدماً في
                  هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف الجانب
                  المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل تخوفات
                  الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي،
                  بنيامين نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي
                  قدماً في هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف
                  الجانب المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل
                  تخوفات الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي،
                  بنيامين نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي
                  قدماً في هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف
                  الجانب المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل
                  تخوفات الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي،
                  بنيامين نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي
                  قدماً في هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف
                  الجانب المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل
                  تخوفات الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي،
                  بنيامين نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي
                  قدماً في هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف
                  الجانب المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل
                  تخوفات الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي،
                  بنيامين نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي
                  قدماً في هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف
                  الجانب المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل
                  تخوفات الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي،
                  بنيامين نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي
                  قدماً في هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف
                  الجانب المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل
                  تخوفات الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي،
                  بنيامين نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي
                  قدماً في هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف
                  الجانب المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل
                  تخوفات الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.
                </p>
                <div className="jawlatt-text mt-4 pb-5">
                  <div className="badge-container w-50">
                    <span className="badge-custom bg-light border rounded-3 text-center text-dark">
                      حدائق الاهرام
                    </span>
                    <span className="badge-custom bg-light border rounded-3 text-dark">
                      شارع الجيش بحدائق الاهرام
                    </span>
                    <span className="badge-custom bg-light border rounded-3 text-dark">
                      سيارة ملاكي طائشة
                    </span>
                    <span className="badge-custom bg-light border rounded-3 mt-2 d-inline-block text-dark">
                      ملاكي طائشة تسير بسرعة فائقة
                    </span>
                    <span className="badge-custom bg-light border rounded-3 mt-2 d-inline-block text-dark">
                      مدير أمن الجيزة
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="jawlatt-single-news ">
              <h3 className="text-dark fw-bold m-0 jawlatt-border-bottom">
                <RedCaret />
                موضوعات تهمك
              </h3>
            </div>

            <NewsItem />
            <NewsItem />
            <NewsItem />

            <div className="jawlatt-news-image">
              <img
                src="/images/Screenshot 2024-04-20 at 4.17 3.png"
                alt="news"
                className="w-100"
              />
            </div>

            <div className="jawlatt-single-news mt-5">
              <ul className="jawlatt-box d-flex align-items-center list-unstyled ">
                <li>
                  <a href="#">
                    <img
                      src="/images/sky-news-round.png"
                      alt=""
                      className="text-decoration-none text-dark"
                    />
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="#"
                    style={{ fontSize: "15px" }}
                    className="link-body-emphasis"
                  >
                    سكاي نيوز عربية
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <span
                      className="me-2 fw-bold link-body-emphasis"
                      style={{ fontSize: "13.5px" }}
                    >
                      34k
                    </span>
                  </a>
                </li>
                <li>
                  <button className="btn btn-dark ms-2 jawlatt-radio-btn">
                    + متابعة
                  </button>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <img src="/images/Vector.png" alt="" className="ms-2" />
                  </a>
                </li>
              </ul>
              <h2 className="fw-bold link-body-emphasis">
                <a
                  href="#"
                  className="fs-1 text-decoration-none text-dark link-body-emphasis"
                >
                  إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون موقف مصر
                </a>
              </h2>
              <div
                className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end align-items-center"
                style={{ paddingRight: "17px" }}
              >
                <ul className="d-flex p-0 list-unstyled align-items-center jawlatt-social-icon">
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
                  <li>
                    <a href="#">
                      <img
                        src="/images/Group 6409.png"
                        alt=""
                        style={{ height: "22px" }}
                      />
                    </a>
                  </li>
                </ul>
                <p className="jawlatt-time-text">قبل 6 ساعات</p>
                <ul className="p-0 jawlatt-list-disc">
                  <li>
                    <a
                      className="text-decoration-none fw-semibold text-end jawlatt-list-color link-body-emphasis"
                      href="#"
                    >
                      سياسة
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 ">
                <a href="#">
                  <img
                    src="/images/new-paper.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <p className="fw-bold jawlatt-article-text link-body-emphasis">
                  في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي، بنيامين
                  نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي قدماً في
                  هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف الجانب
                  المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل تخوفات
                  الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي،
                  بنيامين نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي
                  قدماً في هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف
                  الجانب المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل
                  تخوفات الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي،
                  بنيامين نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي
                  قدماً في هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف
                  الجانب المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل
                  تخوفات الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي،
                  بنيامين نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي
                  قدماً في هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف
                  الجانب المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل
                  تخوفات الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي،
                  بنيامين نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي
                  قدماً في هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف
                  الجانب المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل
                  تخوفات الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي،
                  بنيامين نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي
                  قدماً في هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف
                  الجانب المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل
                  تخوفات الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي،
                  بنيامين نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي
                  قدماً في هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف
                  الجانب المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل
                  تخوفات الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي،
                  بنيامين نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي
                  قدماً في هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف
                  الجانب المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل
                  تخوفات الجانب الأميركي من &quot; العواقب الكارثية&quot; على
                  المدنيين.
                </p>

                <div className="jawlatt-text mt-4">
                  <div className="badge-container w-50">
                    <span className="badge-custom bg-light border rounded-3 text-dark">
                      حدائق الاهرام
                    </span>
                    <span className="badge-custom bg-light border rounded-3 text-dark">
                      شارع الجيش بحدائق الاهرام
                    </span>
                    <span className="badge-custom bg-light border rounded-3 text-dark">
                      سيارة ملاكي طائشة
                    </span>
                    <span className="badge-custom bg-light border rounded-3 mt-2 d-inline-block text-dark">
                      ملاكي طائشة تسير بسرعة فائقة
                    </span>
                    <span className="badge-custom bg-light border rounded-3 mt-2 d-inline-block text-dark">
                      مدير أمن الجيزة
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="jawlatt-single-news">
              <h3 className="fw-bold m-0 text-dark link-body-emphasis jawlatt-news-small-title">
                <RedCaret />
                موضوعات تهمك
              </h3>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="card jawlatt-card-box">
                  <a href="#">
                    <img
                      src="/images/barnner-img4.1.png"
                      className="card-img-top"
                      alt="..."
                    />
                  </a>
                  <div className="card-body">
                    <p className="card-text jawlatt-card-text link-body-emphasis">
                      والجاف بلون اسود / ازرق براون ماكينة حلاقة للاستخدام الرطب
                      برو سكينة الشحن
                    </p>
                    <a
                      href="#"
                      className=" text-decoration-none link-body-emphasis"
                    >
                      {" "}
                      <sup className="link-body-emphasis">00</sup> 2934{" "}
                      <span className="link-body-emphasis jawlatt-font-size-10">
                        جنيه
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card jawlatt-card-box">
                  <a href="#">
                    <img
                      src="/images/barnner-img3.1.png"
                      className="card-img-top"
                      alt="..."
                    />
                  </a>
                  <div className="card-body">
                    <p className="card-text jawlatt-card-text link-body-emphasis">
                      والجاف بلون اسود / ازرق براون ماكينة حلاقة للاستخدام الرطب
                      برو سكين دة الشحن
                    </p>
                    <a
                      href="#"
                      className="text-decoration-none link-body-emphasis "
                    >
                      {" "}
                      <sup className="link-body-emphasis">00</sup> 3906{" "}
                      <span className="link-body-emphasis jawlatt-font-size-10">
                        جنيه
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card jawlatt-card-box">
                  <a href="#">
                    <img
                      src="/images/barnner-img2.1.png"
                      className="card-img-top"
                      alt="..."
                    />
                  </a>
                  <div className="card-body">
                    <p className="card-text jawlatt-card-text link-body-emphasis">
                      والجاف بلون اسود / ازرق براون ماكينة حلاقة للاستخدام الرطب
                      برو سك لاعادة الشحن
                    </p>
                    <a
                      href="#"
                      className="text-decoration-none link-body-emphasis "
                    >
                      {" "}
                      <sup className="link-body-emphasis">00</sup> 1295{" "}
                      <span className="link-body-emphasis jawlatt-font-size-10">
                        جنيه
                      </span>{" "}
                      <span className="text-decoration-line-through link-body-emphasis">
                        1660.00
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card jawlatt-card-box">
                  <a href="#">
                    <img
                      src="/images/barnner-img1.1.png"
                      className="card-img-top"
                      alt="..."
                    />
                  </a>
                  <div className="card-body">
                    <p className="card-text jawlatt-card-text link-body-emphasis">
                      والجاف بلون اسود / ازرق براون ماكينة حلاقة للاستخدام الرطب
                      برو سكين 3010 اس السلسلة 3 منماكينة حلاقة كهربائية قابلة
                      لاعادة الشحن
                    </p>
                    <a
                      href="#"
                      className="text-decoration-none link-body-emphasis "
                    >
                      {" "}
                      <sup className="link-body-emphasis">00</sup> 2,499{" "}
                      <span className="link-body-emphasis jawlatt-font-size-10">
                        جنيه
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="jawlatt-single-news mt-5">
              <h3 className="m-0 fw-bold text-dark jawlatt-border-bottom link-body-emphasis">
                <RedCaret />
                موضوعات تهمك
              </h3>
            </div>

            <NewsItem />
            <NewsItem />
            <NewsItem />
          </div>

          <Sidebar>
            <div className="card mb-3">
              <div className="card-header pb-0">
                <h5 className="card-title text-end mb-0" dir="ltr">
                  أخبار مصر
                  <i className="fa-solid fa-caret-left ml-4 ms-2 jawlatt-text-red"></i>
                </h5>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item pr-0">
                    <div className="d-flex gap-2">
                      <a className="d-block text-decoration-none" href="#">
                        <p className="m-0 fw-bold  text-start jawlatt-card-fs link-body-emphasis">
                          <img
                            style={{ width: "20px" }}
                            src="/images/sky-news.png"
                            className="ms-2 rounded-circle"
                            alt=""
                          />
                          سكاي نيوز عربية
                        </p>
                      </a>
                      <ul className="p-0 jawlatt-card-body-badge">
                        <li>
                          <a href="#">رياضة</a>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="#"
                      className="text-decoration-none link-body-emphasis"
                    >
                      إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون موقف
                      مصر
                    </a>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex gap-2">
                      <a className="d-block text-decoration-none" href="#">
                        <p className="m-0 fw-bold  text-start jawlatt-card-fs link-body-emphasis">
                          <img
                            style={{ width: "20px" }}
                            src="/images/sky-news.png"
                            className="ms-2 rounded-circle"
                            alt=""
                          />
                          سكاي نيوز عربية
                        </p>
                      </a>
                      <ul className="p-0 jawlatt-card-body-badge">
                        <li>
                          <a href="#">رياضة</a>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="#"
                      className="text-decoration-none link-body-emphasis"
                    >
                      إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون موقف
                      مصر
                    </a>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex gap-2">
                      <a className="d-block text-decoration-none" href="#">
                        <p className="m-0 fw-bold  text-start jawlatt-card-fs link-body-emphasis">
                          <img
                            style={{ width: "20px" }}
                            src="/images/sky-news.png"
                            className="ms-2 rounded-circle"
                            alt=""
                          />
                          سكاي نيوز عربية
                        </p>
                      </a>
                      <ul className="p-0 jawlatt-card-body-badge">
                        <li>
                          <a href="#">رياضة</a>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="#"
                      className="text-decoration-none link-body-emphasis"
                    >
                      إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون موقف
                      مصر
                    </a>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex gap-2">
                      <a className="d-block text-decoration-none" href="#">
                        <p className="m-0 fw-bold text-start jawlatt-card-fs link-body-emphasis">
                          <img
                            style={{ width: "20px" }}
                            src="/images/sky-news.png"
                            className="ms-2 rounded-circle "
                            alt=""
                          />
                          سكاي نيوز عربية
                        </p>
                      </a>
                      <ul className="p-0 jawlatt-card-body-badge">
                        <li>
                          <a href="#">رياضة</a>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="#"
                      className="text-decoration-none link-body-emphasis"
                    >
                      إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون موقف
                      مصر
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" mb-3">
              <img
                src="/images/MB_25636_24992_300_600 1.png"
                className="card-img-top"
                alt="NewsAd"
              />
            </div>
            <div
              className=" mb-3 recagle-shape align-items-center d-flex justify-content-center"
              style={{ backgroundColor: "#D9D9D9", paddingBlock: "100px" }}
            >
              <p>محتوي إعلاني</p>
            </div>
          </Sidebar>
        </div>
      </div>
    </>
  );
};

export default Article;
