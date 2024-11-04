const Sidebar = ({ children }) => {
  return (
    <>
      <div className="col-md-3 jawlatt-bnr-top-lt">
        {children}
        <div className="jawlatt-news-image my-5">
          <div className="row jawlatt-bg-light">
            <div className="col-8">
              <h4 className="pt-2 fw-bold jawlatt-fs-1531">تطبيق عربي</h4>
              <p className="jawlatt-fs-945">
                حمل التطبيق الآن وتمتع بميزات عديدة
              </p>
              <a href="#" className="ms-1">
                <img src="/images/App Store.png" alt="" />
              </a>
              <a href="#">
                <img src="/images/App Store (1).png" alt="" />
              </a>
            </div>
            <div className="col-4 ">
              <img
                src="/images/image 1 (4).png"
                alt=""
                width="120px"
                className="img-fluid "
              />
            </div>
          </div>
        </div>
        <div className="jawlatt-news-image mt-5">
          <div className="jawlatt-social-link">
            <a href="#">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
          <p className="pt-4 text-center">
            الشروط وسياسة الخصوصية لوحة معلومات الخصوصية يعلن حول إعلاناتنا
            وظائفي © 2024 خبر الإخبارية. كل الحقوق محفوظة.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
