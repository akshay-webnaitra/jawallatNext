import React from "react";

const AuthFooter = () => {
  return (
    <>
      <div className="container mb-md-5">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="footer-social-link">
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
            <p className="text-center mt-2">
              الشروط وسياسة الخصوصية © 2024 عربي الإخبارية. كل الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthFooter;
