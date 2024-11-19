const Sidebar = ({ children }) => {
  return (
    <>
      <div className="jawlatt-bnr-top-lt">
        {children}
        <div className="jawlatt-news-image my-5">
          <div className="jawlatt-bg-light position-relative rounded-pill rounded-end p-3">
            <h4 className="fw-bold jawlatt-fs-1531 mb-1">تطبيق عربي</h4>
            <p className="jawlatt-fs-945 mb-1">
              حمل التطبيق الآن وتمتع بميزات عديدة
            </p>
            <a href="#" className="ms-1">
              <img src="/images/App Store.png" alt="" />
            </a>
            <a href="#">
              <img src="/images/App Store (1).png" alt="" />
            </a>
            <div className="sidebar-mobile">
              <img
                src="/images/image 1 (4).png"
                alt="img"
                className="img-fluid"
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
