import React from 'react';

import styles from './BannerText.module.css'

const BannerText = (props) => {
    return (
        <div className={styles.BannerTextContainer}>
            <h1 className={styles.Title}>{props.Title}</h1>
            <p className={styles.Text}>{props.text}</p>
        </div>
    );
};

export default BannerText;