const HomeProductCard = ({ res }) => {
  return (
    <>
      <div className="card1 arab24-card2 border bg-white">
        <div className="arab24-card2-img">
          <img
            src={res?.media?.image_url}
            alt="img"
            className="img-fluid w-100"
          />
        </div>
        <div className="jawlatt-card1-heading px-2 mt-2">
          <p className="fw-semibold">{res?.title}</p>
          <h3>
            {res?.price?.slice(0, 4)}
            <sup style={{ fontSize: 14 }} className="fw-medium">
              {res?.price?.slice(4)}
            </sup>
          </h3>
        </div>
      </div>
    </>
  );
};
export default HomeProductCard;
