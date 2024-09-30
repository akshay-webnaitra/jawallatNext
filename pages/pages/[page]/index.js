import styles from "./style.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import JawlattLink from "@/components/JawlattLink";
import Header from "@/partials/header";
import Footer from "@/partials/footer";
import GoogleAds from "@/components/GoogleAds";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import MyNewsMediaCard from "@/components/myNewsMediaCard/index";
import MediaCard from "@/components/NewsMediaCard/index";
import Bitmap from "@/public/Bitmap-img.png";
import Notification from "@/public/notification-bell.png";
import Banner from "@/public/banner-page.png";
import Head from "next/head";
import Ads6 from "@/public/ads6.jpg";
import { wrapper } from "@/utils/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchServerItem, serverItemSelector } from "@/slices/serverItems";
import { fetchPage, pageSelector } from "@/slices/page";
import JawlattShopSingleIframe from "@/components/JawlattShopSingleIframe";
// import styles from './Home.css'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(fetchServerItem());
    await store.dispatch(fetchPage({ slug: context?.params?.page }));
  }
);

const Page = () => {
  const router = useRouter();
  const { page, pageHasErrors, pageLoading } = useSelector(pageSelector);

  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Head>
        <title>{page?.page_name}</title>
      </Head>
      <Header />
      <div className={styles.jawllat_policy_banner}>
        {!!page?.imageUrl && <img src={page?.imageUrl} alt="banner" />}
      </div>
      <div className={"mb-5 " + styles.jawllat_policy_Text}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="page-content pt-4 mb-4">
                <h4>{page?.page_name}</h4>
                {!!page?.page_content && (
                  <div
                    className="page-content"
                    dangerouslySetInnerHTML={{ __html: page?.page_content }}
                  ></div>
                )}
              </div>
              <div className={styles.jawllat_policy_form}>
                <h4>تواصل معنا</h4>
                <form onSubmit={formSubmit}>
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="الإسم"
                      className={styles.jwalatt_form_group}
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="البريد الإلكتروني"
                      className={styles.jwalatt_form_group}
                    />
                  </div>
                  <div className="mt-4">
                    <textarea
                      placeholder="الرسالة"
                      className={styles.jwalatt_form_group}
                    />
                  </div>
                  <div className="mt-4">
                    <input type="submit" value="أرسل رسالة" />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-1"></div>
            <div className="d-none d-lg-block col-12 col-md-3">
              <div className="full-img mb-0 mb-lg-3">
                <GoogleAds
                  id="div-gpt-ad-1686735098461-0"
                  slot="/29958771/New_Jaw_MPU_Desktop_03"
                  width={300}
                  height={250}
                />
              </div>
              <div className="full-img mb-0 mb-lg-3">
                <JawlattLink href="#">
                  <a>
                    <JawlattShopSingleIframe />
                  </a>
                </JawlattLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
