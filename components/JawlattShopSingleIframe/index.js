import styles from "./style.module.css";
import { useEffect, useState } from "react";

const JawlattShopSingleIframe = () => {
  const [randomDigit, setRandomDigit] = useState(1);
  useEffect(() => {
    setRandomDigit(Math.random());
  }, []);
  return (
    <iframe
      className="lazy-loaded"
      style={{
        width: "100%",
        height: "250px",
        overflow: "hidden",
      }}
      title="Jawlatt"
      data-lazy-type="iframe"
      data-src={`https://shop.jawlatt.com/smart-widget-single-iframe/?jawlatt_keyword=&jawlatt_category=%D8%A7%D9%84%D8%B1%D8%AC%D9%84&jawlatt_size=3&v=${randomDigit}&target=_blank`}
      scrolling="no"
      src={`https://shop.jawlatt.com/smart-widget-single-iframe/?jawlatt_keyword=&jawlatt_category=%D8%A7%D9%84%D8%B1%D8%AC%D9%84&jawlatt_size=3&v=${randomDigit}&target=_blank`}
    />
  );
};

export default JawlattShopSingleIframe;
