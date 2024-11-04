import styles from "./style.module.css";
import Link from "next/link";
import PostLink from "@/components/PostLink";
import Slider from "react-slick";
import { decode } from "html-entities";
import { useState, useEffect } from "react";
import { set } from "lodash";

const NewsTicker = ({ items }) => {
  //Create a function that will change the theme using useEffect and UseState hooks
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    //Check if the theme is dark, then change the theme to dark
    if (theme === "dark") {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      //If the theme is not dark, then change the theme to light
      document.documentElement.setAttribute("data-bs-theme", "light");
    }
  }, [theme]);

  if (!items) {
    return null;
  }

  const news_tickets_v2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="jawlatt-header-btm py-3 jawlatt-bottom-header-bg-color">
        <div className="container">
          <div className="jawlatt-header-btm-content d-flex align-items-center">
            <div className="col-lg-10">
              <Slider {...news_tickets_v2}>
                {items &&
                  items.map((item, index) => (
                    <p className="mb-0" dir="ltr" key={index}>
                      <PostLink item={item}>
                        <a>
                          <strong dir="ltr">{item?.news_site}</strong>{" "}
                          {decode(item?.news_title)}
                        </a>
                      </PostLink>
                    </p>
                  ))}
              </Slider>
            </div>
            <div className="col-lg-2">
              <ul className="list-unstyled d-flex m-0 gap-2 justify-content-end">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setTheme("dark");
                    }}
                    className="text-decoration-none jawlatt-cmn-color"
                  >
                    <i className="fa-solid fa-cloud-moon fs-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setTheme("light");
                    }}
                    className="text-decoration-none jawlatt-cmn-color"
                  >
                    <i className="fa-solid fa-sun fs-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsTicker;
