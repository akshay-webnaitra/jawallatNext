import HomeTopicCard from "../HomeTopicCard";
import RedCaret from "../v2/RedCaret";

const HomeTopicInterestSection = ({ data }) => {
  return (
    <>
      <div>
        <div className="py-4 mt-5 new-video-card" style={{ borderRadius: 8 }}>
          <div className="jawlatt-single-news pt-3">
            <h3 className="text-dark fw-bold m-0 jawlatt-news-small-title d-flex align-items-center gap-2">
              <RedCaret />
              موضوعات تهمك
            </h3>
          </div>
          <div className="jawlatt-news-image px-4 mt-4">
            <div className="row g-3">
              {data?.slice(0, 4).map((item) => (
                <div
                  key={item?.category_id}
                  className="col-sm-6 col-lg-4 col-xl-3"
                >
                  <HomeTopicCard item={item} />
                </div>
              ))}
            </div>
            <p className="text-start pt-3">للإعلان معنا</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeTopicInterestSection;
