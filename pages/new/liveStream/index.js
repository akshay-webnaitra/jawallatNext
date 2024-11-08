import Sidebar from "@/partials/v2/Sidebar";
import MainLayout from "layout/mainLayout";
import NewsAdd from "assets/images/news-ad.png";
import RedCaret from "@/components/v2/RedCaret";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import VideoImg from "../../../assets/images/news-banner.png";
import DownArrow from "../../../assets/images/down-arrow.png";
import cardImg1 from "../../../assets/images/Ac-img.png";
import cardImg2 from "../../../assets/images/alsa-logo.png";
import cardImg3 from "../../../assets/images/card-img1.png";
import { useState } from "react";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const LiveStream = () => {
  const data = [
    {
      image: cardImg1,
    },
    {
      image: cardImg2,
    },
    {
      image: cardImg3,
    },
    {
      image: cardImg1,
    },
    {
      image: cardImg2,
    },
    {
      image: cardImg3,
    },
    {
      image: cardImg1,
    },
    {
      image: cardImg2,
    },
  ];
  const [selectedImage, setSelectedImage] = useState(data[0].image);

  return (
    <>
      <section className="notification live-stream">
        <div className="container">
          <div className="row g-3 mt-3">
            {/* right side */}
            <div className="col-md-9">
              <div className="ps-sm-5">
                <div className="pb-3">
                  <h3 className="text-dark fw-bold m-0 d-flex gap-2 align-items-center">
                    <RedCaret />
                    البث المباشر
                  </h3>
                </div>
                <div className="live-stream-banner mb-5">
                  <img src={selectedImage.src} alt="img" />
                </div>
                <div className="mb-5">
                  <h5 className="fw-bold">الدولة</h5>
                  <div className="mt-2 position-relative">
                    <select
                      className="form-select shadow-none pe-3 "
                      style={{ border: "1px solid #00000045" }}
                      aria-label="Default select example"
                    >
                      <option selected>مصر</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div className="down-arrow">
                      <img src={DownArrow.src} alt="img" />
                    </div>
                  </div>
                </div>
                <div className="row g-4">
                  {data.map((item, index) => (
                    <div key={index} className="col-sm-6 col-lg-4 col-xl-3">
                      <div
                        className="live-stream-card border text-center"
                        onClick={() => setSelectedImage(item.image)}
                      >
                        <div className="live-stream-card-img">
                          <img src={item.image.src} alt="img" />
                        </div>
                        <p className="m-0 p-2">البث المباشر</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* left side */}
            <div className="col-md-3 jawlatt-bnr-top-lt">
              <div className="p-md-4 mb-3">
                <img src={NewsAdd.src} className="card-img-top" alt="NewsAd" />
              </div>
              <div className="p-md-4 mb-3">
                <img src={NewsAdd.src} className="card-img-top" alt="NewsAd" />
              </div>
              <Sidebar></Sidebar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

LiveStream.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default LiveStream;
