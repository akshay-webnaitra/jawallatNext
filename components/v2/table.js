const Table = ({ data, type }) => {
  return (
    <>
      {type === "أسعار الذهب" ? (
        <table className="table table-borderless">
          <thead className="text-white">
            <tr>
              <th scope="col ">العملة</th>
              <th scope="col">سعر البيع</th>
              <th scope="col">سعر الشراء</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data?.map((res, index) => (
                <tr key={index} className="jawlatt-table-heading">
                  <td>{res?.name}</td>
                  <td>{res?.gold?.ask}</td>
                  <td>{res?.gold?.bid}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <table className="table table-borderless">
          <thead className="text-white">
            <tr>
              <th scope="col ">العملة</th>
              <th scope="col">سعر الصرف</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data?.map((res, index) => (
                <tr key={index} className="jawlatt-table-heading">
                  <td>{res?.name}</td>
                  <td>{res?.exchange_rate}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default Table;
