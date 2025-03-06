import React from "react";
import Typewriter from "typewriter-effect";
import styles from "../../Assets/Styles/Pages/HomePage.module.css";

import Banner from "../../Components/Banner";
import Engineer from "../../Components/Homepage/Engineers";
import Companies from "../../Components/Homepage/Companies";
import BannerText from "../../Components/BannerText";
import Partners from "../../Components/Partners";
import ProductAndServices from "../../Components/Homepage/ProductsAndServices";

import Bgimg from "../../Assets/Images/home-img1.png";

const HomePage = () => {
  return (
    <div className={styles.HomePageContainer}>
      <Banner BgImg={Bgimg}>
        <div className={styles.BannerText}>
          <h1 className={styles.title}>
            <Typewriter
                onInit={(typewriter)=> {
            
                typewriter
                  
                .typeString("THINK.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("CREATE. ")
                .pauseFor(1000)
                .deleteAll()
                .typeString("INNOVATE.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("THINK. CREATE. INNOVATE.")
                .start();
                }}
                />
            </h1>
        </div>
      </Banner>
      <Engineer />
      <Companies />
      <BannerText
        Title="WHO WE ARE ?"
        text="A Software Development Company Provide For Future"
      />
      <Partners />
      <ProductAndServices />
    </div>
  );
};

export default HomePage;
