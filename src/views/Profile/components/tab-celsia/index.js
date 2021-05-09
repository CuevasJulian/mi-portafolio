import React from 'react';
import { Typography, Row, Col, Image, Divider, Button } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons'
import './style.scss';

const TabCelsia = ( props ) => {
    const { Title, Paragraph } = Typography;
    return(
        <Row gutter={[10,10]} className={'tab-celsia-container'}>
            <Col span={24}>
                <Title>Celsia Movilidad</Title>
            </Col>
            <Col span={24}>
                <Image src={'./assets/proyectos/celsia/background.png'}/>
            </Col>
            <Col span={24}>
                <Divider />
                <Title level={4}>Tecnologías</Title>
                <Row gutter={[10,10]}>
                    <Col span={3}>
                        <Image src={'./assets/icons/html5.png'}/>
                    </Col>
                    <Col span={3}>
                        <Image src={'./assets/icons/c.png'}/>
                    </Col>
                    <Col span={3}>
                        <Image src={'./logo192.png'}/>
                    </Col>
                    <Col span={3}>
                        <Image src={'./assets/icons/android-icon.png'}/>
                    </Col>
                    <Col span={3}>
                        <Image src={'./assets/icons/nodejs.png'}/>
                    </Col>
                    <Col span={3}>
                        <Image src={'./assets/icons/postgress.png'}/>
                    </Col>
                </Row>
                <Divider />
                <Paragraph>
                    Celsia movilidad te permite gestionar tu vehículo eléctrico desde la palma de tu mano.<br/><br/>

                    Con Celsia movilidad Sostenible podrás:<br/>
                    
                    - Inscribir tus vehículos eléctricos<br/>
                    - Visualizar y filtrar las estaciones de carga adecuadas para tu vehículo<br/>
                    - Realizar estimaciones de tiempo y distancia en tus recorridos a hacia la estación<br/>
                    - Iniciar el proceso de carga de tu vehículo<br/>
                    - Monitorea el estado de tu carga desde tu celular<br/>
                    - Terminar el proceso de carga de manera remota<br/>
                    - Visualizar el historial de tus recargas por vehículo<br/>
                    <br/>
                    Has parte de la comunidad eléctrica.
                </Paragraph>
                <Divider />
                <Paragraph>
                    Este increible proyecto trae a la mano del conductor y administrador de puntos de carga (Estaciones) la información de sus
                    transacciones a sus dispositivos, permitiendole entrar a una experiencia que transforma el sector automotriz volviendolo
                    inteligente.
                </Paragraph>
                <Divider />
                <Paragraph>
                    <strong>Mi rol:</strong><br/>
                    <strong>Desarrollador Front-end HTML5, React para plataforma administrativa</strong><br/>
                    <strong>Desarrollador Front-end Java.Android para aplicación mobil</strong><br/>
                    <strong>Desarrollador Back-end C# .Net MS-Server y Node.js junto a Postgress</strong>
                </Paragraph>
                <Row className={'links-container'} gutter={[10,10]}>
                    <Col>
                        <Button href={'https://play.google.com/store/apps/details?id=boken.epsacelsia&hl=es_419&gl=US'} type={'default'} icon={<AppstoreOutlined />} >Visitar Play Store</Button>
                    </Col>
                    <Col>
                        <Button href={'https://apps.apple.com/co/app/celsia-movilidad-sostenible/id1271408205'} type={'default'} icon={<AppstoreOutlined />} >Visitar Apple Store</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default TabCelsia;