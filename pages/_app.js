import "bootstrap/dist/css/bootstrap.css";
import "../assets/fonts/stylesheet.css";
import "../assets/fontawesome/css/all.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import "../assets/css/style.css";
import "../assets/css/media.css";
import "../assets/css/article.css";
import "../assets/scss/global.scss";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NextNProgress from "nextjs-progressbar";
import { wrapper } from "@/utils/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";

import { fetchCategories } from "@/slices/categories";
import GTag from "@/components/GTag";

config.autoAddCss = false;

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Script
            src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
            strategy="lazyOnload"
          />
          <NextNProgress color={"#B4000B"} />
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <GTag />
        </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
