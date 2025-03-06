import React from "react";
import styles from "./Banner.module.css";

const Banner = (props) => {
  return (
    <div
      style={{
        backgroundImage: "url(" + props.BgImg + ")",
        height: props.height,
      }}
      className={styles.BannerContainer}
    >
      {props.children}
    </div>
  );
};

export default Banner;
