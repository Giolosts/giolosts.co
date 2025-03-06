import React from "react";

import Banner from "../../Components/Banner";
import BgImg from "../../Assets/Images/dev.webp";
import styles from "../../Assets/Styles/Pages/EngineerPage.module.css";

import Header from "../../Components/EngineerPage/Header";
import Offer from "../../Components/EngineerPage/Offer";
import Tech from "../../Components/EngineerPage/Tech";
import Sprint from "../../Components/EngineerPage/Sprint";

const EngineerPage = () => {
  return (
    <div className={styles.Container}>
      <Banner height={800} BgImg={BgImg}>
        <div className={styles.BannerText}>
          <Header />
        </div>
      </Banner>
      <Offer />
      <Tech />
      <Sprint />
    </div>
  );
};

export default EngineerPage;
