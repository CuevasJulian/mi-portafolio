import React from 'react';
import { Typography, Row, Col, Image, Divider } from 'antd';
import './style.scss';
const TabGSRefini = ( props ) => {
    const { Title, Paragraph } = Typography;
    return(
        <Row gutter={[10,10]} className={'tab-gsrefini-container'}>
            <Col span={24}>
                <Title>GSRefini</Title>
            </Col>
            <Col span={24}>
                <Image src={'./assets/proyectos/gsrefini/background.png'}/>
            </Col>
            <Col span={24}>
                <Divider />
                <Title level={4}>Tecnologías</Title>
                <Row gutter={[10,10]}>
                    <Col span={3}>
                        <Image src={'./logo192.png'}/>
                    </Col>
                    <Col span={3}>
                        <Image src={'./assets/icons/nodejs.png'}/>
                    </Col>
                    <Col span={3}>
                        <Image src={'./assets/icons/aws.png'}/>
                    </Col>
                    <Col span={3}>
                        <Image src={'./assets/icons/mysql-icon.png'}/>
                    </Col>
                </Row>
                <Divider />
                <Paragraph>
                    Una oportunidad increible que me permite esta empresa de joyeria de generar de la mano de sus conocimientos una plataforma
                    que permite la automatización de su gestion, facturación y agendamiento de diferentes transacciones que la empresa debe 
                    procesar a diario. 
                    <br/><br/>
                    La plataforma cuenta con PDFs dinamicos y correos electronicos autogenerados que ayudan a los administradores a incrementar la 
                    eficiencia en su increible labor.
                </Paragraph>
                <Divider />
                <Paragraph>
                    <strong>Mi rol:</strong><br/>
                    <strong>Desarrollador Front-end React</strong><br/>
                    <strong>Desarrollador Back-end Node.js en servicios Lambda, RDS, S3 de Amazon Web Services (AWS)</strong>
                </Paragraph>
            </Col>
        </Row>
    );
}

export default TabGSRefini;