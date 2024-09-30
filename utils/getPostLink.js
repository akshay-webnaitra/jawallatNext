import moment from "moment";

const getPostLink = (item) => {
  if (item) {
    let dateObject =
      item && item.hasOwnProperty("news_date")
        ? moment(item?.news_date)
        : moment();
    let year = dateObject?.format("YYYY");
    let month = dateObject?.format("MM");
    let date = dateObject?.format("DD");
    let formattedSlug = item?.news_name;

    return `/${year}/${month}/${date}/${formattedSlug}`;
  }
};

export default getPostLink;
