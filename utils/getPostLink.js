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
    let id = item?.id;
    // return `/new/article/${year}/${month}/${date}/${formattedSlug}`;
    return `/article/${id}`;
  }
};

export default getPostLink;
