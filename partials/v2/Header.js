const Header = () => {
  return (
    <header className="pt-4 pb-4 mb-3">
      <div className="container">
        <div className="announcement-bar col-12 mb-5">
          <p
            style={{
              color: "#7D7D7D",
              fontSize: "12.84px",
              fontWeight: 500,
              lineHeight: "15.41px",
              textAlign: "left",
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
            <img src="/images/logo.png" className="img-fluid w-75" />
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
  );
};
export default Header;
