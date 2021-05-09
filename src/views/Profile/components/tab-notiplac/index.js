import React from 'react';
import { Typography, Row, Col, Image, Divider, Button } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons'
import './style.scss';

const TabNotiplac = ( props ) => {
    const { Title, Paragraph } = Typography;
    return(
        <Row gutter={[10,10]} className={'tab-notiplac-container'}>
            <Col span={24}>
                <Title>Notiplac</Title>
            </Col>
            <Col span={24}>
                <Image src={'./assets/proyectos/notiplac/background.png'}/>
            </Col>
            <Col span={24}>
                <Divider />
                <Title level={4}>Tecnologías</Title>
                <Row gutter={[10,10]}>
                    <Col span={3}>
                        <Image src={'./assets/icons/html5.png'}/>
                    </Col>
                    <Col span={3}>
                        <Image src={'./assets/icons/android-icon.png'}/>
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
                    ¿Has perdido un día entero por que te multaron por Pico y Placa? 
                    ¿Por qué tu vehículo dejó de funcionar? 
                    ¿Cansado de pagar multas por impuestos o por no tener el SOAT?
                    ¿No sabes dónde y cuándo llevar tu vehículo al taller de mecánica? 
                    ¿Te molesta que siempre tengas multas pendientes en el simit o en el runt?
                    <br/>
                    <br/>
                    Notiplac, la app que te ayudará a recordar cuando tienes pico y placa, 
                    cuándo deberás llevar tu vehículo al taller de mecánica automotriz, resolver trámites legales como: 
                    el SOAT, los impuestos, la revisión técnico-mecánica; agendar citas con talleres calificados cerca de ti y 
                    todo esto en una sola aplicación. Si tienes vehículos tipo carros o motos, Notiplac funciona para ti.
                </Paragraph>
                <Divider />
                <Paragraph>
                    <strong>Mi rol:</strong><br/>
                    <strong>Desarrollador Front-end HTML5 para plataforma administrativa</strong><br/>
                    <strong>Desarrollador Front-end Java.Android para aplicación mobil</strong><br/>
                    <strong>Desarrollador Back-end Node.js en servicios Lambda, RDS, S3 de Amazon Web Services (AWS)</strong>
                </Paragraph>
                <Row className={'links-container'} gutter={[10,10]}>
                    <Col>
                        <Button href={'https://play.google.com/store/apps/details?id=boken.notiplac.notiplac&hl=es_CO'} type={'default'} icon={<AppstoreOutlined />} >Visitar Play Store</Button>
                    </Col>
                    <Col>
                        <Button href={'https://apps.apple.com/co/app/notiplac/id1271411880'} type={'default'} icon={<AppstoreOutlined />} >Visitar Apple Store</Button>
                    </Col>
                    <Col>
                        <Button href={'https://notiplac.com/'} type={'default'} icon={<AppstoreOutlined />} >Visitar Web</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default TabNotiplac;