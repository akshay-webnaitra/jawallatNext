import MainLayout from "layout/mainLayout";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources, filterSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import "bootstrap-icons/font/bootstrap-icons.css";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import RedCaret from "@/components/v2/RedCaret";
import NewsImage from "../../../assets/images/bbc-logo.png";
import NotificationIconOne from "@/components/v2/icons/notificationIcon1";
import NotificationIconTwo from "@/components/v2/icons/notificationIcon2";
import NotificationIconThree from "@/components/v2/icons/notificationIcon3";
import NotificationIconFour from "@/components/v2/icons/notificationIcon4";
import NotificationIconFive from "@/components/v2/icons/notificationIcon5";
import NotificationIconSix from "@/components/v2/icons/notificationIcon6";
import NotificationIconSeven from "@/components/v2/icons/notificationIcon7";
import NotificationIconEight from "@/components/v2/icons/notificationIcon8";
import NotificationIconNine from "@/components/v2/icons/notificationIcon9";
import NotificationIconTen from "@/components/v2/icons/notificationIcon10";
import DownArrow from "../../../assets/images/down-arrow.png";
import StarIconRed from "@/components/v2/icons/starIconRed";
import StarIconGray from "@/components/v2/icons/starIconGray";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { countrySelector, fetchAllCountries } from "@/slices/countries";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchNotificationSources,
  notificationSourcesSelector,
} from "@/slices/notificationSource";
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
  const { sources } = useSelector(notificationSourcesSelector);
  const dispatch = useDispatch();
  const handleSelectChange = (e) => {
    const countrySlug = e.target.value;
    setSelectedCountry(countrySlug);
    dispatch(fetchNotificationSources(countrySlug)); // Fetch live streams for selected country
  };
  const data = [
    {
      title: "اخبار",
      icon: <NotificationIconOne />,
    },
    {
      title: "اقتصاد",
      icon: <NotificationIconTwo />,
    },
    {
      title: "إسلاميات",
      icon: <NotificationIconThree />,
    },
    {
      title: "رياضة",
      icon: <NotificationIconFour />,
    },
    {
      title: "تكنولوجيا",
      icon: <NotificationIconFive />,
    },
    {
      title: "فيديو",
      icon: <NotificationIconTen />,
    },
    {
      title: "سفر",
      icon: <NotificationIconNine />,
    },
    {
      title: "صحة",
      icon: <NotificationIconEight />,
    },
    {
      title: "سفر",
      icon: <NotificationIconSeven />,
    },
    {
      title: "فن",
      icon: <NotificationIconSix />,
    },
  ];

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

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, []);
  useEffect(() => {
    if (selectedCountry) {
      dispatch(fetchNotificationSources(selectedCountry, ""));
    } else {
      dispatch(fetchNotificationSources()); // Fallback to fetch all sources if no country is selected
    }
  }, [dispatch, selectedCountry]);
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
              {data.map((item, index) => (
                <div key={index} className="notification-card text-center p-4">
                  {item.icon}
                  <p className="fs-20 fw-bold m-0 mt-1">{item.title}</p>
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
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className={`slick-slide ${index === 0 ? "first-slide" : ""}`}
                >
                  <button
                    className="btn text-nowrap fs-20 px-3 border"
                    style={{ borderRadius: 16, border: "2px solid #E5E5E5" }}
                  >
                    الحرب في غزة
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
            <div
              className="my-4 py-5 px-5"
              style={{ backgroundColor: "#F8F8F8", borderRadius: 13 }}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">الإسم</label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Ahmed"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">الايميل</label>
                    <div className="col-sm-10">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Ahmedmoftah@live.com"
                      />
                    </div>
                  </div>
                  <div className="row justify-content-end">
                    <div className="col-sm-10">
                      <button className="btn arabic24-bg-dark-red text-white px-1">
                        تعديل كلمة المرور
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
