import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import FooterLogo from "@/public/footer-logo.png";
import GoogleStore from "@/public/google-store.svg";
import AppStore from "@/public/app-store.svg";
import MessengerNewIcon from "@/public/messenger-new.svg";
import WhatsappNewIcon from "@/public/whatsapp-new.svg";
import TwitterNewIcon from "@/public/twitter-new.svg";
import FacebookNewIcon from "@/public/facebook-new.svg";
import Link from "next/link";
import JawlattLink from "@/components/JawlattLink";
import find from "lodash/find";
import { serverItemSelector } from "@/slices/serverItems";
import { useSelector } from "react-redux";
import NewsLetterForm from "@/components/NewsLetterForm";
import { stripMenu, slugify } from "@/utils/index";

const Footer = () => {
  const [menu1, setMenu1] = useState(null);
  const [menu2, setMenu2] = useState(null);
  const [menu3, setMenu3] = useState(null);
  const [menu4, setMenu4] = useState(null);
  const [bottomBarMenu, setBottomBarMenu] = useState(null);

  const { serverItem, serverItemHasError, serverItemLoading } =
    useSelector(serverItemSelector);

  useEffect(() => {
    let menus = serverItem?.menus;
    if (menus) {
      let menu1 = find(menus, { menu_location: "footer-1" });
      let menu2 = find(menus, { menu_location: "footer-2" });
      let menu3 = find(menus, { menu_location: "footer-3" });
      let menu4 = find(menus, { menu_location: "footer-4" });
      let bottomBarMenu = find(menus, {
        menu_location: "footer-bottom-bar",
      });

      setMenu1(menu1);
      setMenu2(menu2);
      setMenu3(menu3);
      setMenu4(menu4);
      setBottomBarMenu(bottomBarMenu);
    }
  }, [serverItem]);

  return (
    <>
      <footer className={styles.jawallat_footer}>
        <div className="container">
          <div className={styles.jawallat_footer_top}>
            <div className="row">
              <div
                className={
                  "col-lg-4 col-xl-4 " + styles.jawlatt_footer_logo_sec
                }
              >
                <div className={"mb-4 " + styles.jawallat_footer_logo}>
                  <JawlattLink href="/">
                    <img
                      src={
                        serverItem.footer_logo
                          ? serverItem.footer_logo
                          : FooterLogo
                      }
                      height="100"
                      width="300"
                      alt="Footer Logo"
                    />
                  </JawlattLink>
                </div>
                <ul
                  className={
                    "d-flex d-lg-none " + styles.jawallat_footer_social
                  }
                >
                  <li>
                    <a
                      href={`http://m.me/${serverItem.app_massenger}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={MessengerNewIcon?.src} alt="Messenger Icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://wa.me/${serverItem.app_whatsapp}?text=I%20have%20found%20you%20on%20Jawlatt`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={WhatsappNewIcon?.src} alt="Whatsapp Icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${serverItem.app_twitter}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={TwitterNewIcon?.src} alt="Twitter Icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${serverItem.app_facebook}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={FacebookNewIcon?.src} alt="Facebook Icon" />
                    </a>
                  </li>
                </ul>
                <div className={styles.jawallat_footer_logo_txt}>
                  {serverItem.footer_text}
                </div>

                <ul
                  className={
                    "d-none d-lg-block " + styles.jawallat_footer_app_icons
                  }
                >
                  <li>
                    <a
                      href={`${serverItem.app_google_play}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={GoogleStore?.src} alt="Google Store Icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${serverItem.app_app_store}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={AppStore?.src} alt="App Store Icon" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="row">
                  <div className="col-4 col-sm-4">
                    {menu1 &&
                    menu1.hasOwnProperty("menu_list") &&
                    menu1.menu_list.length ? (
                      <>
                        <h6>{menu1?.menu_name}</h6>
                        <ul className={styles.jawallat_footer_menu}>
                          {menu1?.menu_list.length &&
                            menu1?.menu_list.map((item, index) => (
                              <li key={`${item?.id}-menu-1-${index}`}>
                                <JawlattLink href={`/${slugify(item?.link)}`}>
                                  {item?.name}
                                </JawlattLink>
                              </li>
                            ))}
                        </ul>
                      </>
                    ) : null}
                  </div>
                  <div className="col-4 col-sm-4">
                    {menu2 &&
                    menu2.hasOwnProperty("menu_list") &&
                    menu2.menu_list.length ? (
                      <>
                        <h6>{menu2?.menu_name}</h6>
                        <ul className={styles.jawallat_footer_menu}>
                          {menu2?.menu_list.length &&
                            menu2?.menu_list.map((item, index) => (
                              <li key={`${item?.id}-menu-2-${index}`}>
                                <JawlattLink href={`/${slugify(item?.link)}`}>
                                  {item?.name}
                                </JawlattLink>
                              </li>
                            ))}
                        </ul>
                      </>
                    ) : null}
                    {menu3 &&
                    menu3.hasOwnProperty("menu_list") &&
                    menu3.menu_list.length ? (
                      <>
                        <h6>{menu3?.menu_name}</h6>
                        <ul className={styles.jawallat_footer_menu}>
                          {menu3?.menu_list.length &&
                            menu3?.menu_list.map((item, index) => (
                              <li key={`${item?.id}-menu-3-${index}`}>
                                <JawlattLink href={`/${slugify(item?.link)}`}>
                                  {item?.name}
                                </JawlattLink>
                              </li>
                            ))}
                        </ul>
                      </>
                    ) : null}
                  </div>
                  <div className="col-4 col-sm-4">
                    {menu4 &&
                    menu4.hasOwnProperty("menu_list") &&
                    menu4.menu_list.length ? (
                      <>
                        <h6>{menu4?.menu_name}</h6>
                        <ul className={styles.jawallat_footer_menu}>
                          {menu4?.menu_list.length &&
                            menu4?.menu_list.map((item, index) => (
                              <li key={`${item?.id}-menu-4-${index}`}>
                                <JawlattLink href={`/${slugify(item?.link)}`}>
                                  {item?.name}
                                </JawlattLink>
                              </li>
                            ))}
                        </ul>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className={styles.jawallat_footer_newsletter_section}>
                  <div className={styles.jawallat_footer_newsletter}>
                    <h5>النشرة البريدية</h5>
                    <p>{serverItem.newsletter_text}</p>
                    <NewsLetterForm />
                  </div>
                  <ul
                    className={
                      "d-none d-lg-flex " + styles.jawallat_footer_social
                    }
                  >
                    <li>
                      <a
                        href={`http://m.me/${serverItem.app_massenger}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={MessengerNewIcon?.src} alt="Messenger Icon" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={`https://wa.me/${serverItem.app_whatsapp}?text=I%20have%20found%20you%20on%20Jawlatt`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={WhatsappNewIcon?.src} alt="Whatsapp Icon" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${serverItem.app_twitter}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={TwitterNewIcon?.src} alt="Twitter Icon" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${serverItem.app_facebook}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={FacebookNewIcon?.src} alt="Facebook Icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 d-block d-lg-none">
                <ul className={styles.jawallat_footer_app_icons}>
                  <li>
                    <a
                      href={`${serverItem.app_google_play}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={GoogleStore?.src} alt="Google Store" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${serverItem.app_app_store}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={AppStore?.src} alt="App Store" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={"clearfix " + styles.jawallat_footer_bottom}>
            <div className={styles.jawallat_footer_copyright}>
              <p>{serverItem.copyright}</p>
            </div>
            <ul className="d-none d-lg-block">
              <li>
                {bottomBarMenu &&
                bottomBarMenu.hasOwnProperty("menu_list") &&
                bottomBarMenu.menu_list.length ? (
                  <>
                    {bottomBarMenu?.menu_list.length &&
                      bottomBarMenu?.menu_list.map((item, index) => (
                        <JawlattLink
                          href={`/${item?.link}`}
                          key={`${item?.id}-menu-copyright-${index}`}
                        >
                          {item?.name}
                        </JawlattLink>
                      ))}
                  </>
                ) : null}
              </li>
              {/* <li>أعلن في الموقع الالكتروني</li>
                        <li>إتصلبنا</li> */}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
