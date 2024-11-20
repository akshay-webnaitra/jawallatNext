import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Dropdown from "react-bootstrap/Dropdown";

import styles from "./style.module.css";
import MessengerIcon from "@/public/messenger.svg";
import TwitterIcon from "@/public/twitter.svg";
import WhattsappIcon from "@/public/whattsapp.svg";
import FacebookIcon from "@/public/facebook.svg";
import Logo from "@/public/logo.png";
import MobileLogo from "@/public/footer-logo.png";
import Cart from "@/public/cart.svg";
import Search from "@/public/search.svg";
import User from "@/public/user-dark.svg";
import AppStore from "@/public/app-store.png";
import PlayStore from "@/public/play-store.png";
import JawlattLink from "@/components/JawlattLink";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSelector } from "@/slices/categories";
import { sourcesSelector } from "@/slices/sources";
import find from "lodash/find";
import { serverItemSelector } from "@/slices/serverItems";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import ResetPasswordModal from "@/components/modals/ResetPasswordModal";
import { setShowLogin, setShowResetPassword } from "@/slices/settings";
import GoogleAds from "@/components/GoogleAds";
import useScrollingUp from "@/hooks/useScrollingUp";
import { useMediaQuery } from "react-responsive";
import { stripMenu, slugify } from "@/utils/index";

