import Head from "next/head";
import Header from "@/partials/v2/Header";
import NewsTicker from "@/components/NewsTicker";
import { useSelector } from "react-redux";
import { homeItemsSelector } from "@/slices/homeItems";
import Footer from "@/partials/footer";

const MainLayout = ({ children, title, category }) => {
  const { ticker } = useSelector(homeItemsSelector);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="mb-4">
        <NewsTicker items={ticker} category={category} />
      </div>
      <main className="mb-4">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
