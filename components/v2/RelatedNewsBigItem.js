const RelatedNewsBigItem = ({ containerClassName, data }) => {
  return (
    <div className={containerClassName}>
      <div className="card arab24-big-news-card mb-3 border-0">
        <div className="row g-0 flex-column ">
          <img src={data?.news_image} className="img-fluid rounded" alt="..." />
          <div>
            <div className="card-body p-0 mt-2">
              <p className="card-text mb-1">
                <img
                  style={{ marginLeft: 5 }}
                  src="/images/news-label.png"
                  alt="label"
                />
                <small className="text-muted">{data?.news_source}</small>
              </p>
              <h5 className="card-title">{data?.news_title}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RelatedNewsBigItem;
