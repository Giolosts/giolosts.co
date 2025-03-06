import React from 'react';

import styles from '../../Assets/Styles/Pages/CompanyPage.module.css';
import BgImg from "../../Assets/Images/company.webp";

import Banner from "../../Components/Banner";
import Header from "../../Components/CompanyPage/Header";
import Offer from '../../Components/CompanyPage/Offer';
import Partner from '../../Components/Partners';
import Services from '../../Components/CompanyPage/Services';
import Industry from '../../Components/CompanyPage/Industry';



const Company = () => {
    return (
        <div className={styles.Container}>
            <Banner height={800} BgImg={BgImg}>
                <Header />
            </Banner>
            <Offer />
            <Partner />
            <Services />
            <Industry />
        </div>
    );
}

export default Company;