import JawlattLink from "../JawlattLink";

const HomeTopicCard = ({ item }) => {
  return (
    <>
      <div className="card1 pb-4 bg-white">
        <div>
          <img
            src="./images/hospital-img.png"
            alt=""
            className="img-fluid w-100"
          />
        </div>
        <div className="jawlatt-card1-heading px-2">
          <h4 className="my-2 px-1 jawlatt-right-border">
            <JawlattLink href={`/category/${item?.category_slug}`}>
              {item?.category_name}
            </JawlattLink>
          </h4>
          <p>أسرة ذكية بأسعار مذهلة في مصر - لا تفوت الفرصة</p>
          <div className="d-flex">
            <p className=" arab24-text-gray fw-medium mb-0">ذكية بأسعار</p>
            <button className="btn p-1 px-2 border border-dark me-4 text-nowrap">
              ابحث الآن
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeTopicCard;
