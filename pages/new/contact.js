import Header from "@/partials/header";
import Sidebar from "@/partials/sidebar";

const Contact = () => {
  return (
    <>
      <Header />
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
                تواصل معنا لمناقشة احتياجات رفاهية موظفيك اليوم. يرجى الاتصال
                بنا <br />
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
          <Sidebar>
            <div className="jawlatt-news-image">
              <img
                src="images/Screenshot 2024-04-20 at 3.19 1.png"
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

export default Contact;
