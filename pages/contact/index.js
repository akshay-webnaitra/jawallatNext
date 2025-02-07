import Sidebar from "@/partials/v2/Sidebar";
import MainLayout from "layout/mainLayout";
import NewsAdd from "assets/images/news-ad.png";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import RedCaret from "@/components/v2/RedCaret";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { contactUs } from "@/slices/contactUs";
import { toast } from "react-toastify";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const ContactUs = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.name || !value.phone || !value.email || !value.message) {
      toast.error("Please fill in all the fields.");
      return;
    }

    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(value.phone)) {
      toast.error("Phone number must contain only numbers.");
      return;
    }

    let data = {
      name: value?.name,
      phone: value?.phone,
      email: value?.email,
      message: value?.message,
    };
    dispatch(
      contactUs(
        data,
        () => {
          setValue({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
        },
        () => {
          console.log("Error occurred, form not cleared.");
        }
      )
    );
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="row g-3 mt-3">
            {/* right side */}
            <div className="col-md-9">
              <div className="jawlatt-single-news pt-3">
                <h3 className="mb-0 pb-2 text-dark fw-bold d-flex gap-2 align-items-center jawlatt-news-title mb-4">
                  <RedCaret />
                  تواصل معنا
                </h3>
                <div className="row">
                  <div className="col-md-10">
                    <h5 className="fw-medium arab24-text-gray">
                      تواصل معنا لمناقشة احتياجات رفاهية موظفيك اليوم. يرجى
                      الاتصال بنا أو إرسال بريد إلكتروني إلينا أو ملء نموذج
                      الاتصال وسنقوم بالرد عليك.
                    </h5>
                    <div className="jawlatt-form-title mt-5">
                      <div className="px-sm-5">
                        <h2
                          className=" mb-2 fw-bold"
                          style={{ fontSize: "29.63px" }}
                        >
                          يسعدنا ان نستمع لآرائك
                        </h2>
                        <p className=" mb-5">*لن يتم نشر بريدك الإلكتروني.</p>
                        <form onSubmit={handleSubmit}>
                          <div className="row g-3 mb-3">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  value={value.name}
                                  onChange={handleChange}
                                  className="form-control bg-white shadow-none border rounded-0"
                                  id="name"
                                  placeholder="الإسم"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="phone"
                                  maxLength={14}
                                  value={value.phone}
                                  onChange={handleChange}
                                  className="form-control bg-white shadow-none border rounded-0"
                                  id="phone"
                                  placeholder="رقم الهاتف"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group mb-3">
                            <input
                              type="email"
                              name="email"
                              value={value.email}
                              onChange={handleChange}
                              className="form-control bg-white shadow-none border rounded-0"
                              id="email"
                              placeholder="الايميل الإلكتروني"
                            />
                          </div>
                          <div className="form-group mb-4">
                            <textarea
                              className="form-control bg-white shadow-none border rounded-0"
                              id="message"
                              name="message"
                              value={value.message}
                              onChange={handleChange}
                              placeholder="رسالتك"
                              rows={4}
                              defaultValue={""}
                            />
                          </div>
                          <div className="text-start pb-5">
                            <button
                              type="submit"
                              className="btn btn-dark rounded-pill px-5"
                            >
                              ارسال
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-sm-6 col-md-4">
                        <div className="d-flex gap-3 align-items-top">
                          <i className="fa-solid fa-house jawlatt-icon-red" />
                          <div className="jawlatt-heading p-0">
                            <h4 className="jawlatt-heading-title fw-semibold mb-2">
                              العنوان
                            </h4>
                            <p
                              className="arab24-text-gray"
                              style={{ lineHeight: "20px", fontSize: 15 }}
                            >
                              شارع احمد بن عبد العزيز، جدة المملكة العربية
                              السعودية
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <div className="d-flex gap-3 align-items-top">
                          <div className="jawlatt-icon">
                            <i className="fa-solid fa-envelope jawlatt-icon-red" />
                          </div>
                          <div className="jawlatt-heading p-0">
                            <h4 className="jawlatt-heading-title fw-semibold mb-2">
                              العنوان
                            </h4>
                            <p
                              className="arab24-text-gray"
                              style={{ lineHeight: "20px", fontSize: 15 }}
                            >
                              شارع احمد بن عبد العزيز، جدة المملكة العربية
                              السعودية
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <div className="d-flex gap-3 align-items-top">
                          <div className="jawlatt-icon">
                            <i className="fa-solid fa-phone jawlatt-icon-red" />
                          </div>
                          <div className="jawlatt-heading p-0">
                            <h4 className="jawlatt-heading-title fw-semibold mb-2">
                              العنوان
                            </h4>
                            <p
                              className="arab24-text-gray"
                              style={{ lineHeight: "20px", fontSize: 15 }}
                            >
                              شارع احمد بن عبد العزيز، جدة المملكة العربية
                              السعودية
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* left side */}
            <div className="col-md-3 jawlatt-bnr-top-lt">
              <div className="p-md-4 mb-3">
                <img src={NewsAdd.src} className="card-img-top" alt="NewsAd" />
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ContactUs.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default ContactUs;
