export const contact = () => (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contact Pages</title>
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
        <div className="row jawlatt-bnr-top">
          <div className="col-md-9 jawlatt-bnr-top-mid jawlatt-bnr-top-rt">
            <div className="jawlatt-single-news pt-3">
              <h3 className="mb-0 pb-2 fw-bold text-dark jawlatt-news-title">
                <svg
                  width={13}
                  height={25}
                  viewBox="0 0 13 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 12.48L12.48 0V24.96L0 12.48Z" fill="#EA5153" />
                </svg>
                تواصل معنا
              </h3>
              <p className="jawlatt-heading-subheading">
                تواصل معنا لمناقشة احتياجات رفاهية موظفيك اليوم. يرجى الاتصال بنا{" "}
                <br />
                أو إرسال بريد إلكتروني إلينا أو ملء نموذج الاتصال وسنقوم بالرد
                عليك.
              </p>
            </div>
            <div className="jawlatt-form-title">
              <h2 className=" mb-4 fw-bold" style={{ fontSize: "29.63px" }}>
                يسعدنا ان نستمع لآرائك
              </h2>
              <p className="text-muted  mb-4">*لن يتم نشر بريدك الإلكتروني.</p>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white border-0 rounded p-3"
                        id="name"
                        placeholder="الإسم"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white border-0 rounded p-3"
                        id="phone"
                        placeholder="رقم الهاتف"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control bg-white border-0 rounded p-3"
                    id="email"
                    placeholder="الايميل الإلكتروني"
                  />
                </div>
                <div className="form-group mb-4">
                  <textarea
                    className="form-control bg-white border-0 rounded p-3 "
                    id="message"
                    placeholder="رسالتك"
                    rows={4}
                    defaultValue={""}
                  />
                </div>
                <div className="text-start pb-5">
                  <button
                    type="submit"
                    className="btn fw-bold text-white Jawlatt-submit-btn "
                  >
                    ارسال
                  </button>
                </div>
              </form>
            </div>
            <div className="row" style={{ maxWidth: 720 }}>
              <div className="col-md-4  ">
                <div className="jawlatt-contact-box d-flex gap-3">
                  <div className="jawlatt-icon">
                    <i className="fa-solid fa-house mt-3 jawlatt-icon-red" />
                  </div>
                  <div className="jawlatt-heading">
                    <h4 className="jawlatt-heading-title">العنوان</h4>
                    <a
                      href="#"
                      className="text-decoration-none fw-normal jawlatt-heading-subtitle"
                    >
                      شارع احمد بن عبد العزيز، جدةالمملكة العربية السعودية
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jawlatt-contact-box d-flex gap-3">
                  <div className="jawlatt-icon">
                    <i className="fa-solid fa-envelope mt-3 jawlatt-icon-red" />
                  </div>
                  <div className="jawlatt-heading">
                    <h4 className="jawlatt-heading-title">البريد الإلكتروني</h4>
                    <a
                      href="#"
                      className="text-decoration-none fw-normal jawlatt-heading-subtitle"
                    >
                      info@Jawlatt.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="jawlatt-contact-box d-flex gap-3">
                  <div className="jawlatt-icon">
                    <i className="fa-solid fa-phone mt-3 jawlatt-icon-red" />
                  </div>
                  <div className="jawlatt-heading">
                    <h4 className="jawlatt-heading-title">ارقام الهاتف</h4>
                    <a
                      href="#"
                      className="text-decoration-none fw-normal jawlatt-heading-subtitle"
                    >
                      +966 6666 3350 <br />
                      +966 6666 3350
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 jawlatt-bnr-top-lt">
            <div className="jawlatt-news-image">
              <img
                src="images/Screenshot 2024-04-20 at 3.19 1.png"
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
  