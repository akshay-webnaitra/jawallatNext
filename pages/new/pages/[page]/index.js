import NewsAdd from "assets/images/news-ad.png";
import { wrapper } from "@/utils/store";
import { useSelector } from "react-redux";
import { fetchServerItem } from "@/slices/serverItems";
import { fetchPage, pageSelector } from "@/slices/page";
import MainLayout from "layout/mainLayout";
import Sidebar from "@/partials/v2/Sidebar";
import RedCaret from "@/components/v2/RedCaret";
import { fetchSources } from "@/slices/sources";
import { getSession } from "next-auth/react";
import { fetchCategories } from "@/slices/categories";
import { fetchHomeItems } from "@/slices/homeItems";
import { useEffect, useState } from "react";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    const slug = context?.params?.page;
    await store.dispatch(fetchPage({ slug }));
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
    return {
      props: {
        slug,
      },
    };
  }
);

const Page = () => {
  const page = useSelector(pageSelector);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <p className="fs-5 arab24-text-gray">Loading...</p>;
  }
  return (
    <>
      <section className="notification live-stream">
        <div className="container">
          <div className="row g-3 mt-3">
            {/* right side */}
            <div className="col-md-9 jawlatt-bnr-top-mid jawlatt-bnr-top-rt">
              <div className="jawlatt-single-news pt-3">
                <h3 className="mb-0 pb-2 text-dark fw-bold jawlatt-news-title mb-4">
                  <RedCaret />
                  {page?.page_name}
                </h3>
                <p
                  className="fs-5 arab24-text-gray"
                  dangerouslySetInnerHTML={{ __html: page?.page_content }}
                ></p>
              </div>
            </div>
            {/* left side */}
            <div className="col-md-3 jawlatt-bnr-top-lt">
              <div className="p-md-4 mb-3">
                <img src={NewsAdd.src} className="card-img-top" alt="NewsAd" />
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Page.getLayout = (page) => {
  return <MainLayout title={page.props.slug}>{page}</MainLayout>;
};
export default Page;
