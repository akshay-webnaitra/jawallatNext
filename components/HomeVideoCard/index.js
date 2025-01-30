import VideoStop from "../../assets/images/video-stop.png";

const HomeVideoCard = ({ item }) => {
  return (
    <>
      <div className="arab24-news-card">
        <a
          href={item?.news_video}
          target="_blank"
          rel="noopener noreferrer"
          className="arab24-news-card-img"
        >
          <img src={item?.news_image} alt="img" />
          <div className="video-icon">
            <img src={VideoStop.src} alt="img" />
          </div>
        </a>
        <div>
          <p
            className="m-0 text-end fw-medium text-nowrap"
            style={{ fontSize: 10 }}
          >
            <img
              style={{ minWidth: 24, height: 24 }}
              src={item?.news_source_icon}
              className="ms-2 rounded-circle"
            />
            <a
              href={item?.news_source_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item?.news_source}
            </a>
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.3 }} className="fw-bold mt-1">
            {item?.news_title}
          </p>
        </div>
      </div>
    </>
  );
};
export default HomeVideoCard;
