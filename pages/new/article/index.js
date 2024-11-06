import Sidebar from "@/partials/v2/Sidebar";
import NewsItem from "@/components/v2/NewsItem";
import CategorySlider from "@/components/v2/CategorySlider";
import MainLayout from "layout/mainLayout";
import GreenCaret from "@/components/v2/GreenCaret";
import SkyNews from "assets/images/sky-news-round.png";
import NewsAdd from "assets/images/news-ad.png";
import Group from "assets/images/group 1197.png";
import Plus from "assets/images/group 1304.png";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import Headphone from "@/components/v2/icons/headphone";
import PlayBtn from "@/components/v2/icons/playbtn";
import SocialIconOne from "@/components/v2/icons/socialIcon1";
import SocialIconTwo from "@/components/v2/icons/socialIcon2";
import SocialIconThree from "@/components/v2/icons/socialIcon3";
import Banner from "../../../assets/images/article-banner.png";
import RedCaret from "@/components/v2/RedCaret";
import Share from "@/components/v2/icons/share";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const Article = () => {
  const data = [
    {
      title: " اليوم السابع",
    },
    {
      title: " سكاي نيوز عربية",
    },
    {
      title: " مصراوي",
    },
    {
      title: "  الجزيرة",
    },
    {
      title: "  المصري اليوم",
    },
    {
      title: "  سكاي نيوز عربية",
    },
    {
      title: " الحدث اليوم",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row g-3 mt-5">
          {/* right side */}
          <div className="col-md-9">
            <div className="ps-sm-5">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center gap-2 ps-2">
                  <img
                    src={SkyNews.src}
                    style={{ width: 35, height: 35 }}
                    alt="img"
                    className="rounded-circle"
                  />
                  <p className="fs-14 m-0">المتابعون</p>
                </div>
                <div className="d-flex align-items-center gap-2 border-end pe-2">
                  <p className="fs-14 fw-semibold m-0">34k</p>
                  <p className="fs-14 m-0">المتابعون</p>
                  <button className="btn arab24-bg-black text-white fs-12  p-0 px-2">
                    + متابعة
                  </button>
                </div>
              </div>
              <h2 style={{ fontSize: 38 }} className="fw-bold">
                إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون موقف مصر
              </h2>
              <div className="d-flex align-items-center gap-4 arab24-newsItem-card my-3 flex-wrap">
                <ul style={{ listStyleType: "disc" }} className="m-0 p-0">
                  <li className="dot me-4">
                    <p className="m-0 text-dark-red">قبل 6 ساعات</p>
                  </li>
                </ul>
                <p className="m-0">قبل 6 ساعات</p>
                <p className="d-flex align-items-center gap-1 m-0">
                  23
                  <SocialIconThree />
                </p>
                <p className="d-flex align-items-center gap-1 m-0">
                  23
                  <SocialIconTwo />
                </p>
                <p className="d-flex align-items-center gap-1 m-0">
                  23
                  <SocialIconOne />
                </p>
                <div
                  style={{ fontSize: 8 }}
                  className="text-white fw-medium d-flex arab24-btn-red align-items-center gap-2 rounded-pill px-1 py-1 ps-2"
                >
                  <PlayBtn />
                  123
                  <Headphone />
                </div>
                <a href="#">
                  <Share />
                </a>
              </div>
              <div className="article">
                <div className="article-banner mb-3">
                  <img src={Banner.src} alt="img" />
                </div>
                <p>
                  في ظل الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي، بنيامين
                  نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي قدماً في
                  هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف الجانب
                  المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل تخوفات
                  الجانب الأميركي من "العواقب الكارثية" على المدنيين.في ظل
                  الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي، بنيامين
                  نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي قدماً في
                  هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف الجانب
                  المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل تخوفات
                  الجانب الأميركي من "العواقب الكارثية" على المدنيين.في ظل
                  الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي، بنيامين
                  نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي قدماً في
                  هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف الجانب
                  المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل تخوفات
                  الجانب الأميركي من "العواقب الكارثية" على المدنيين.في ظل
                  الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي، بنيامين
                  نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي قدماً في
                  هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف الجانب
                  المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل تخوفات
                  الجانب الأميركي من "العواقب الكارثية" على المدنيين.في ظل
                  الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي، بنيامين
                  نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي قدماً في
                  هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف الجانب
                  المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل تخوفات
                  الجانب الأميركي من "العواقب الكارثية" على المدنيين.في ظل
                  الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي، بنيامين
                  نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي قدماً في
                  هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف الجانب
                  المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل تخوفات
                  الجانب الأميركي من "العواقب الكارثية" على المدنيين.في ظل
                  الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي، بنيامين
                  نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي قدماً في
                  هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف الجانب
                  المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل تخوفات
                  الجانب الأميركي من "العواقب الكارثية" على المدنيين.في ظل
                  الحديث عن مناقشات بين رئيس الوزراء الإسرائيلي، بنيامين
                  نتانياهو، الجمعة، مع الولايات المتحدة بشأن المُضي قدماً في
                  هجوم بري على رفح بجنوب غزة، تظهر تساؤلات بشأن موقف الجانب
                  المصري من العملية وردود الفعل المتوقعة، لا سيما في ظل تخوفات
                  الجانب الأميركي من "العواقب الكارثية" على المدنيين.
                </p>
                <div className="d-flex flex-wrap gap-2 mb-2">
                  <span
                    style={{ background: "#f7f7f7" }}
                    className="rounded-pill p-1 px-3"
                  >
                    وردود الفع
                  </span>
                  <span
                    style={{ background: "#f7f7f7" }}
                    className="rounded-pill p-1 px-3"
                  >
                    وردود الفع
                  </span>
                  <span
                    style={{ background: "#f7f7f7" }}
                    className="rounded-pill p-1 px-3"
                  >
                    وردود الفع
                  </span>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span
                    style={{ background: "#f7f7f7" }}
                    className="rounded-pill p-1 px-3"
                  >
                    وردود الفع
                  </span>
                  <span
                    style={{ background: "#f7f7f7" }}
                    className="rounded-pill p-1 px-3"
                  >
                    وردود الفع
                  </span>
                </div>
              </div>
              <div className="border-bottom pb-3 mt-5">
                <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
                  <RedCaret />| اقتصاد
                </h3>
              </div>
              <div>
                {[...Array(3)].map(() => (
                  <NewsItem green />
                ))}
              </div>
            </div>
          </div>
          {/* left side */}
          <div className="col-md-3 jawlatt-bnr-top-lt">
            <div className="card mb-3 jawlatt-card-border rounded-4">
              <div className="card-header py-3 pb-0">
                <h5 className="card-title fw-bold text-end mb-0" dir="ltr">
                  أخبار مصر
                  <i className="fa-solid fa-caret-left ms-2  jawlatt-text-red" />
                </h5>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {[...Array(4)].map(() => (
                    <li className="list-group-item pr-0">
                      <div className="d-flex align-items-center gap-2">
                        <a className="d-block text-decoration-none" href="#">
                          <p className="m-0 fw-bold text-start jawlatt-card-fs">
                            <img
                              style={{ width: 20 }}
                              src={SkyNews.src}
                              alt="img"
                              className="ms-1"
                            />
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
                        إسرائيل تبحث مع واشنطن بدء عملية رفح.. وخبراء يناقشون
                        موقف مصر
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-md-4 mb-3">
              <img src={NewsAdd.src} className="card-img-top" alt="NewsAd" />
            </div>
            <div className="card mb-3 jawlatt-card-border rounded-4">
              <div className="card-header py-3 pb-0">
                <h5 className="card-title fw-bold text-end mb-0" dir="ltr">
                  أخبار مصر
                  <i className="fa-solid fa-caret-left ms-2  jawlatt-text-red" />
                </h5>
              </div>
              <div className="card-body p-3">
                <ul className="list-group ">
                  {data.map((item, i) => (
                    <li key={i} className="list-group-item py-2 px-0 border-0">
                      <div className="d-flex gap-2">
                        <a
                          className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
                          href="#"
                        >
                          <p
                            className="m-0 fw-bold text-start"
                            style={{ fontSize: "15px" }}
                          >
                            <img
                              style={{ width: 20, marginLeft: 6 }}
                              src={Group.src}
                            />
                            {item.title}
                          </p>
                          <div className="plus">
                            <img
                              src={Plus.src}
                              alt="img"
                              style={{ width: 20 }}
                            />
                          </div>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="detail-btn mb-3  text-center">
                <button className="text-white px-3  border-0 jawlatt-bg-red jawlatt-detail-btn-border fw-medium">
                  المزيد
                </button>
              </div>
            </div>
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </>
  );
};

Article.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default Article;
