import HomeProductCard from "../HomeProductCard";
import RedCaret from "../v2/RedCaret";

const HomeProductSection = ({ data }) => {
  return (
    <>
      <div className="jawlatt-single-news py-3 px-0">
        <h3 className="fw-bold m-0 text-dark d-flex align-items-center gap-2">
          <RedCaret />
          منتجات قد تعجبك
        </h3>
      </div>
      <div className="row g-3 mb-4">
        {Array.isArray(data) &&
          data.map((res, index) => (
            <div key={res?.id} className="col-sm-6 col-lg-4 col-xl-3">
              <HomeProductCard res={res} />
            </div>
          ))}
      </div>
    </>
  );
};
export default HomeProductSection;
