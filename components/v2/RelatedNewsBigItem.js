const RelatedNewsBigItem = ({ containerClassName }) => {
  return (
    <div className={containerClassName}>
      <div className="card arab24-big-news-card mb-3 border-0">
        <div className="row g-0 flex-column ">
          <div className="">
            <img
              src="/images/single.png"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div>
            <div className="card-body p-0 mt-2">
              <p className="card-text mb-1">
                <img
                  style={{ marginLeft: 5 }}
                  src="/images/news-label.png"
                  alt="label"
                />
                <small className="text-muted">اليوم السابع</small>
              </p>
              <h5 className="card-title">
                لماذا قد لا تكون المقاعد المتكنة على الطائرات موجودة قريبا؟
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RelatedNewsBigItem;
