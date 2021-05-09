import React from 'react';
import { Typography, Row, Col, Image, Divider, Button } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons'
import './style.scss';

const TabReem = ( props ) => {
    const { Title, Paragraph } = Typography;
    return(
        <Row gutter={[10,10]} className={'tab-notiplac-container'}>
            <Col span={24}>
                <Title>Proyecto Reem</Title>
            </Col>
            <Col span={24}>
                <Image src={'./assets/proyectos/reem/background.png'}/>
            </Col>
            <Col span={24}>
                <Divider />
                <Title level={4}>Tecnologías</Title>
                <Row gutter={[10,10]}>
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
                        <Image src={'./assets/icons/aws.png'}/>
                    </Col>
                    <Col span={3}>
                        <Image src={'./assets/icons/mysql-icon.png'}/>
                    </Col>
                </Row>
                <Divider />
                <Paragraph>
                    Este proyecto nace en colaboración con un restaurante en la ciudad de Popayan
                    buscando la democratización de las tecnologias, a través de un sistema
                    de tres partes ( Reem, Reem Central, Reem Store ) conectar los diferentes actores locales que gestionan 
                    el envio de mercancia y asi brindar una alternativa a las tiendas digitales actuales y ayudando a que pequeñas
                    empresas de gestion y envio puedan digitalizarse.
                    <br/><br/>
                    <Title level={5}>Reem</Title>
                    Esta aplicación va destinada al empresario y la gestión de su inventario, a través de una aplicación para Android
                    le permite guardar sus productos junto a un centro de comandas (ordenes de compra) que conecta con los domiciliarios en la zona
                    y brindandole una mano de ayuda al momento de monitorear sus ingresos, envios entre otros datos.
                    <br/><br/>
                    <Title level={5}>Reem Central</Title>
                    Esta Aplicación le permite a las empresas de domicilios sin aplicaciónes de ningun tipo gestionar su propia flotilla; registrando
                    a sus domiciliarios cuya cuenta en <strong>Reem</strong> se encuentre registrada. esta le permitira enviar, gestionar y monitorear los servicios de los diferentes
                    negocios que se encuentran registrados al sistema.
                    <br/><br/>
                    <Title level={5}>Reem Store</Title>
                    La aplicacón Web realizada en React encamina a los empresarios que esten registrados dentro del sistema a ser visibles sin costos exagerados en internet
                    permitiendole exponer sus inventarios junto a sus listas de precios y un carro de compras, finalizando asi la union de todos los actores locales.
                </Paragraph>
                <Divider />
                <Paragraph>
                    <strong>Mi rol:</strong><br/>
                    <strong>Desarrollador Front-end React para la tienda virtual (En proceso)</strong><br/>
                    <strong>Desarrollador Front-end Java.Android para aplicación mobil</strong><br/>
                    <strong>Desarrollador Back-end Node.js en servicios Lambda, RDS, S3 de Amazon Web Services (AWS)</strong>
                </Paragraph>
                <Row className={'links-container'} gutter={[10,10]}>
                    <Col>
                        <Button href={'https://play.google.com/store/apps/details?id=com.peque.mipequenegocio'} type={'default'} icon={<AppstoreOutlined />} >Visitar Play Store Reem</Button>
                    </Col>
                    <Col>
                        <Button href={'https://play.google.com/store/apps/details?id=com.app.reemcentral'} type={'default'} icon={<AppstoreOutlined />} >Visitar Play Store Reem Central</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default TabReem;