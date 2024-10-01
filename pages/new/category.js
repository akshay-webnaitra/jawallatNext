export const category = () => (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Category Pages</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="css/style.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
      />
      <header className="pt-4 pb-4 mb-3">
        <div className="container">
          <div className="announcement-bar col-12 mb-5">
            <p className="text-start fw-semibold jawlatt-announcement-bar-par">
              الجمعة 5 محرم 1446 هـ - 12 يوليو 2024
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start mb-3">
            <a
              href="/"
              className="d-flex col-lg-2 align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <img src="images/logo.png" className="img-fluid w-75" />
            </a>
            <ul className="nav col-12 col-lg-8  mb-2 justify-content-start mb-md-0">
              <li>
                <a href="#" className="nav-link px-3 link-body-emphasis">
                  {" "}
                  أخبار{" "}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-3 link-body-emphasis">
                  شرق أوسط
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-3 link-body-emphasis">
                  اقتصاد
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-3 link-body-emphasis">
                  سيارات
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-3 link-body-emphasis">
                  رياضة
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-3 link-body-emphasis">
                  فيديو
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-3 link-body-emphasis">
                  فن
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-3 link-body-emphasis">
                  سفر
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link px-3 link-body-emphasis dropdown-toggle"
                >
                  المزيد
                </a>
                <ul className="dropdown-menu text-small">
                  <li>
                    <a className="dropdown-item" href="#">
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div
              className="col-12 col-lg-2 mb-3 mb-lg-0  d-flex gap-4 align-items-center justify-content-end"
              role="search"
            >
              <a
                href="#"
                className="jawlatt-hdr-lt-btn text-decoration-none m-0 rounded px-1 text-white jawlatt-bg-red"
              >
                بث مباشر
              </a>
              <ul className="jawlatt-icon-list list-unstyled d-flex m-0">
                <li>
                  <a href="#" className="text-decoration-none jawlatt-cmn-color">
                    <i className="fa-solid fa-magnifying-glass jawlatt-font-medium" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none jawlatt-cmn-color mx-3"
                  >
                    <i className="fa-solid fa-bell jawlatt-font-medium" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none jawlatt-cmn-color">
                    <i className="fa-regular fa-circle-user jawlatt-font-medium" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="jawlatt-header-btm py-3 jawlatt-bottom-header-bg-color">
          <div className="container">
            <div className="jawlatt-header-btm-content d-flex align-items-center">
              <div className="col-lg-5">
                <p className="mb-0" dir="ltr">
                  {" "}
                  <a href="#" className="text-decoration-none jawlatt-text-gray">
                    ٣٦٥٠ سعر جرام ٢٤ - ٢٣٥٠ سعر جرام ٢١ - ٢١٥٠ جرام١٨
                    <strong dir="ltr">سعر الذهب</strong>
                  </a>
                </p>
              </div>
              <div className="col-lg-5">
                <p className="mb-0" dir="ltr">
                  {" "}
                  <a href="#" className="text-decoration-none jawlatt-text-gray">
                    الدولار ٤٧ جنيها مصرياً، اليورو ٥٧ جم، الين الياباني ٢٣ جم{" "}
                    <strong dir="ltr">سعر الذهب</strong>
                  </a>
                </p>
              </div>
              <div className="col-lg-2">
                <div className="row justify-content-end ">
                  <input type="checkbox" className="checkbox" id="checkbox" />
                  <label htmlFor="checkbox" className="checkbox-label mx-2">
                    {/* <i class="fas fa-sun"></i> */}
                    <i className="fas fa-cloud-moon  ms-2" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      width={64}
                      height={64}
                      fill="none"
                      stroke="black"
                      strokeWidth={2}
                    >
                      {/* Circle in the center (Sun Core) */}
                      <circle cx={32} cy={32} r={12} fill="black" />
                      {/* Rays around the sun */}
                      <line x1={32} y1={2} x2={32} y2={10} />
                      <line x1={32} y1={54} x2={32} y2={62} />
                      <line x1={2} y1={32} x2={10} y2={32} />
                      <line x1={54} y1={32} x2={62} y2={32} />
                      <line x1="10.93" y1="10.93" x2="17.68" y2="17.68" />
                      <line x1="46.32" y1="46.32" x2="53.07" y2="53.07" />
                      <line x1="10.93" y1="53.07" x2="17.68" y2="46.32" />
                      <line x1="46.32" y1="17.68" x2="53.07" y2="10.93" />
                    </svg>
                    <span className="ball"> </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="jawlatt-single-news pt-3">
          <h3 classname="text-dark fw-bold m-0 jawlatt-news-small-title">
            83 |
            <svg
              width="{13}"
              height="{25}"
              viewBox="0 0 13 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 12.48L12.48 0V24.96L0 12.48Z" fill="#EA5153" />
            </svg>
            | اقتصاد
          </h3>
        </div>
        <div className="jawlatt-slider  my-5 rounded py-4 jawlatt-slide-bg-color">
          <div className="box  mx-2 text-center">
            <img
              src="./images/Mask group (36).png"
              alt="Card Image 1"
              className="img-fluid "
            />
            <h5 className="mt-3">زبيدة ثروت </h5>
            <p>ممثل مصري</p>
          </div>
          <div className="box  mx-2 text-center">
            <img
              src="./images/Mask group (35).png"
              alt="Card Image 1"
              className="img-fluid "
            />
            <h5 className="mt-3">مثل مصري</h5>
            <p>زبيدة ثروت </p>
          </div>
          <div className="box mx-2 text-center">
            <img
              src="./images/Mask group (34).png"
              alt="Card Image 1"
              className="img-fluid "
            />
            <h5 className="mt-3">مثل مصري</h5>
            <p>زبيدة ثروت </p>
          </div>
          <div className="box mx-2 text-center">
            <img
              src="./images/Mask group (33).png"
              alt="Card Image 1"
              className="img-fluid "
            />
            <h5 className="mt-3">مثل مصري</h5>
            <p>زبيدة ثروت .</p>
          </div>
          <div className="box mx-2 text-center">
            <img
              src="./images/Mask group (32).png"
              alt="Card Image 1"
              className="img-fluid "
            />
            <h5 className="mt-3">مثل مصري</h5>
            <p>زبيدة ثروت </p>
          </div>
          <div className="box mx-2 text-center">
            <img
              src="./images/images-3 1.png"
              alt="Card Image 1"
              className="img-fluid rounded "
            />
            <h5 className="mt-3">مثل مصري</h5>
            <p>&gt;زبيدة ثروت </p>
          </div>
          <div className="box mx-2 text-center">
            <img
              src="./images/Mask group (14).2.png"
              alt="Card Image 1"
              className="img-fluid "
            />
            <h5 className="mt-3">&gt;زبيدة ثروت </h5>
            <p>مثل مصري</p>
          </div>
          <div className="box mx-2 text-center">
            <img
              src="./images/Mask group (31).png"
              alt="Card Image 1"
              className="img-fluid "
            />
            <h5 className="mt-3">زبيدة ثروت </h5>
            <p>ممثل مصري</p>
          </div>
          <div className="box  mx-2 text-center">
            <img
              src="./images/Mask group (36).png"
              alt="Card Image 1"
              className="img-fluid "
            />
            <h5 className="mt-3">زبيدة ثروت </h5>
            <p>ممثل مصري</p>
          </div>
          <div className="box  mx-2 text-center">
            <img
              src="./images/Mask group (35).png"
              alt="Card Image 1"
              className="img-fluid "
            />
            <h5 className="mt-3">مثل مصري</h5>
            <p>زبيدة ثروت </p>
          </div>
          <div className="box mx-2 text-center">
            <img
              src="./images/Mask group (34).png"
              alt="Card Image 1"
              className="img-fluid "
            />
            <h5 className="mt-3">مثل مصري</h5>
            <p>زبيدة ثروت </p>
          </div>
          <div className="box mx-2 text-center">
            <img
              src="./images/Mask group (33).png"
              alt="Card Image 1"
              className="img-fluid "
            />
            <h5 className="mt-3">مثل مصري</h5>
            <p>زبيدة ثروت .</p>
          </div>
          <div className="box mx-2 text-center">
            <img
              src="./images/Mask group (32).png"
              alt="Card Image 1"
              className="img-fluid "
            />
            <h5 className="mt-3">مثل مصري</h5>
            <p>زبيدة ثروت </p>
          </div>
          <div className="box mx-2 text-center">
            <img
              src="./images/images-3 1.png"
              alt="Card Image 1"
              className="img-fluid rounded "
            />
            <h5 className="mt-3">مثل مصري</h5>
            <p>&gt;زبيدة ثروت </p>
          </div>
          <div className="box mx-2 text-center">
            <img
              src="./images/Mask group (14).2.png"
              alt="Card Image 1"
              className="img-fluid "
            />
            <h5 className="mt-3">&gt;زبيدة ثروت </h5>
            <p>مثل مصري</p>
          </div>
          <div className="box mx-2 text-center">
            <img
              src="./images/Mask group (31).png"
              alt="Card Image 1"
              className="img-fluid "
            />
            <h5 className="mt-3">زبيدة ثروت </h5>
            <p>ممثل مصري</p>
          </div>
        </div>
        <div className="row jawlatt-bnr-top">
          <div className="col-md-9 jawlatt-bnr-top-mid jawlatt-bnr-top-rt">
            <div className="row jawlatt-right-image-left-text my-5">
              <div className="col-md-12  ">
                <div className="card mb-3 border-0">
                  <div className="row g-0">
                    <div className="col-md-2 jawlatt-img ">
                      <a href="#">
                        <img
                          src="images/Mask group (16).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a classname="d-block text-decoration-none" href="#">
                            <p classname="m-0 text-end fw-semibold jawlatt-news-source">
                              &gt;
                              <img
                                src="images/sky-news-round.png"
                                classname="ms-2"
                                alt="Sky News Logo"
                              />
                              سكاي نيوز عربية
                            </p>
                          </a>
                          <a
                            classname="jawlatt-hdr-lt-btn text-decoration-none text-white fw-semibold bg-blank fs-6"
                            href="#"
                          >
                            تمت
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2">
                          {" "}
                          <a
                            href="#"
                            className="fs-5 text-decoration-none text-dark"
                          >
                            وزير الخارجية يلتقي مستشارة الرئيس الفرنسي لشؤون الشرق
                            الأوسط - ضمن سلسلة من اللقاءات الدولية لتعزيز العلاقات
                          </a>
                        </h2>
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
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book" />
                              </a>
                            </li>
                          </ul>
                          <p className="jawlatt-time-text">قبل 6 ساعات</p>
                          <ul className="p-0 me-3 jawlatt-list-disc">
                            <li>
                              <a
                                className="text-decoration-none fw-semibold text-end jawlatt-category-link "
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
            <div className="jawlatt-mid-grey-cards">
              <div className="row">
                <div className="col-md-4  mb-sm-2 mb-2">
                  <div className="card">
                    <div className="card-body px-3 py-2">
                      <h5 className="fw-semibold text-dark jawlatt-card-body-fs card-title mb-3">
                        يرى ترامب أخيرًا عواقب فمه الكبير في محاكمة الصمت بشأن
                        الأموال.....
                      </h5>
                      <div className="jawlatt-mid-grey-card-content d-flex flex-row justify-content-between align-items-center">
                        <div className="card-text d-flex align-items-center gap-1">
                          <a href="#">
                            <img
                              src="images/sadaElBada.png"
                              alt="Al Jazeera Logo"
                              width="28px"
                              height="28px"
                            />
                          </a>
                          <p className="fw-bold text-dark m-0 jawlatt-mid-text">
                            <a href="#" className="text-decoration-none">
                              البلاد
                              <br />
                              <span className="fw-semibold text-end jawlatt-custom-style">
                                منذ ٣٧ ثانية.
                              </span>
                            </a>
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
                          <li>
                            <a href="#" className="text-dark">
                              <i className="fa-solid fa-book" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4  mb-sm-2 mb-2">
                  <div className="card">
                    <div className="card-body px-3 py-2">
                      <h5 className="fw-semibold text-dark jawlatt-card-body-fs card-title mb-3">
                        يرى ترامب أخيرًا عواقب فمه الكبير في محاكمة الصمت بشأن
                        الأموال ......
                      </h5>
                      <div className="jawlatt-mid-grey-card-content d-flex flex-row justify-content-between align-items-center">
                        <div className="card-text d-flex align-items-center gap-1">
                          <a href="#">
                            <img
                              src="images/mbc.png"
                              alt="MBC Logo"
                              width="28px"
                              height="28px"
                            />
                          </a>
                          <p className="fw-bold text-dark m-0 jawlatt-mid-text">
                            <a href="#" className="text-decoration-none">
                              ام بي سي مصر
                              <br />
                              <span className="fw-semibold text-end jawlatt-custom-style">
                                منذ 7 ثانية
                              </span>
                            </a>
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
                          <li>
                            <a href="#" className="text-dark">
                              <i className="fa-solid fa-book" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-sm-2 mb-2">
                  <div className="card">
                    <div className="card-body px-3 py-2">
                      <h5 className="fw-semibold text-dark jawlatt-card-body-fs card-title mb-3">
                        يرى ترامب أخيرًا عواقب فمه الكبير في محاكمة الصمت بشأن
                        الأموال.....
                      </h5>
                      <div className="jawlatt-mid-grey-card-content d-flex flex-row justify-content-between align-items-center">
                        <div className="card-text d-flex align-items-center gap-1">
                          <a href="#">
                            <img
                              src="images/airline.png"
                              alt="Al Jazeera Logo"
                              width="28px"
                              height="28px"
                            />
                          </a>
                          <p className="fw-bold text-center m-0 jawlatt-mid-text">
                            <a href="#" className="text-decoration-none">
                              الجزيرة عربية
                              <br />
                              <span className="fw-semibold text-end jawlatt-custom-style">
                                منذ ٣٧ ثانية.
                              </span>
                            </a>
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
                          <li>
                            <a href="#" className="text-dark">
                              <i className="fa-solid fa-book" />
                            </a>
                          </li>
                        </ul>
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
                    <div className="col-md-2 col-12 jawlatt-img">
                      <a href="#">
                        <img
                          src="images/Mask group (22).png"
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
                              <img src="images/alzazera.png" className="ms-2" />
                              الجزيرة عربية
                            </p>
                          </a>
                          <a
                            className="jawlatt-hdr-lt-btn text-decoration-none text-white fw-semibold jawlatt-card-btn bg-danger"
                            href="#"
                          >
                            تمت المتابعة
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2">
                          {" "}
                          <a
                            href="#"
                            className="fs-5 text-decoration-none text-dark"
                          >
                            إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون
                            موقف مصر
                          </a>
                        </h2>
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
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book" />
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
            <div className="row jawlatt-right-image-left-text jawlatt-box-gap">
              <div className="col-md-12 px-0">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2 jawlatt-img ">
                      <a href="#">
                        <img
                          src="./images/alon.png"
                          className="img-fluid rounded"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body p-0 px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold jawlatt-news-source">
                              <img src="images/almashraly.png" className="ms-2" />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2">
                          <a
                            href="#"
                            className="fs-5 text-decoration-none text-dark"
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
                                <i className="fa-solid fa-share" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-bookmark" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book" />
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
              <img src="images/news-bg.png" alt="news" className="w-100" />
            </div>
            <div className="row jawlatt-right-image-left-text jawlatt-border-line">
              <div className="col-md-12 px-0">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2 jawlatt-img ">
                      <a href="#">
                        {" "}
                        <img
                          src="images/Mask group (2).png"
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
                                src="images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2">
                          <a
                            href="#"
                            className="fs-5 text-decoration-none text-dark"
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
                                <i className="fa-solid fa-share" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-bookmark" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book" />
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
                          src="images/Mask group (15).png"
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
                                src="images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2">
                          <a
                            href="#"
                            className="fs-5 text-decoration-none text-dark"
                          >
                            مجلس الوزراء يناقش تحسين حياة المواطن في برنامج
                            الحكومة الجديدة - تركز الحكومة على بناء اقتصاد تنافسي
                            وجاذب للاستثمار
                          </a>
                        </h2>
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
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book" />
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
                          src="images/Mask group (3).png"
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
                                src="images/images 3.png "
                                className="ms-2 jawlatt-img-size"
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2">
                          <a
                            href="#"
                            className="fs-5 text-decoration-none text-dark"
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
                                <i className="fa-solid fa-share" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-bookmark" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book" />
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
                          src="images/Mask group (4).png"
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
                                src="images/images 3.png "
                                className="ms-2 jawlatt-img-size"
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2">
                          <a
                            href="#"
                            className="fs-5 text-decoration-none text-dark"
                          >
                            مجلس الوزراء يناقش تحسين حياة المواطن في برنامج
                            الحكومة الجديدة - تركز الحكومة على بناء اقتصاد تنافسي
                            وجاذب للاستثمار
                          </a>
                        </h2>
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
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book" />
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
                      src="images/Screenshot 2024-04-20 at 4.17 3.png"
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
                        {" "}
                        <img
                          src="images/Mask group (2).png"
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
                                src="images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2">
                          <a
                            href="#"
                            className="fs-5 text-decoration-none text-dark"
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
                                <i className="fa-solid fa-share" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-bookmark" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book" />
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
                          src="images/Mask group (15).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body p-0  px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0  text-end fw-semibold jawlatt-news-source">
                              <img
                                src="images/images 3.png "
                                className="ms-2 jawlatt-img-size"
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2">
                          <a
                            href="#"
                            className="fs-5 text-decoration-none text-dark"
                          >
                            مجلس الوزراء يناقش تحسين حياة المواطن في برنامج
                            الحكومة الجديدة - تركز الحكومة على بناء اقتصاد تنافسي
                            وجاذب للاستثمار
                          </a>
                        </h2>
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
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book" />
                              </a>
                            </li>
                          </ul>
                          <p style={{ color: "#4D525A" }}>قبل 6 ساعات</p>
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
                          src="images/Mask group (3).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body p-0  px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold jawlatt-news-source ">
                              <img
                                src="images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2">
                          <a
                            href="#"
                            className="fs-5 text-decoration-none text-dark"
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
                                <i className="fa-solid fa-share" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-bookmark" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book" />
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
                        <img
                          src="images/Mask group (13).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body p-0  px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold  jawlatt-news-source">
                              <img
                                src="images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2">
                          <a
                            href="#"
                            className="fs-5 text-decoration-none text-dark"
                          >
                            مجلس الوزراء يناقش تحسين حياة المواطن في برنامج
                            الحكومة الجديدة - تركز الحكومة على بناء اقتصاد تنافسي
                            وجاذب للاستثمار
                          </a>
                        </h2>
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
                              <a href="#" className="text-dark">
                                <i className="fa-solid fa-book" />
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
          </div>
          <div className="col-md-3 jawlatt-bnr-top-lt">
            <div className="jawlatt-news-image mt-5">
              <img src="./images/product-img.png" alt="news" className="w-100" />
            </div>
            <div className="jawlatt-news-image">
              <img
                src="./images/Screenshot 2024-04-20 at 3.19 1.png"
                alt="news"
                className="w-100"
              />
            </div>
            <div className="jawlatt-news-image my-5">
              <div className="row jawlatt-bg-light">
                <div className="col-8">
                  <h4 className="pt-2 fw-bold jawlatt-fs-1531">تطبيق عربي</h4>
                  <p className="jawlatt-fs-945">
                    حمل التطبيق الآن وتمتع بميزات عديدة
                  </p>
                  <a href="#" className="ms-1">
                    <img src="./images/App Store.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="./images/App Store (1).png" alt="" />
                  </a>
                </div>
                <div className="col-4 ">
                  <img
                    src="./images/image 1 (4).png"
                    alt=""
                    style={{ width: 120 }}
                    className="img-fluid "
                  />
                </div>
              </div>
            </div>
            <div className="jawlatt-news-image mt-5">
              <div className="jawlatt-social-link">
                <a href="#" className="text-dark">
                  <i className="fa-brands fa-tiktok " />
                </a>
                <a href="#" className="text-dark">
                  <i className="fa-brands fa-youtube " />
                </a>
                <a href="#" className="text-dark">
                  <i className="fa-brands fa-instagram " />
                </a>
                <a href="#" className="text-dark">
                  <i className="fa-brands fa-facebook-f " />
                </a>
                <a href="#" className="text-dark">
                  <i className="fa-brands fa-x-twitter " />
                </a>
              </div>
              <p className="pt-4 text-center">
                الشروط وسياسة الخصوصية لوحة معلومات الخصوصية يعلن حول إعلاناتنا
                وظائفي © 2024 خبر الإخبارية. كل الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Slick JS */}
    </>
  )
  