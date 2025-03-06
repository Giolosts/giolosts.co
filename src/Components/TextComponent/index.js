import React from "react";
import styles from "./Text.module.css";

const TextComponent = (props) => {
  return (
    <div className={styles.TextContainer}>
      <h1
        className={styles.Title}
        style={{ color: props.color, fontWeight: props.fontweight }}
      >
        {props.Title}
      </h1>
      <p className={styles.Text} style={{ color: props.textcolor, fontWeight: props.textfontweight}}>
        {props.Text}
      </p>
      {props.Button}
    </div>
  );
};

export default TextComponent;
