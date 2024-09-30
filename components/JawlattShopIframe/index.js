import styles from "./style.module.css";

const JawlattShopIframe = () => {
  return (
    <iframe
      className="lazy-loaded"
      style={{
        width: "100%",
        height: "250px",
        paddingTop: "0px",
        paddingBottom: "0px",
        overflow: "hidden",
        border: "1px solid rgba(132, 132, 132, 0.31525)",
      }}
      title="Jawlatt"
      data-lazy-type="iframe"
      data-src="https://shop.jawlatt.com/smart-widget-iframe?jawlatt_keyword=&jawlatt_category=%d8%a7%d9%84%d9%85%d8%b1%d8%a3%d8%a9,%d8%b5%d8%ad%d8%a9-%d9%88-%d8%ac%d9%85%d8%a7%d9%84&jawlatt_size=3&target=_blank"
      scrolling="no"
      src="https://shop.jawlatt.com/smart-widget-iframe?jawlatt_keyword=&jawlatt_category=%d8%a7%d9%84%d9%85%d8%b1%d8%a3%d8%a9,%d8%b5%d8%ad%d8%a9-%d9%88-%d8%ac%d9%85%d8%a7%d9%84&jawlatt_size=3&target=_blank"
    />
  );
};

export default JawlattShopIframe;
