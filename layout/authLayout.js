import NewsTicker from "@/components/NewsTicker";
import AuthFooter from "@/partials/v2/authFooter";
import Header from "@/partials/v2/Header";
import { homeItemsSelector } from "@/slices/homeItems";
import Head from "next/head";
import { useSelector } from "react-redux";

const AuthLayout = ({ children, title }) => {
  const { ticker } = useSelector(homeItemsSelector);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="mb-4">
        <NewsTicker items={ticker} />
      </div>
      <main className="my-5 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-5">
              <div className="auth-card text-center  p-sm-5">{children}</div>
            </div>
          </div>
        </div>
      </main>
      <AuthFooter />
    </>
  );
};

export default AuthLayout;
