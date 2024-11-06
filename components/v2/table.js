const Table = () => {
  return (
    <>
      <table className="table table-borderless">
        <thead className="text-white">
          <tr>
            <th scope="col ">العملة</th>
            <th scope="col">دولار</th>
            <th scope="col">بيع</th>
          </tr>
        </thead>
        <tbody>
          <tr className="jawlatt-table-heading">
            <td>أمريكي دولار</td>
            <td>48.1706</td>
            <td>48.2706</td>
          </tr>
          <tr className="table-secondary  jawlatt-table-heading">
            <td>يورو</td>
            <td>52.6890</td>
            <td>52.8177</td>
          </tr>
          <tr className="jawlatt-table-heading">
            <td>إسترلينيجنيه</td>
            <td>62.8096</td>
            <td>62.9593</td>
          </tr>
          <tr className="table-secondary jawlatt-table-heading">
            <td>فرنك سويسرى</td>
            <td>54.2706</td>
            <td>54.4078</td>
          </tr>
          <tr className="jawlatt-table-heading">
            <td>100 ين ياباني</td>
            <td>30.7622</td>
            <td>30.8281</td>
          </tr>
          <tr className="table-secondary jawlatt-table-heading">
            <td>سعودی ریال</td>
            <td>12.8424</td>
            <td>12.8698</td>
          </tr>
          <tr className="jawlatt-table-heading">
            <td>كويتي دينار</td>
            <td>158.0621</td>
            <td>158.0621</td>
          </tr>
          <tr className="table-secondary jawlatt-table-heading">
            <td>درهم اماراتی</td>
            <td>157.6314</td>
            <td>13.1424</td>
          </tr>
          <tr className="jawlatt-table-heading">
            <td>الصيني اليوان</td>
            <td>13.1144</td>
            <td>6.6507</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Table;
