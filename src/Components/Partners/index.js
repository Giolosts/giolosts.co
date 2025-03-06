import React from 'react';
import styles from './Partner.module.css';

import TextComponent from '../TextComponent';
import Brand from '../Homepage/Brands';

const Partner = () => {
    return (
        <div className={styles.PartnerContainer}>
            <TextComponent color="#3EE04E" Title="PARTNERED WITH" Text="Trusted by the world’s leading brands since 2006."/>
            <Brand />
        </div>
    );
}

export default Partner;