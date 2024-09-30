import styles from "./style.module.css";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import JawlattLink from "@/components/JawlattLink";
import { decode } from "html-entities";
import Header from "@/partials/header";
import Footer from "@/partials/footer";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import MyNewsMediaCard from "@/components/myNewsMediaCard/index";
import MediaCard from "@/components/NewsMediaCard/index";
import Bitmap from "@/public/Bitmap-img.png";
import User from "@/public/user.png";
import Notification from "@/public/notification-bell.png";
import GoogleAds from "@/components/GoogleAds";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchNews, newsSelector } from "@/slices/news";
import { useDispatch, useSelector } from "react-redux";
import { fetchServerItem, serverItemSelector } from "@/slices/serverItems";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    let news = false;
    const session = await getSession(context);
    await store.dispatch(fetchCategories());
    await store.dispatch(
      fetchNews(
        context.query.newsSlug,
        "slug",
        (data) => {
          news = data;
        },
        session
      )
    );
    await store.dispatch(fetchServerItem());

    return {
      props: { data: news }, // will be passed to the page component as props
    };
  }
);

export default function MyNews() {
  return (
    <>
      <Header />

      <div className={"wrapper pt-0 " + styles.jawallat_home_top_wrapper}>
        <div className="container">
          <div className="w1 row g-3">
            <div className={styles.jawlatt_auther_top_box}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className={styles.jawlatt_news_auther}>
                      <div className={styles.jawlatt_auther_news_img}>
                        <img
                          src={User?.src}
                          height={90}
                          width={90}
                          alt="News Img"
                        />
                      </div>
                      <div className={styles.jawlatt_authernews_text}>
                        <p>مرحباً</p>
                        <a
                          href="#"
                          onClick={() => {
                            signOut();
                          }}
                        >
                          خروج
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.jawlatt_auther_newsSection}>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col className={"col-12 " + styles.jawlatt_auther_headTab}>
                    <Nav variant="pills">
                      <Nav.Link eventKey="second">
                        {" "}
                        <img src={Notification?.src} alt="" /> خدمة الرسائل{" "}
                      </Nav.Link>
                      <Nav.Link eventKey="first">
                        <img src={Bitmap?.src} alt="" /> أخبار مفضلة
                      </Nav.Link>
                    </Nav>
                  </Col>
                  <Col className="col-12">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div className={styles.jawlatt_auther_NewsPart}>
                          <div className="row">
                            <div className="col-12 col-lg-9">
                              <div className={styles.jawlatt_newsHead}>
                                <h1>أخبار</h1>
                              </div>
                              <div className={styles.jawlatt_newsCards}>
                                {/* <MyNewsMediaCard item={} />
                                <MyNewsMediaCard item={} />
                                <MyNewsMediaCard item={} />
                                <MyNewsMediaCard item={} />
                                <MyNewsMediaCard item={} />
                                <MyNewsMediaCard item={} /> */}
                              </div>
                            </div>
                            <div className="d-none d-lg-block col-12 col-lg-3">
                              <div className="full-img d-block">
                                <GoogleAds
                                  id="div-gpt-ad-1686735122756-0"
                                  slot="/29958771/New_Jaw_MPU_Desktop_04"
                                  width={300}
                                  height={250}
                                />
                              </div>
                              <div
                                className={
                                  "mb-4 " + styles.jawlatt_post_media_card
                                }
                              >
                                <div
                                  className={
                                    "redcolor_heading " +
                                    styles.jawlaat_card_badge_heading
                                  }
                                >
                                  <h4>الأكثر قراءة</h4>
                                </div>
                                <MediaCard />
                                <MediaCard />
                                <MediaCard />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className={styles.jawlatt_auther_NotificationPart}>
                          <div className={styles.jawlatt_message_service}>
                            <div className={styles.jawlatt_envelop_img}>
                              <i className="fa-solid fa-envelope-open-text"></i>
                            </div>
                            <div className={styles.jawlatt_msgservice_text}>
                              <h3>خدمة الرسائل</h3>
                              <p>
                                تابع أخبارك المفضلة وقت حدوثها، مع خدمة جولات
                                الإخبارية
                              </p>
                            </div>
                          </div>
                          <div className={styles.jawlatt_subscribe_section}>
                            <div className={styles.jawlatt_subscribe_box}>
                              <h2>
                                للإشتراك في خدمة الرسائل علي البريد الإلكتروني
                              </h2>
                              <div className={styles.jawlatt_sbscribe_from_box}>
                                <p>للإشتراك</p>
                                <input
                                  type="text"
                                  placeholder="البريد الإلكتروني"
                                />
                                <button>إشترك</button>
                              </div>
                            </div>
                            <div className={styles.jawlatt_subscribe_box}>
                              <h2>
                                للإشتراك في خدمة الرسائل علي البريد الإلكتروني
                              </h2>
                              <div className={styles.jawlatt_sbscribe_from_box}>
                                <p>للإشتراك</p>
                                <input
                                  type="text"
                                  placeholder="البريد الإلكتروني"
                                />
                                <button href="#">إشترك</button>
                              </div>
                            </div>
                          </div>
                          <div className={styles.jawlatt_message_service}>
                            <div className={styles.jawlatt_envelop_img}>
                              <img src={Bitmap} alt="" />
                            </div>
                            <div className={styles.jawlatt_msgservice_text}>
                              <h3>إختر أخبارك المفضلة</h3>
                              <p>
                                أختر أخبارك المفضلة بين أكثر من ١٢٠ صحيفة
                                إلكترونية
                              </p>
                            </div>
                          </div>
                          <div className={styles.jawlatt_checkbox_section}>
                            <div className="row">
                              <div className="col-12 col-sm-6 col-lg-3">
                                <h3>أخبار</h3>
                                <form>
                                  <div className="form-group">
                                    <input type="checkbox" id="world" />
                                    <label htmlFor="world">أخبار العالم</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="east" />
                                    <label htmlFor="east">الشرق الإوسط</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="busns" />
                                    <label htmlFor="busns">أعمال</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="entertainment" />
                                    <label htmlFor="entertainment">
                                      ترفية{" "}
                                    </label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="Sciences" />
                                    <label htmlFor="Sciences">علوم</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="technology" />
                                    <label htmlFor="technology">
                                      تكنولوجيا
                                    </label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="health" />
                                    <label htmlFor="health">صحة</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="sports" />
                                    <label htmlFor="sports">رياضة</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="fashion" />
                                    <label htmlFor="fashion">موضة</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="Mix" />
                                    <label htmlFor="Mix">منوعات</label>
                                  </div>
                                </form>
                              </div>
                              <div className="col-12 col-sm-6 col-lg-3">
                                <h3>مال وأعمال</h3>
                                <form>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">عقارات</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">إستثمارات</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">أسواق</label>
                                  </div>
                                </form>
                                <h3>ترفية</h3>
                                <form action="">
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">أفلام</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">كتب</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">العاب</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">فيديو</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">موسيقي</label>
                                  </div>
                                </form>
                              </div>
                              <div className="col-12 col-sm-6 col-lg-3">
                                <h3>منوعات</h3>
                                <form action="">
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">تكنولوجيا</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">علوم</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">فنون</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">ثقافة</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">أعمال</label>
                                  </div>
                                </form>
                              </div>
                              <div className="col-12 col-sm-6 col-lg-3">
                                <h3>مصادر</h3>
                                <form action="">
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">المدينة السعودية</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">المصري اليوم </label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">سكاي نيوز عربية</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">الجزيرة</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">الشروق الجزائرية</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">النبأ</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">بي بي سي عربية</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">جارديان عربية</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">سي بي أس عربية</label>
                                  </div>
                                  <div className="form-group">
                                    <input type="checkbox" id="" />
                                    <label htmlFor="">روسيا اليوم</label>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className={styles.jawlatt_emphasis_button}>
                              <a href="#" className={styles.jawlatt_black_em}>
                                تأكيد
                              </a>
                              <a href="#" className={styles.jawlattt_red_em}>
                                إلغاء
                              </a>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
