import MainLayout from "layout/mainLayout";
import { getSession, useSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { categoriesSelector, fetchCategories } from "@/slices/categories";
import { fetchSources, filterSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import "bootstrap-icons/font/bootstrap-icons.css";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import RedCaret from "@/components/v2/RedCaret";
import NewsImage from "../../../assets/images/bbc-logo.png";
import DownArrow from "../../../assets/images/down-arrow.png";
import StarIconRed from "@/components/v2/icons/starIconRed";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { countrySelector, fetchAllCountries } from "@/slices/countries";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addCategoryToUser,
  changePassword,
  fetchNotificationSources,
  notificationSourcesSelector,
} from "@/slices/notificationSource";
import { toast } from "react-toastify";
import ChangePassword from "@/components/notificationNewsSource/changePassword";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
    await store.dispatch(fetchAllCountries());
    await store.dispatch(fetchNotificationSources());
  }
);
const NewsSources = () => {
  const countries = useSelector(countrySelector);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();
  const { sources, changePasswordLoading } = useSelector(
    notificationSourcesSelector
  );
  const session = useSession();
  const [password, setPassword] = useState({
    old_password: "",
    new_password: "",
  });
  const { categories } = useSelector(categoriesSelector);
  const slider = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // adding category with user_id
  const handleMainCategorySelect = (id) => {
    const user_id = session?.data?.user?.id || null;
    const cat_id = id;
    dispatch(addCategoryToUser(user_id, cat_id));
  };

  // country and category select
  const handleSelectChange = (e) => {
    const countrySlug = e.target.value;
    setSelectedCountry(countrySlug);
    dispatch(fetchNotificationSources(countrySlug, selectedCategory));
  };
  const handleCategorySelect = (slug) => {
    setSelectedCategory(slug);
    dispatch(fetchNotificationSources(selectedCountry, slug));
  };

  // change password
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password?.old_password && !password?.new_password) {
      toast.error("Please enter a value in both fields.");
    } else if (!password?.old_password) {
      toast.error("Please enter your old password.");
    } else if (!password?.new_password) {
      toast.error("Please enter your new password.");
    } else {
      const passwordData = {
        old_password: password.old_password,
        new_password: password.new_password,
      };
      dispatch(changePassword(passwordData));
    }
  };

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, []);
  useEffect(() => {
    if (selectedCountry || selectedCategory) {
      dispatch(fetchNotificationSources(selectedCountry, selectedCategory));
    } else {
      dispatch(fetchNotificationSources());
    }
  }, [dispatch, selectedCountry, selectedCategory]);
  return (
    <>
      <section>
        <div className="container">
          <section>
            <div
              className="my-4 py-2 px-0"
              style={{ backgroundColor: "#F6F8F8", borderRadius: 8 }}
            >
              <h3 className="text-dark fw-bold m-0 fs-20">
                <RedCaret />
                موضوعات تهمك
              </h3>
            </div>
            <div className="grid-container">
              {Array.isArray(categories) &&
                categories.map((res, index) => (
                  <div
                    key={res?.cat_id}
                    className="notification-card text-center p-4"
                    onClick={() => handleMainCategorySelect(res?.cat_id)}
                  >
                    <p className="fs-20 fw-bold m-0 mt-1">{res?.cat_name}</p>
                  </div>
                ))}
            </div>
          </section>
          <section className="mt-5">
            <div
              className="my-4 py-2 px-0"
              style={{ backgroundColor: "#F6F8F8", borderRadius: 8 }}
            >
              <h3 className="text-dark fw-bold m-0 fs-20">
                <RedCaret />
                موضوعات تهمك
              </h3>
            </div>
            <h4 className="fs-20 fw-bold">إضافة موضوع</h4>
            <div className="row mt-2">
              <div className="col-md-6">
                <div className="d-flex gap-2">
                  <input
                    style={{ borderColor: "#00000045" }}
                    className="form-control shadow-none"
                    placeholder="الحرب في غزة"
                  />
                  <button className="btn btn-primary border-0 rounded-3 fs-18 px-4">
                    إضافة
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap gap-3 mt-4">
              {[...Array(10)].map((_, index) => (
                <button
                  key={index}
                  className="btn fs-20 px-3 position-relative notify-button"
                  style={{ borderRadius: 16, border: "2px solid #E5E5E5" }}
                >
                  الحرب في غزة
                  <span className="cross-icon fs-20 text-white rounded-circle">
                    x
                  </span>
                </button>
              ))}
            </div>
          </section>
          <section className="mt-5">
            <div
              className="my-4 py-2 px-0"
              style={{ backgroundColor: "#F6F8F8", borderRadius: 8 }}
            >
              <h3 className="text-dark fw-bold m-0 fs-20">
                <RedCaret />
                مصادر تم متابعتها
              </h3>
            </div>
            <h4 className="fs-20 fw-bold">الدولة</h4>
            <div className="mt-2 position-relative">
              <select
                className="form-select shadow-none pe-3 "
                style={{ border: "1px solid #00000045" }}
                onChange={handleSelectChange}
                value={selectedCountry}
              >
                <option value="" disabled selected>
                  Select a country
                </option>
                {Array.isArray(countries) &&
                  countries.map((res) => (
                    <option key={res?.id} value={res?.name}>
                      {res?.name}
                    </option>
                  ))}
              </select>
              <div className="down-arrow">
                <img src={DownArrow.src} alt="img" />
              </div>
            </div>
            <Slider {...slider} className="mt-4 blur-effect">
              {Array.isArray(categories) &&
                categories.map((res, index) => (
                  <div
                    key={res.cat_id}
                    className={`slick-slide ${
                      index === 0 ? "first-slide" : ""
                    }`}
                  >
                    <button
                      onClick={() => handleCategorySelect(res?.cat_slug)}
                      className="btn text-nowrap fs-20 px-3 border"
                      style={{
                        borderRadius: 16,
                        border: "2px solid #E5E5E5",
                        backgroundColor:
                          selectedCategory === res.cat_slug ? "#EA5153" : "",
                        color: selectedCategory === res.cat_slug ? "white" : "",
                      }}
                    >
                      {res?.cat_name}
                    </button>
                  </div>
                ))}
            </Slider>
            <div className="news-channel-container mt-3">
              {Array.isArray(sources) &&
                sources.map((item, index) => (
                  <div key={index} className="news-channel-card text-center">
                    <div className="news-channel-card-image mx-auto">
                      <img src={NewsImage.src} alt="img" />
                    </div>
                    <p className="fs-18 m-0 mt-2 mb-4">{item.name} </p>
                    <div className="star-icon">
                      {item.icon || <StarIconRed />}
                    </div>
                  </div>
                ))}
            </div>
          </section>
          <section className="mt-5">
            <div
              className="my-4 py-2 px-0"
              style={{ backgroundColor: "#F6F8F8", borderRadius: 8 }}
            >
              <h3 className="text-dark fw-bold m-0 fs-20">
                <RedCaret />
                موضوعات تهمك
              </h3>
            </div>
            <div
              className="my-4 py-5 px-5"
              style={{ backgroundColor: "#F8F8F8", borderRadius: 13 }}
            >
              <div className="row gy-3">
                <div className="col-md-7">
                  <p style={{ fontSize: 25 }} className="m-0">
                    تفعيل التنبيهات عبر المتصفح
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-3">
                    <button className="btn arabic24-bg-dark-red text-white px-5">
                      تفعيل
                    </button>
                    <button className="btn btn-dark px-5">إلغاء</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-5">
            <div
              className="my-4 py-2 px-0"
              style={{ backgroundColor: "#F6F8F8", borderRadius: 8 }}
            >
              <h3 className="text-dark fw-bold m-0 fs-20">
                <RedCaret />
                للإشتراك في خدمة الرسائل
              </h3>
            </div>
            <div
              className="my-4 py-5 px-5"
              style={{ backgroundColor: "#F8F8F8", borderRadius: 13 }}
            >
              <div className="row gy-3">
                <div className="col-md-7">
                  <p style={{ fontSize: 25 }} className="m-0">
                    تفعيل التنبيهات عبر المتصفح
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-3">
                    <button className="btn arabic24-bg-dark-red text-white px-5">
                      تفعيل
                    </button>
                    <button className="btn btn-dark px-5">إلغاء</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-5">
            <div
              className="my-4 py-2 px-0"
              style={{ backgroundColor: "#F6F8F8", borderRadius: 8 }}
            >
              <h3 className="text-dark fw-bold m-0 fs-20">
                <RedCaret />
                بيانات المستخدم
              </h3>
            </div>
            <ChangePassword
              changePasswordLoading={changePasswordLoading}
              handleSubmit={handleSubmit}
              password={password}
              setPassword={setPassword}
            />
          </section>
        </div>
      </section>
    </>
  );
};

NewsSources.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default NewsSources;
