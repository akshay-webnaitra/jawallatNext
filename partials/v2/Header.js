import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";

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

  const [searchActive, setSearchActive] = useState(false);
  const searchClick = () => {
    setSearchActive(true);
  };
  const searchClose = () => {
    setSearchActive(!searchActive);
  };

  const loginHandleShow = () => {
    dispatch(setShowLogin(true));
  };

  return (
    <>
      <header
        className={
          scrolled
            ? "jawlatt-sticky-header jawlatt-header pt-4 pb-4 mb-3"
            : "jawlatt-header pt-4 pb-4 mb-3"
        }
      >
        <div className="container">
          <div className="announcement-bar col-12 mb-5">
            <p
              style={{
                color: "#7D7D7D",
                fontSize: "12.84px",
                fontWeight: 500,
                lineHeight: "15.41px",
                textAlign: "left",
              }}
            >
              {serverItem.site_date}
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start mb-3">
            <JawlattLink href="/">
              <a className="d-flex col-lg-2 align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                <img src="/images/logo.png" className="img-fluid w-75" />
              </a>
            </JawlattLink>
            <ul className="nav col-12 col-lg-8  mb-2 justify-content-start mb-md-0">
              {mainMenu.slice(0, 7).map((item, index) => (
                <li
                  key={`${item?.id}-cat-${index}`}
                  className={
                    stripMenu(item.name) === stripMenu(category) ? "active" : ""
                  }
                >
                  <JawlattLink href={item?.link}>
                    <a className="nav-link px-3 link-body-emphasis">
                      {item?.name}
                    </a>
                  </JawlattLink>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="nav-link px-3 link-body-emphasis dropdown-toggle"
                >
                  المزيد
                </a>
                <ul className={"dropdown-menu text-small"}>
                  {mainMenu.slice(7).map((item, index) => (
                    <li
                      key={`${item?.id}-cat-${index}`}
                      className={
                        stripMenu(item.name) === stripMenu(category)
                          ? "active"
                          : ""
                      }
                    >
                      <JawlattLink href={item?.link}>
                        <a className="dropdown-item">{item?.name}</a>
                      </JawlattLink>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <div
              className="col-12 col-lg-2 mb-3 mb-lg-0  d-flex gap-4 align-items-center justify-content-end"
              role="search"
            >
              <a
                href="#"
                className="jawlatt-hdr-lt-btn text-decoration-none m-0"
              >
                بث مباشر
              </a>
              <ul className="jawlatt-icon-list list-unstyled d-flex m-0">
                <li>
                  <a
                    href="#"
                    onClick={searchClick}
                    className="text-decoration-none jawlatt-cmn-color"
                  >
                    <i className="fa-solid fa-magnifying-glass jawlatt-font-medium" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none jawlatt-cmn-color mx-3"
                  >
                    <i className="fa-solid fa-bell jawlatt-font-medium" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={loginHandleShow}
                    className="text-decoration-none jawlatt-cmn-color"
                  >
                    <i className="fa-regular fa-circle-user jawlatt-font-medium" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={
            searchActive
              ? "jawlatt-search jawlatt-search-active"
              : "jawlatt-search"
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
      </header>
      <LoginModal />
      <RegisterModal />
      <ResetPasswordModal />
    </>
  );
};
export default Header;
