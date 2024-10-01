export const home = () => (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Home</title>
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
      <header className="pt-4 pb-4 mb-3">
        <div className="container">
          <div className="announcement-bar col-12 mb-5">
            <p
              style={{
                color: "#7D7D7D",
                fontSize: "12.84px",
                fontWeight: 500,
                lineHeight: "15.41px",
                textAlign: "left"
              }}
            >
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
              <a href="#" className="jawlatt-hdr-lt-btn text-decoration-none m-0">
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
                    {" "}
                    الدولار ٤٧ جنيها مصرياً، اليورو ٥٧ جم، الين الياباني ٢٣ جم{" "}
                    <strong dir="ltr">سعر الذهب</strong>
                  </a>
                </p>
              </div>
              <div className="col-lg-2">
                <ul className="list-unstyled d-flex m-0 gap-2 justify-content-end">
                  <li>
                    <a
                      href="#"
                      className="text-decoration-none jawlatt-cmn-color"
                    >
                      <i className="fa-solid fa-cloud-moon fs-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-decoration-none jawlatt-cmn-color"
                    >
                      <i className="fa-solid fa-sun fs-6" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row jawlatt-bnr-top">
          <div className="col-md-9 jawlatt-bnr-top-mid jawlatt-bnr-top-rt">
            <div className="row jawlatt-right-image-left-text">
              <div className="col-md-12">
                <div className="card mb-3 border-0">
                  <div className="row jawlatt-right-image-left-text my-5">
                    <div className="col-md-12">
                      <div className="card mb-3 border-0">
                        <div className="row g-0">
                          <div className="col-md-2">
                            <img
                              src="images/Mask group (2).png"
                              className="img-fluid rounded-start "
                              alt="news"
                            />
                          </div>
                          <div className="col-md-10">
                            <div className="card-body ps-0">
                              <div className="d-flex gap-2 align-items-center">
                                <a
                                  className="d-block text-decoration-none"
                                  href="#"
                                >
                                  <p className="m-0 text-end fw-semibold  jawlatt-news-source">
                                    <img
                                      src="images/sky-news-round.png"
                                      className="ms-2"
                                    />
                                    سكاي نيوز عربية
                                  </p>
                                </a>
                                <a
                                  className="jawlatt-hdr-lt-btn text-decoration-none text-white fw-semibold "
                                  href="#"
                                  style={{
                                    fontSize: "11.71px",
                                    backgroundColor: "#B22E39",
                                    padding: "4px 10px"
                                  }}
                                >
                                  تمت المتابعة
                                </a>
                              </div>
                              <h2 className="card-title fw-bolder mt-2 fs-6">
                                وزير الخارجية يلتقي مستشارة الرئيس الفرنسي لشؤون
                                الشرق الأوسط - ضمن سلسلة من اللقاءات الدولية
                                لتعزيز العلاقات
                              </h2>
                              <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end jawlatt-gap-margin">
                                <ul className="d-flex p-0 list-unstyled jawlatt-social-icon">
                                  <li>
                                    <a href="#">
                                      <i className="fa-solid fa-book" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa-solid fa-bookmark" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa-solid fa-share" />
                                    </a>
                                  </li>
                                </ul>
                                <p className="jawlatt-time-text">قبل 6 ساعات</p>
                                <ul
                                  className="p-0 me-3"
                                  style={{ listStyleType: "disc" }}
                                >
                                  <li>
                                    <a
                                      className="text-decoration-none fw-semibold text-end jawlatt-list-color"
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
              </div>
            </div>
            <div className="row jawlatt-news-card-list">
              <div className="col-md-3">
                <div className="card mb-3 border-0">
                  <div className="row g-0 flex-column">
                    <div>
                      <img
                        src="images/single.png"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div>
                      <div className="card-body p-0">
                        <p className="card-text">
                          <img
                            style={{ marginLeft: 5 }}
                            src="images/news-label.png"
                            alt="label"
                          />
                          <small className="text-muted">اليوم السابع</small>
                        </p>
                        <h5 className="card-title">
                          لماذا قد لا تكون المقاعد المتكنة على الطائرات موجودة
                          قريبا؟
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-3 border-0">
                  <div className="row g-0 flex-column">
                    <div>
                      <img
                        src="images/single.png"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div>
                      <div className="card-body p-0">
                        <p className="card-text">
                          <img
                            style={{ marginLeft: 5 }}
                            src="images/news-label.png"
                            alt="label"
                          />
                          <small className="text-muted">اليوم السابع</small>
                        </p>
                        <h5 className="card-title">
                          لماذا قد لا تكون المقاعد المتكنة على الطائرات موجودة
                          قريبا؟
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-3 border-0">
                  <div className="row g-0 flex-column">
                    <div>
                      <img
                        src="images/single.png"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div>
                      <div className="card-body p-0">
                        <p className="card-text">
                          <img
                            style={{ marginLeft: 5 }}
                            src="images/news-label.png"
                            alt="label"
                          />
                          <small className="text-muted">اليوم السابع</small>
                        </p>
                        <h5 className="card-title">
                          فضيحة المنشطات الصينية تهز السباحة الأولمبية
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-3 border-0">
                  <div className="row g-0 flex-column">
                    <div>
                      <img
                        src="images/single.png"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div>
                      <div className="card-body p-0">
                        <p className="card-text">
                          <img
                            style={{ marginLeft: 5 }}
                            src="images/news-label.png"
                            alt="label"
                          />
                          <small className="text-muted">اليوم السابع</small>
                        </p>
                        <h5 className="card-title">
                          فضيحة المنشطات الصينية تهز السباحة الأولمبية
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-3 border-0">
                  <div className="row g-0 flex-column">
                    <div>
                      <img
                        src="images/single.png"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div>
                      <div className="card-body p-0">
                        <p className="card-text">
                          <img
                            style={{ marginLeft: 5 }}
                            src="images/news-label.png"
                            alt="label"
                          />
                          <small className="text-muted">اليوم السابع</small>
                        </p>
                        <h5 className="card-title">
                          فضيحة المنشطات الصينية تهز السباحة الأولمبية
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="jawlatt-single-news pt-3 px-0">
              <h3 className="fw-bold m-0 text-dark jawlatt-border-bottom">
                <svg
                  width={13}
                  height={25}
                  viewBox="0 0 13 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 12.48L12.48 0V24.96L0 12.48Z" fill="#D93932" />
                </svg>
                موضوعات تهمك
              </h3>
            </div>
            <div className="row jawlatt-right-image-left-text my-5">
              <div className="col-md-12">
                <div className="card mb-3 border-0">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                        src="images/newsImage.png"
                        className="img-fluid rounded-start"
                        alt="news"
                      />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold jawlatt-news-source">
                              <img
                                src="images/sky-news-round.png"
                                className="ms-2"
                              />
                              سكاي نيوز عربية
                            </p>
                          </a>
                          <a
                            className="jawlatt-hdr-lt-btn text-decoration-none text-white bg-dark fw-semibold"
                            href="# "
                            style={{ fontSize: "11.71px", padding: "4px 10px" }}
                          >
                            تمت المتابعة
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2 fs-6">
                          وزير الخارجية يلتقي مستشارة الرئيس الفرنسي لشؤون الشرق
                          الأوسط - ضمن سلسلة من اللقاءات الدولية لتعزيز العلاقات
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
                          <ul
                            className="p-0 me-3"
                            style={{ listStyleType: "disc" }}
                          >
                            <li>
                              <a
                                className="text-decoration-none fw-semibold text-end jawlatt-list-color"
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
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body jawlatt-card-body-space">
                      <h5
                        className="card-title mb-3 fw-semibold text-dark"
                        style={{ fontSize: "14.71px", lineHeight: "19.9px" }}
                      >
                        يرى ترامب أخيرًا عواقب فمه الكبير في محاكمة الصمت بشأن
                        الأموال.....
                      </h5>
                      <div className="jawlatt-mid-grey-card-content d-flex flex-row justify-content-between align-items-center">
                        <div className="card-text d-flex align-items-center gap-1">
                          <img
                            src="images/airline.png"
                            alt="Al Jazeera Logo"
                            width="28px"
                            height="28px"
                          />
                          <p className="fw-bold text-dark m-0 jawlatt-mid-text">
                            الجزيرة عربية
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
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body jawlatt-card-body-space">
                      <h5
                        className="card-title mb-3 text-dark fw-semibold"
                        style={{ fontSize: "14.71px", lineHeight: "19.9px" }}
                      >
                        يرى ترامب أخيرًا عواقب فمه الكبير في محاكمة الصمت بشأن
                        الأموال ......
                      </h5>
                      <div className="jawlatt-mid-grey-card-content d-flex flex-row justify-content-between align-items-center">
                        <div className="card-text d-flex align-items-center gap-1">
                          <img
                            src="images/mbc.png"
                            alt="MBC Logo"
                            width="28px"
                            height="28px"
                          />
                          <p className="text-dark fw-bold m-0 jawlatt-mid-text">
                            ام بي سي مصر
                            <br />
                            <span className="text-end fw-semibold jawlatt-span-text ">
                              منذ 7 ثانية
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
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body jawlatt-card-body-space">
                      <h5
                        className="fw-semibold text-dark"
                        style={{ fontSize: "14.71px", lineHeight: "19.9px" }}
                      >
                        يرى ترامب أخيرًا عواقب فمه الكبير في محاكمة الصمت بشأن
                        الأموال.....
                      </h5>
                      <div className="jawlatt-mid-grey-card-content d-flex flex-row justify-content-between align-items-center">
                        <div className="card-text d-flex align-items-center gap-1">
                          <img
                            src="images/sadaElBada.png"
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
              <div className="col-md-12">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                        src="images/group.png"
                        className="img-fluid rounded-start"
                        alt="news"
                      />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold jawlatt-news-source">
                              <img src="images/alzazera.png" className="ms-2" />
                              الجزيرة عربية
                            </p>
                          </a>
                          <a
                            className="jawlatt-hdr-lt-btn text-decoration-none text-white fw-semibold"
                            href="#"
                            style={{ fontSize: "11.71px", padding: "4px 10px" }}
                          >
                            تمت المتابعة
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2 fs-6">
                          إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون
                          موقف مصر
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
                          <ul
                            className="p-0 me-3"
                            style={{ listStyleType: "disc" }}
                          >
                            <li>
                              <a
                                className="text-decoration-none text-end fw-semibold jawlatt-list-color"
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
              <div className="col-md-12">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                        src="images/alon.png"
                        className="img-fluid rounded-start"
                        alt="news"
                      />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold  jawlatt-news-source">
                              <img
                                src="images/almashraly.png "
                                className="ms-2"
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2 fs-6">
                          اكتشف محبو Fallout بيضة عيد الفصح التي تثبت اهتمام العرض
                          المذهل بالتفاصيل - وهي تتضمن لعبة تقمص الأدوار الأصلية  
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
                          <ul
                            className="p-0 me-3"
                            style={{ listStyleType: "disc" }}
                          >
                            <li>
                              <a
                                className="text-decoration-none text-end fw-semibold jawlatt-list-color"
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
              <div className="col-md-12">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                        src="images/watch.png"
                        className="img-fluid rounded-start"
                        alt="news"
                      />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold jawlatt-news-source">
                              <img
                                src="images/Group 67101.png"
                                className="ms-2 jawlatt-img-size"
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                          <a
                            className="jawlatt-hdr-lt-btn text-decoration-none text-white fw-semibold"
                            href="#"
                            style={{ fontSize: "11.71px", padding: "4px 10px" }}
                          >
                            تمت المتابعة
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2 fs-6">
                          احصل على الأناقة والرقي في ساعة واحدة. نقدم لك ساعة
                          رجالية من المجموعة الأكثر تألقًا، تجمع بين الحداثة
                          والكلاسيكية ليناسب كل الأذواق.
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
                          <ul
                            className="p-0 me-3"
                            style={{ listStyleType: "disc" }}
                          >
                            <li>
                              <a
                                className="text-decoration-none text-end fw-semibold jawlatt-list-color"
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
              <div className="col-md-12">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                        src="images/Mask group (15).png"
                        className="img-fluid rounded-start"
                        alt="news"
                      />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold jawlatt-news-source">
                              <img
                                src="images/Group 1209.png"
                                className="ms-2 jawlatt-img-size"
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2 fs-6">
                          إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون
                          موقف مصر
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
                          <ul className="p-0" style={{ listStyleType: "disc" }}>
                            <li>
                              <a
                                className="text-decoration-none text-end fw-semibold jawlatt-list-color"
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
              <div className="col-md-12">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                        src="images/Mask group (3).png"
                        className="img-fluid rounded-start"
                        alt="news"
                      />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-start fw-semibold jawlatt-news-source">
                              <img
                                src="images/Group 1209.png"
                                className="ms-2 jawlatt-img-size"
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2 fs-6">
                          إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون
                          موقف مصر
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
                          <ul
                            className="p-0 me-3"
                            style={{ listStyleType: "disc" }}
                          >
                            <li>
                              <a
                                className="text-decoration-none fw-semibold text-end jawlatt-list-color"
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
            <div
              className="row jawlatt-right-image-left-text"
              style={{ margin: "32px 0 25px 0", paddingBottom: 25 }}
            >
              <div className="col-md-12">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                        src="images/Mask group (4).png"
                        className="img-fluid rounded-start"
                        alt="news"
                      />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold  jawlatt-news-source">
                              <img
                                src="images/Group 1209.png"
                                className="ms-2 jawlatt-img-size"
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2 fs-6">
                          إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون
                          موقف مصر
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
                          <ul
                            className="p-0 me-3"
                            style={{ listStyleType: "disc" }}
                          >
                            <li>
                              <a
                                className="text-decoration-none text-end fw-semibold jawlatt-list-color"
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
              <div
                className="col-md-12 py-5 px-0"
                style={{ backgroundColor: "#F6F8F8", borderRadius: 8 }}
              >
                <div className="jawlatt-single-news pt-3">
                  <h3 classname="text-dark fw-bold m-0 jawlatt-news-small-title">
                    549 |
                    <svg
                      width="{13}"
                      height="{25}"
                      viewBox="0 0 13 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 12.48L12.48 0V24.96L0 12.48Z" fill="#EA5153" />
                    </svg>
                    موضوعات تهمك
                  </h3>
                </div>
                <div className="jawlatt-news-image">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="card1 pb-4 bg-white">
                        <img
                          src="./images/hospital-img.png"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="jawlatt-card1-heading px-2">
                          <h4 className="mt-2 px-1 jawlatt-right-border">
                            إعلان
                          </h4>
                          <p>أسرة ذكية بأسعار مذهلة في مصر - لا تفوت الفرصة</p>
                          <a
                            href="#"
                            className="text-decoration-none jawlatt-time-text "
                          >
                            {" "}
                            ذكية بأسعار
                          </a>{" "}
                          <button className="btn border me-4">ابحث الآن</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card1 pb-4 bg-white">
                        <img
                          src="./images/radio-img.png"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="jawlatt-card1-heading px-2">
                          <h4 className="mt-2 px-1 jawlatt-right-border">
                            إعلان
                          </h4>
                          <p>أسرة ذكية بأسعار مذهلة في مصر - لا تفوت الفرصة</p>
                          <a
                            href="#"
                            className="text-decoration-none  jawlatt-time-text"
                          >
                            {" "}
                            ذكية بأسعار
                          </a>{" "}
                          <button className="btn border me-4">ابحث الآن</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card1 pb-4 bg-white">
                        <img
                          src="./images/bedroom-img1.png"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="jawlatt-card1-heading px-2">
                          <h4 className="mt-2 px-1 jawlatt-right-border">
                            إعلان
                          </h4>
                          <p>أسرة ذكية بأسعار مذهلة في مصر - لا تفوت الفرصة</p>
                          <a
                            href="#"
                            className="text-decoration-none jawlatt-time-text "
                          >
                            {" "}
                            ذكية بأسعار
                          </a>{" "}
                          <button className="btn border me-4">ابحث الآن</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card1 pb-4 bg-white">
                        <img
                          src="./images/Ac-img.png"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="jawlatt-card1-heading px-2">
                          <h4 className="mt-2 px-1 jawlatt-right-border">
                            إعلان
                          </h4>
                          <p>أسرة ذكية بأسعار مذهلة في مصر - لا تفوت الفرصة</p>
                          <a
                            href="#"
                            className="text-decoration-none jawlatt-time-text "
                          >
                            {" "}
                            ذكية بأسعار
                          </a>{" "}
                          <button className="btn border me-4">ابحث الآن</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-start pt-3">للإعلان معنا</p>
                </div>
              </div>
            </div>
            <div className="jawlatt-single-news pt-3 px-0">
              <h3 className="fw-bold m-0 text-dark jawlatt-border-bottom">
                <svg
                  width={13}
                  height={25}
                  viewBox="0 0 13 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 12.48L12.48 0V24.96L0 12.48Z" fill="#D93932" />
                </svg>
                موضوعات تهمك
              </h3>
            </div>
            <div className="row jawlatt-right-image-left-text jawlatt-border-line">
              <div className="col-md-12 px-0">
                <div className="card mb-0 border-0">
                  <div className="row g-0">
                    <div className="col-md-2 jawlatt-img ">
                      <a href="#">
                        <img
                          src="images/Mask group (9).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body p-0 px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold ">
                              <img
                                src="images/images 3.png"
                                className="ms-2 jawlatt-img-size"
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
                            الحكومة الجديدة - تركز الحكومة على بناء اقتصاد تنافسي
                            وجاذب للاستثمار
                          </a>
                        </h2>
                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end">
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
                          src="images/Mask group (6).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10">
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
                        <h2 className="card-title fw-bolder">
                          <a
                            href="#"
                            className="text-decoration-none text-dark fs-5 lh-sm mt-2"
                          >
                            مجلس الوزراء يناقش تحسين حياة المواطن في برنامج
                            الحكومة الجديدة - تركز الحكومة على بناء اقتصاد تنافسي
                            وجاذب للاستثمار
                          </a>
                        </h2>
                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end">
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
                          src="images/Mask group (5).png"
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
                        <h2 className="card-title fw-bolder">
                          <a
                            href="#"
                            className="text-decoration-none text-dark fs-5 lh-sm mt-2"
                          >
                            جيمي كيميل يذهل زيندايا عندما يكشف أنه ربح 12 ألف
                            دولار في مراهنته عليها في فيلم "الرقص مع النجوم" |
                            فيديو
                          </a>
                        </h2>
                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end">
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
                          src="images/Mask group (12).png"
                          className="img-fluid rounded-start"
                          alt="news"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card-body p-0 px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0 text-end fw-semibold ">
                              <img
                                src="images/images 3.png"
                                style={{ width: 30 }}
                                className="ms-2"
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
                            دولار في مراهنته عليها في فيلم "الرقص مع النجوم" |
                            فيديو
                          </a>
                        </h2>
                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end">
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
                    <div className="col-md-10 mt-4">
                      <div className="card-body p-0  px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0  text-end fw-semibold jawlatt-news-source">
                              <img
                                src="images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2 fs-6">
                          مصر تصدر أول عقود لتصدير الوقود الأخضر إلى أوروبا بقيمة
                          397 مليون يورو - مكاسب كبيرة لتوطين الصناعات المرتبطة
                          بالهيدروجين الأخضر
                        </h2>
                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end">
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
                          <ul className="p-0" style={{ listStyleType: "disc" }}>
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
                    <div className="col-md-10 mt-4">
                      <div className="card-body p-0  px-3">
                        <div className="d-flex gap-2 align-items-center">
                          <a className="d-block text-decoration-none" href="#">
                            <p className="m-0  text-end fw-semibold jawlatt-news-source">
                              <img
                                src="images/images 3.png"
                                className="ms-2 jawlatt-img-size"
                              />
                              الجزيرة عربية
                            </p>
                          </a>
                        </div>
                        <h2 className="card-title fw-bolder mt-2 fs-6">
                          مصر تصدر أول عقود لتصدير الوقود الأخضر إلى أوروبا بقيمة
                          397 مليون يورو - مكاسب كبيرة لتوطين الصناعات المرتبطة
                          بالهيدروجين الأخضر
                        </h2>
                        <div className="jawlatt-bnr-mid-btm d-flex flex-row-reverse justify-content-end">
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
                          <ul className="p-0" style={{ listStyleType: "disc" }}>
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
              <div
                className="col-md-12 py-5 px-0"
                style={{ backgroundColor: "#F6F8F8", borderRadius: 8 }}
              >
                <div className="jawlatt-single-news pt-3">
                  <h3 classname="text-dark fw-bold m-0 jawlatt-news-small-title">
                    549 |
                    <svg
                      width="{13}"
                      height="{25}"
                      viewBox="0 0 13 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 12.48L12.48 0V24.96L0 12.48Z" fill="#EA5153" />
                    </svg>
                    موضوعات تهمك
                  </h3>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="card jawlatt-card-box">
                      <a href="#">
                        <img
                          src="./images/barnner-img4.1.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <p className="card-text jawlatt-card-text">
                          والجاف بلون اسود / ازرق براون ماكينة حلاقة للاستخدام
                          الرطب برو سكينة الشحن
                        </p>
                        <a href="#" className=" text-decoration-none">
                          {" "}
                          <sup>00</sup> 2934{" "}
                          <span className="jawlatt-font-size-10">جنيه</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card jawlatt-card-box">
                      <a href="#">
                        <img
                          src="./images/barnner-img3.1.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <p className="card-text jawlatt-card-text">
                          والجاف بلون اسود / ازرق براون ماكينة حلاقة للاستخدام
                          الرطب برو سكين دة الشحن
                        </p>
                        <a href="#" className="text-decoration-none ">
                          {" "}
                          <sup>00</sup> 3906{" "}
                          <span className="jawlatt-font-size-10">جنيه</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card jawlatt-card-box">
                      <a href="#">
                        <img
                          src="./images/barnner-img2.1.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <p className="card-text jawlatt-card-text">
                          والجاف بلون اسود / ازرق براون ماكينة حلاقة للاستخدام
                          الرطب برو سك لاعادة الشحن
                        </p>
                        <a href="#" className="text-decoration-none ">
                          {" "}
                          <sup>00</sup> 1295{" "}
                          <span className="jawlatt-font-size-10">جنيه</span>{" "}
                          <span className="text-decoration-line-through">
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
                          src="./images/barnner-img1.1.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <p className="card-text jawlatt-card-text">
                          والجاف بلون اسود / ازرق براون ماكينة حلاقة للاستخدام
                          الرطب برو سكين 3010 اس السلسلة 3 منماكينة حلاقة كهربائية
                          قابلة لاعادة الشحن
                        </p>
                        <a href="#" className="text-decoration-none ">
                          {" "}
                          <sup>00</sup> 2,499{" "}
                          <span className="jawlatt-font-size-10">جنيه</span>
                        </a>
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
                              <a href="#">
                                <i className="fa-solid fa-book" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-bookmark" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa-solid fa-share" />
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
                            الأصلية  
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
            <div className="row">
              <div className="col-md-12 text-center p-5">
                <img src="/images/Vector (2).png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-3 jawlatt-bnr-top-lt">
            <div className="card mb-3 jawlatt-card-border">
              <div className="card-header pb-0">
                <h5 className="card-title text-end mb-0" dir="ltr">
                  أخبار مصر
                  <i className="fa-solid fa-caret-left ml-4 jawlatt-text-red" />
                </h5>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item pr-0">
                    <div className="d-flex gap-2">
                      <a className="d-block text-decoration-none" href="#">
                        <p className="m-0 fw-bold text-start jawlatt-card-fs">
                          <img style={{ width: 20 }} src="images/sky-news.png" />
                          سكاي نيوز عربية
                        </p>
                      </a>
                      <ul className="p-0 jawlatt-card-body-badge">
                        <li>
                          <a href="#">رياضة</a>
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="text-decoration-none">
                      إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون موقف
                      مصر
                    </a>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex gap-2">
                      <a className="d-block text-decoration-none" href="#">
                        <p className="m-0 fw-bold text-start jawlatt-card-fs">
                          <img style={{ width: 20 }} src="images/sky-news.png" />
                          سكاي نيوز عربية
                        </p>
                      </a>
                      <ul className="p-0 jawlatt-card-body-badge">
                        <li>
                          <a href="#">رياضة</a>
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="text-decoration-none">
                      إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون موقف
                      مصر
                    </a>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex gap-2">
                      <a className="d-block text-decoration-none" href="#">
                        <p className="m-0 fw-bold text-start jawlatt-card-fs">
                          <img style={{ width: 20 }} src="images/sky-news.png" />
                          سكاي نيوز عربية
                        </p>
                      </a>
                      <ul className="p-0 jawlatt-card-body-badge">
                        <li>
                          <a href="#">رياضة</a>
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="text-decoration-none">
                      إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون موقف
                      مصر
                    </a>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex gap-2">
                      <a className="d-block text-decoration-none" href="#">
                        <p className="m-0 fw-bold text-start jawlatt-card-fs">
                          <img style={{ width: 20 }} src="images/sky-news.png" />
                          سكاي نيوز عربية
                        </p>
                      </a>
                      <ul className="p-0 jawlatt-card-body-badge">
                        <li>
                          <a href="#">رياضة</a>
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="text-decoration-none">
                      إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون موقف
                      مصر
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" mb-3">
              <img
                src="images/news-ad.png"
                className="card-img-top"
                alt="NewsAd"
              />
            </div>
            <div className="card-body px-3 jawlatt-card-border ">
              <ul className="list-group mt-3">
                <li className="list-group-item pr-0 border-0">
                  <div className="d-flex gap-2">
                    <a
                      className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                      href="#"
                    >
                      <p className="m-0 fw-bold text-start jawlatt-card-fs">
                        <img
                          style={{ width: 20, marginLeft: 6 }}
                          src="images/Group 1197.png"
                        />
                        اليوم السابع
                      </p>
                      <div className="plus">
                        <img
                          src="./images/Group 1304.png"
                          alt=""
                          style={{ width: 20 }}
                        />
                      </div>
                    </a>
                  </div>
                </li>
                <li className="list-group-item pr-0 border-0">
                  <div className="d-flex gap-2">
                    <a
                      className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                      href="#"
                    >
                      <p className="m-0 fw-bold text-start jawlatt-card-fs">
                        <img
                          style={{ width: 20, marginLeft: 6 }}
                          src="images/Group 1198.png"
                        />
                        سكاي نيوز عربية
                      </p>
                      <div className="plus">
                        <img
                          src="./images/Group 1304.png"
                          alt=""
                          style={{ width: 20 }}
                        />
                      </div>
                    </a>
                  </div>
                </li>
                <li className="list-group-item pr-0 border-0">
                  <div className="d-flex gap-2">
                    <a
                      className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                      href="#"
                    >
                      <p className="m-0 fw-bold text-start jawlatt-card-fs">
                        <img
                          style={{ width: 20, marginLeft: 6 }}
                          src="images/Group 1205.png"
                        />
                        مصراوي
                      </p>
                      <div className="plus">
                        <img
                          src="./images/Group 1304.png"
                          alt=""
                          style={{ width: 20 }}
                        />
                      </div>
                    </a>
                  </div>
                </li>
                <li className="list-group-item pr-0 border-0">
                  <div className="d-flex gap-2">
                    <a
                      className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                      href="#"
                    >
                      <p className="m-0 fw-bold text-start jawlatt-card-fs">
                        <img
                          style={{ width: 20, marginLeft: 6 }}
                          src="images/Group 1206.png"
                        />
                        الجزيرة
                      </p>
                      <div className="plus">
                        <img
                          src="./images/Group 1304.png"
                          alt=""
                          style={{ width: 20 }}
                        />
                      </div>
                    </a>
                  </div>
                </li>
                <li className="list-group-item pr-0 border-0">
                  <div className="d-flex gap-2">
                    <a
                      className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                      href="#"
                    >
                      <p className="m-0 fw-bold text-start jawlatt-card-fs">
                        <img
                          style={{ width: 20, marginLeft: 6 }}
                          src="images/Group 1207.png"
                        />
                        المصري اليوم
                      </p>
                      <div className="plus">
                        <img
                          src="./images/Group 1304.png"
                          alt=""
                          style={{ width: 20 }}
                        />
                      </div>
                    </a>
                  </div>
                </li>
                <li className="list-group-item pr-0 border-0">
                  <div className="d-flex gap-2">
                    <a
                      className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                      href="#"
                    >
                      <p className="m-0 fw-bold text-start jawlatt-card-fs">
                        <img
                          style={{ width: 20, marginLeft: 6 }}
                          src="images/Group 1208.png"
                        />
                        سكاي نيوز عربية
                      </p>
                      <div className="plus">
                        <img
                          src="./images/Group 1304.png"
                          alt=""
                          style={{ width: 20 }}
                        />
                      </div>
                    </a>
                  </div>
                </li>
                <li className="list-group-item pr-0 border-0">
                  <div className="d-flex gap-2">
                    <a
                      className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                      href="#"
                    >
                      <p className="m-0 fw-bold text-start jawlatt-card-fs">
                        <img
                          style={{ width: 20, marginLeft: 6 }}
                          src="images/Group 1209.png"
                        />
                        الحدث اليوم
                      </p>
                      <div className="plus">
                        <img
                          src="./images/Group 1304.png"
                          alt=""
                          style={{ width: 20 }}
                        />
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
              <div className="detail-btn mt-2  text-center">
                <button className="text-white border-0 jawlatt-bg-red jawlatt-detail-btn-border">
                  المزيد
                </button>
              </div>
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
                    src="/images/image 1 (4).png"
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
                  <i className="fa-brands fa-tiktok" />
                </a>
                <a href="#" className="text-dark">
                  <i className="fa-brands fa-youtube" />
                </a>
                <a href="#" className="text-dark">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#" className="text-dark">
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="#" className="text-dark">
                  <i className="fa-brands fa-x-twitter" />
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
    </>
  )

  