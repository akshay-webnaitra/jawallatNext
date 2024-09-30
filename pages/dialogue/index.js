import Header from "@/partials/header";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import styles from "@/partials/header/style.module.css";
import NotificationBell from "@/public/notification-bell-dark.png";
import PostMeta from "@/components/PostMeta";
import JawlattLink from "@/components/JawlattLink";

export default function Email() {
  const [favoriteNewsShow, setFavoriteNewsShow] = useState(false);
  const favoriteNewsHandleShow = () => {
    setFavoriteNewsShow(true);
  };
  const favoriteNewsHandleClose = () => {
    setFavoriteNewsShow(false);
  };

  const [joinMailingShow, setJoinMailingShow] = useState(false);
  const joinMailingShowHandleShow = () => {
    setJoinMailingShow(true);
  };
  const joinMailingShowHandleClose = () => {
    setJoinMailingShow(false);
  };

  const [cookieDialogueShow, setCookieDialogueShow] = useState(false);
  const cookieDialogueShowHandleShow = () => {
    setCookieDialogueShow(true);
  };
  const cookieDialogueShowHandleClose = () => {
    setCookieDialogueShow(false);
  };

  const [findMoreNewsShow, setFindMoreNewsShow] = useState(false);
  const findMoreNewsHandleShow = () => {
    setFindMoreNewsShow(true);
  };
  const findMoreNewsHandleClose = () => {
    setFindMoreNewsShow(false);
  };

  const [newsSocialShow, setNewsSocialShow] = useState(false);
  const newsSocialHandleShow = () => {
    setNewsSocialShow(true);
  };
  const newsSocialHandleClose = () => {
    setNewsSocialShow(false);
  };

  const [favouriteChecboxNewsShow, setFavouriteChecboxNewsShow] =
    useState(false);
  const favouriteChecboxNewsHandleShow = () => {
    setFavouriteChecboxNewsShow(true);
  };
  const favouriteChecboxNewsHandleClose = () => {
    setFavouriteChecboxNewsShow(false);
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <button
                type="button"
                onClick={favoriteNewsHandleShow}
                className="btn btn-info"
              >
                favourite News dialogue
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                onClick={joinMailingShowHandleShow}
                className="btn btn-info"
              >
                Join our mailing list
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                onClick={cookieDialogueShowHandleShow}
                className="btn btn-info"
              >
                Cookie Dialogue
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                onClick={findMoreNewsHandleShow}
                className="btn btn-info"
              >
                Find out more Dialogue
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                onClick={newsSocialHandleShow}
                className="btn btn-info"
              >
                News Dialogue
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                onClick={favouriteChecboxNewsHandleShow}
                className="btn btn-info"
              >
                News
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={favoriteNewsShow}
        className={styles.jawallat_Loginform_main}
        onHide={favoriteNewsHandleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className={styles.jawallat_Loginform_dialouge}>
            <div className={styles.jawallat_Loginform_content}>
              <button
                className={styles.jawallat_Loginform_close}
                onClick={favoriteNewsHandleClose}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className={styles.jawallat_Notifications_dialouge}>
                <div className={styles.jawlatt_loginform_heading}>
                  <img
                    src={NotificationBell}
                    width="40"
                    height="40"
                    className={styles.jawlatt_notificatonBell}
                  />
                  <h2>تابع أخبارك المفضلة!</h2>
                </div>
                <form onSubmit={formSubmit}>
                  <div className="form-group">
                    <label className="text-center">
                      يمكنك الآن متابعة أخبارك المفضلة بتفعيل الإشعارات المجانية
                      لمتابعة آخر وأهم الأخبار
                    </label>
                  </div>
                  <div className={styles.jawallat_Loginform_btn}>
                    <button
                      type="submit"
                      onClick={favoriteNewsHandleClose}
                      className="btn btn-primary"
                    >
                      ضبط الإعدادات
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={joinMailingShow}
        className={styles.jawallat_Loginform_main}
        onHide={joinMailingShowHandleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className={styles.jawallat_Loginform_dialouge}>
            <div className={styles.jawallat_Loginform_content}>
              <button
                className={styles.jawallat_Loginform_close}
                onClick={joinMailingShowHandleClose}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className={styles.jawallat_Notifications_dialouge}>
                <div className={styles.jawlatt_loginform_heading}>
                  <i className="fa-solid fa-envelope-open-text"></i>
                  <h2>إنضم إلى قائمتنا البريدية</h2>
                </div>
                <form onSubmit={formSubmit}>
                  <div className="form-group">
                    <label className="text-center">
                      للإشتراك في النشرة البريدية، قم بإدخال إيميلك بطريقة صحيحة
                    </label>
                    <input type="text" placeholder="البريد الإلكتروني" />
                  </div>
                  <div className={styles.jawallat_Loginform_btn}>
                    <button
                      type="submit"
                      onClick={joinMailingShowHandleClose}
                      className="btn btn-primary"
                    >
                      إشترك
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={cookieDialogueShow}
        className={
          styles.jawallat_Loginform_main + " " + styles.jawallat_cookie_dialouge
        }
        onHide={cookieDialogueShowHandleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className={styles.jawallat_Loginform_dialouge}>
            <div className={styles.jawallat_Loginform_content}>
              <button
                className={styles.jawallat_Loginform_close}
                onClick={cookieDialogueShowHandleClose}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className={styles.jawallat_Notifications_dialouge}>
                <div className={styles.jawlatt_loginform_heading}>
                  <h2>هذا الموقع يستخدم ممل تعريف الإرتباط Cookie</h2>
                </div>
                <form onSubmit={formSubmit}>
                  <div className="form-group">
                    <label>لمزيد من المعلومات، يرجى قراءة سياسة الخصوصية</label>
                  </div>
                  <div className={styles.jawallat_Loginform_btn}>
                    <button
                      type="submit"
                      onClick={cookieDialogueShowHandleClose}
                      className="btn btn-primary"
                    >
                      أوافق
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={findMoreNewsShow}
        className={styles.jawlatt_notification_Modal}
        onHide={findMoreNewsHandleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className={styles.jawallat_Loginform_dialouge}>
            <div className={styles.jawallat_Loginform_content}>
              <button
                className={styles.jawallat_Loginform_close}
                onClick={findMoreNewsHandleClose}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className={styles.jawlatt_notification_Modal_Content}>
                <h4 className="mb-4">إكتشف المزيد</h4>
                <div
                  className={styles.jawlatt_notification_Modal_Content_Middle}
                >
                  <div className={styles.jawlatt_notification_Modal_ContentImg}>
                    <img
                      src="https://placeimg.com/90/70/nature"
                      width={90}
                      height={70}
                      alt="..."
                    />
                    <div
                      className={styles.jawlatt_notification_Modal_ContentBadge}
                    >
                      أخبار شرق أوسط
                    </div>
                  </div>
                  <div
                    className={styles.jawlatt_notification_Modal_ContentText}
                  >
                    <h6>
                      <a href="#">من برجك: تعرف على نوع الحلوى المناسبة لك</a>
                    </h6>
                    <ul>
                      <li>
                        <a href="#">المصري اليوم</a>
                      </li>
                      <li>13/02/2021</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={newsSocialShow}
        className={`${
          styles.jawlatt_notification_Modal +
          " " +
          styles.jawlatt_notificationSocial_Modal
        }`}
        onHide={newsSocialHandleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className={styles.jawallat_Loginform_dialouge}>
            <div className={styles.jawallat_Loginform_content}>
              <button
                className={styles.jawallat_Loginform_close}
                onClick={newsSocialHandleClose}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className={styles.jawlatt_notification_Modal_Content}>
                <div
                  className={styles.jawlatt_notification_Modal_Content_Middle}
                >
                  <div className={styles.jawlatt_notification_Modal_ContentImg}>
                    <img
                      src="https://placeimg.com/90/70/nature"
                      width={130}
                      height={100}
                      alt="..."
                    />
                    <div
                      className={styles.jawlatt_notification_Modal_ContentBadge}
                    >
                      أخبار شرق أوسط
                    </div>
                  </div>
                  <div
                    className={styles.jawlatt_notification_Modal_ContentText}
                  >
                    <h6>
                      <a href="#">من برجك: تعرف على نوع الحلوى المناسبة لك</a>
                    </h6>
                    <PostMeta />
                  </div>
                </div>

                <div className={"mt-3 " + styles.jawlatt_frgt_password}>
                  <button onClick={newsSocialHandleClose}>رجوع</button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={favouriteChecboxNewsShow}
        className={styles.jawlatt_favorite_newsDialouge}
        onHide={favouriteChecboxNewsHandleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className={styles.jawlatt_newsSection_dialouge}>
            <button
              className={styles.jawallat_Loginform_close}
              onClick={favouriteChecboxNewsHandleClose}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h2>إختار أخبارك المفضلة</h2>
            <div className={styles.jawlatt_newsSection_dialouge_checkbox}>
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
                        <label htmlFor="entertainment">ترفية </label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="Sciences" />
                        <label htmlFor="Sciences">علوم</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="technology" />
                        <label htmlFor="technology">تكنولوجيا</label>
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
                <div className={styles.jawlatt_notificationSEciton}>
                  <div className={styles.jawlatt_emphasis_button}>
                    <a href="#" className={styles.jawlatt_black_em}>
                      تأكيد
                    </a>
                    <a href="#" className={styles.jawlattt_red_em}>
                      إلغاء
                    </a>
                  </div>
                  <div className={styles.jawlatt_notification_bell}>
                    <i className="fa-solid fa-bell"></i>
                    <div className="form-check form-switch">
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        الأخبار العاجلة
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
