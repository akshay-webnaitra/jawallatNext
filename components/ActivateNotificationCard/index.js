const ActivateNotificationCard = () => {
  return (
    <>
      <div
        className="my-4 py-5 px-5"
        style={{ backgroundColor: "#F8F8F8", borderRadius: 13 }}
      >
        <div className="row gy-3">
          <div className="col-md-7">
            <p style={{ fontSize: 25 }} className="m-0">
              تفعيل التنبيهات عبر المتصفح
            </p>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-3">
              <button className="btn arabic24-bg-dark-red text-white px-5">
                تفعيل
              </button>
              <button className="btn btn-dark px-5">إلغاء</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ActivateNotificationCard;