const Header = () => {
  const scrolled = useScrollingUp();
  const router = useRouter();
  const dispatch = useDispatch();
  const isMobileMedia = useMediaQuery({ query: "(max-width: 786px)" });
  const { data: session, status } = useSession();
  const { category, subcategory } = router.query;
  const { categories, loading, hasErrors } = useSelector(categoriesSelector);
  const { sources } = useSelector(sourcesSelector);
  const [subCategories, setSubCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState(router?.query?.q);
  const [subMenuColor, setSubMenuColor] = useState("#666666");

  const [mainMenu, setMainMenu] = useState([]);
  const [dropdownMenu, setDropdownMenu] = useState([]);
  const [dropdownMenuName, setDropdownMenuName] = useState(null);

  const { serverItem, serverItemHasError, serverItemLoading } =
    useSelector(serverItemSelector);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);

  useEffect(() => {
    let menus = serverItem?.menus;
    if (menus) {
      let mainMenuTemp = find(menus, { menu_location: "header" });
      let dropdownMenuTemp = find(menus, { menu_location: "header-dropdown" });

      if (!!mainMenuTemp?.menu_list) {
        setMainMenu(mainMenuTemp?.menu_list);
      }

      if (!!dropdownMenuTemp?.menu_name) {
        setDropdownMenuName(dropdownMenuTemp?.menu_name);
      }

      if (!!dropdownMenuTemp?.menu_list) {
        setDropdownMenu(dropdownMenuTemp?.menu_list);
      }
    }
  }, [serverItem]);

  useEffect(() => {
    if (categories.length && router.query.hasOwnProperty("category")) {
      let mainCategorySlug = category;
      let mainCategory = find(categories, { cat_slug: mainCategorySlug });
      if (
        mainCategory &&
        mainCategory.hasOwnProperty("subs") &&
        mainCategory.subs.length > 0
      ) {
        setSubCategories(mainCategory?.subs);
        setSubMenuColor(mainCategory?.cat_color);
      } else {
        setSubCategories([]);
        setSubMenuColor("#666666");
      }
    }
  }, [categories, router.query.category]);

  const [isActive, setActive] = useState(false);

  const toggleBtn = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("menu-active");
    } else {
      document.body.classList.remove("menu-active");
    }
  }, [isActive]);

  const [serchactive, setSearchActive] = useState(false);
  const searchClick = () => {
    setSearchActive(true);
  };
  const searchClose = () => {
    setSearchActive(!serchactive);
  };

  const loginHandleShow = () => {
    dispatch(setShowLogin(true));
  };

  return (
    <>
      <div className={"d-none d-lg-block "}>
        <div className="container">
          <div className="row align-items-center">
            <div className={"col-12 text-right jawlatt-announcement-bar"}>
              <h3>{serverItem.site_date}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.jawallat_mainHeader}>
        <div className="container">
          <div className="row align-items-center">
            <div className={"col-auto " + styles.jawallat_logo}>
              <JawlattLink href="/">
                <a className={styles.jawlatt_mainLogo}>
                  <img src={Logo?.src} alt="Logo" />
                </a>
              </JawlattLink>
              <JawlattLink href="/">
                <a className={styles.jawlatt_nav_logo}>
                  <img src={MobileLogo?.src} alt="Logo" />
                </a>
              </JawlattLink>
            </div>
            <div className={"col-8 text-center " + styles.jawallat_header_ads}>
              {!isMobile ? (
                <div className="d-block">
                  <nav
                    className={
                      !scrolled
                        ? "d-block " + styles.jawallat_navigation
                        : "d-block " +
                          styles.jawallat_navigation +
                          " " +
                          styles.jawallat_navigation_scrolled
                    }
                  >
                    <div className="container">
                      <ul className={styles.jawallat_menu}>
                        <li className="">
                          <JawlattLink href="/">
                            <a>
                              <span>
                                <i className="fa-solid fa-house"></i>
                              </span>
                            </a>
                          </JawlattLink>
                        </li>
                        {mainMenu.map((item, index) => (
                          <li
                            key={`${item?.id}-cat-${index}`}
                            className={
                              stripMenu(item.name) === stripMenu(category)
                                ? "active"
                                : ""
                            }
                          >
                            <JawlattLink href={item?.link}>
                              <a>
                                <span>{item?.name}</span>
                              </a>
                            </JawlattLink>
                          </li>
                        ))}
                        {dropdownMenu.length ? (
                          <li className={styles.jawallat_has_sub_menu}>
                            <JawlattLink href="#">
                              <a>
                                <span>{dropdownMenuName}</span>
                              </a>
                            </JawlattLink>
                            <ul className={styles.jawallat_sub_menu}>
                              {dropdownMenu.map((item, index) => (
                                <li
                                  key={`${item?.id}-cat-${index}`}
                                  className={
                                    stripMenu(category) === stripMenu(item.link)
                                      ? "active"
                                      : ""
                                  }
                                >
                                  <JawlattLink href={item?.link}>
                                    <a>{item?.name}</a>
                                  </JawlattLink>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ) : null}
                      </ul>
                    </div>
                  </nav>
                </div>
              ) : null}
            </div>

            <div className={"col-2 " + styles.jawallat_header_cart}>
              <div className="jawallat_header_cartMain gap-4">
                <div
                  className={"d-none d-lg-block " + styles.jawallat_header_btn}
                >
                  <a
                    href="https://shop.jawlatt.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    تسوق <img src={Cart?.src} alt="Cart" />
                  </a>
                </div>
                <div className={"ps-2 " + styles.jawallat_header_search}>
                  <span onClick={searchClick} style={{ cursor: "pointer" }}>
                    <i className="fa-solid fa-magnifying-glass jawlatt-font-medium"></i>{" "}
                    {searchClick.toString}
                  </span>
                </div>
                <div className="d-flex gap-4">
                  <ul>
                    <li>
                      <a
                        href={`http://m.me/${serverItem.app_massenger}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-solid fa-bell jawlatt-font-medium"></i>{" "}
                      </a>
                    </li>
                  </ul>

                  {status == "authenticated" ? (
                    <Dropdown>
                      <Dropdown.Toggle
                        className={styles.jawlatt_user_btn}
                        variant="success"
                        id="logout-button"
                      >
                        <div className={styles.jawallat_header_topbar_userBtn}>
                          <span>
                            {session?.user?.first_name}{" "}
                            {session?.user?.last_name}
                          </span>
                        </div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          as={JawlattLink}
                          href="/my-news"
                          className="dropdown-item"
                        >
                          تسجيل خروج
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            signOut();
                          }}
                        >
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <div className={styles.jawallat_header_topbar_userBtn}>
                      <span onClick={loginHandleShow}>
                        <i className="fa-regular fa-circle-user jawlatt-font-medium"></i>
                      </span>
                    </div>
                  )}
                </div>
                <div className={"d-lg-none " + styles.jawallat_header_search}>
                  <span onClick={loginHandleShow}>
                    <img src={User?.src} alt="user" height={30} />
                  </span>
                </div>

                <div className="d-lg-none jawlatt_toglle_btn">
                  <button
                    className={
                      isActive
                        ? "active " + styles.jawlatt_menu_button
                        : "" + styles.jawlatt_menu_button
                    }
                    onClick={toggleBtn}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            serchactive
              ? styles.jawlatt_headerMainSec + " searchActive"
              : styles.jawlatt_headerMainSec
          }
        >
          <div className="container">
            <div className="row g-2">
              <div className="col-auto">
                <button onClick={searchClose}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="col">
                <form method="get" action="/search">
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        name="q"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e?.target?.value)}
                        placeholder="كلمات البحث…."
                      />
                    </div>
                    <div className="col searchBar">
                      <select
                        name="source"
                        className="searchBarCont"
                        defaultValue={router?.query?.source}
                      >
                        <option value="">جميع المصادر</option>

                        {sources.map((item, index) => (
                          <option value={item?.name} key={item?.name}>
                            {item?.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col searchBar">
                      <select
                        name="category"
                        className="searchBarCont"
                        defaultValue={router?.query?.category}
                      >
                        <option value="">جميع الأقسام</option>
                        {categories.map((item, index) => (
                          <option value={item?.cat_id} key={item?.cat_name}>
                            {item?.cat_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col searchBar">
                      <select
                        name="type"
                        className="searchBarCont"
                        defaultValue={router?.query?.type}
                      >
                        <option value="all">كل هذه الكلمات</option>
                        <option value="any">أي من هذه الكلمات</option>
                        <option value="exact">العبارة بالضبط</option>
                      </select>
                    </div>
                    <div className="col-auto">
                      <input type="submit" value="بحث" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.jawlatt_megaMenu}>
        <div className={styles.jawlatt_megaMenu_inset}>
          <div className={styles.jawlatt_header_search}>
            <form>
              <input type="text" />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className={styles.jawlatt_header_menu}>
            <ul>
              {mainMenu.map((item, index) => (
                <li
                  key={`${item?.id}-cat-${index}-mobile-menu`}
                  className={
                    stripMenu(item.name) == stripMenu(router.query.category)
                      ? "active"
                      : ""
                  }
                >
                  <JawlattLink href={slugify(item?.link)}>
                    <a>{item?.name}</a>
                  </JawlattLink>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.jawlatt_header_app}>
            <ul>
              <li>
                <a
                  href={`${serverItem.app_google_play}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={PlayStore?.src} alt="Play store" />
                </a>
              </li>
              <li>
                <a
                  href={`${serverItem.app_app_store}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AppStore?.src} alt="App store" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="col-3">
              <div className={styles.jawallat_header_topbar_socialMedia}>
                <ul>
                  <li>
                    <a
                      href={`http://m.me/${serverItem.app_massenger}`}
                      target="_blank"
                      rel="noreferrer"
                    >
<i className="fa-solid fa-bell jawlatt-font-medium"></i>                    </a>
                  </li>
                </ul>

                {status == "authenticated" ? (
                  <Dropdown>
                    <Dropdown.Toggle
                      className={styles.jawlatt_user_btn}
                      variant="success"
                      id="logout-button"
                    >
                      <div className={styles.jawallat_header_topbar_userBtn}>
                        <span>
                          {session?.user?.first_name} {session?.user?.last_name}
                        </span>
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        as={JawlattLink}
                        href="/my-news"
                        className="dropdown-item"
                      >
                        تسجيل خروج
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          signOut();
                        }}
                      >
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <div className={styles.jawallat_header_topbar_userBtn}>
                    <span onClick={loginHandleShow}>تسجيل دخول</span>
                  </div>
                )}
              </div>
            </div> */}

      {/* {subCategories.length > 0 && (
        <nav
          className={
            !scrolled
              ? styles.jawlatt_secondaryNav
              : styles.jawlatt_secondaryNav +
                " " +
                styles.jawlatt_secondaryNav_scrolled
          }
          style={{ background: "#EFEFEF" }}
        >
          <div className="container">
            <ul>
              {subCategories.map((item, index) => (
                <li
                  key={`${item?.id}-sub-${index}`}
                  className={
                    stripMenu(subcategory) == stripMenu(item.cat_slug)
                      ? "active"
                      : ""
                  }
                >
                  <JawlattLink
                    href={`/category/${encodeURI(category)}/${item?.cat_slug}`}
                  >
                    <a>
                      <span>{item?.cat_name}</span>
                    </a>
                  </JawlattLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      {isMobile ? (
        <div className="text-center pb-3">
          <div className="container">
            <GoogleAds
              id="div-gpt-ad-1686734673245-0"
              slot="/29958771/New_Jaw_Leader_Mobile_01"
              width={320}
              height={100}
            />
          </div>
        </div>
      ) : null} */}

      <LoginModal />
      <RegisterModal />
      <ResetPasswordModal />
    </>
  );
};

export default Header;
