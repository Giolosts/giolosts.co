import React from 'react';
import { Col, Row } from 'react-bootstrap';

import styles from './style.module.css';

import IndustryLists from '../../../../local-json/industrylists.json';
import { AiOutlineCheckSquare } from "react-icons/ai";

const IndustryList = () => {

    const [IndustryListsData, setIndustryListsState] = React.useState(IndustryLists);

    


    return (
        <Row className={styles.ListContainer}>{ IndustryListsData && IndustryListsData.map((list, index) => (
            <Col className={styles.ListCol} sm={12} md={4}>
                
                <h5 className={styles.Title}><AiOutlineCheckSquare className={styles.CheckIcon}/> {list.title}</h5>
                <p className={styles.description}>{list.description}</p>
            </Col>
        )) } </Row>
    );
}

export default IndustryList;