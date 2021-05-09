import React from 'react';
import { Typography, Row, Col, Image, Divider } from 'antd';
import './style.scss';

const TabInacar = ( props ) => {
    const { Title, Paragraph } = Typography;
    return(
        <Row gutter={[10,10]} className={'tab-inacar-container'}>
            <Col span={24}>
                <Title>Inacar</Title>
            </Col>
            <Col span={24}>
                <Image src={'./assets/proyectos/inacar/web.png'}/>
            </Col>
            <Col span={24}>
                <Divider />
                <Title level={4}>Tecnologías</Title>
                <Row gutter={[10,10]}>
                    <Col span={3}>
                        <Image src={'./assets/icons/nodejs.png'}/>
                    </Col>
                    <Col span={3}>
                        <Image src={'./assets/icons/mysql-icon.png'}/>
                    </Col>
                </Row>
                <Divider />
                <Paragraph>
                    De la mano de increibles profesionales creamos un sistema de gestión inmobiliario
                    que ayuda a la empresa Inacar a mantener sus cotizaciones en la nube.
                    <br/>
                    El sistema implementa a través de Node.js y diferentes librerias la creación de PDFs
                    dinamicos que sirven para agilizar la comunicación entre la inmobiliaria y su cliente.
                </Paragraph>
                <Divider />
                <Paragraph>
                    <strong>Mi rol:</strong><br/>
                    <strong>Desarrollador Back-end Node.js junto a MySQL</strong>
                </Paragraph>
            </Col>
        </Row>
    );
}

export default TabInacar;