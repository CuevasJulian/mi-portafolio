import React from 'react';
import { Row,Col } from 'antd';
import { Profile } from '@views'
import './style.scss';
const Main = ( props ) => {
    return(
        <Row className={'main-container'}>
            <Col sm={18} md={14} lg={14}>
                <Profile />
            </Col>
        </Row>
    );
}

export default Main;