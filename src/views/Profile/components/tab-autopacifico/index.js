import React from 'react';
import { Typography, Row, Col, Image, Divider, Button } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { ImagesFiles } from '@utils';
import './style.scss';
const TabAutopacifico = ( props ) => {
    const { Title, Paragraph } = Typography;
    return(
        <Row gutter={[10,10]} className={'tab-autopacifico-container'}>
            <Col span={24}>
                <Title>Autopacifico</Title>
            </Col>
            <Col span={24}>
                <Image src={ImagesFiles.autoapp_label}/>
            </Col>
            <Col span={24}>
                <Divider />
                <Title level={4}>Tecnologías</Title>
                <Row gutter={[10,10]}>
                    <Col span={3}>
                        <Image src={ImagesFiles.icon_html}/>
                    </Col>
                    <Col span={3}>
                        <Image src={ImagesFiles.icon_android}/>
                    </Col>
                    <Col span={3}>
                        <Image src={ImagesFiles.icon_node}/>
                    </Col>
                    <Col span={3}>
                        <Image src={ImagesFiles.icon_aws}/>
                    </Col>
                    <Col span={3}>
                        <Image src={ImagesFiles.icon_mysql}/>
                    </Col>
                </Row>
                <Divider />
                <Paragraph>
                    Conozca nuestra nueva aplicación Autopacifico App. Esta aplicación está diseñada especialmente para 
                    ayudar a los conductores Chevrolet a tener la posibilidad de resolver todas sus necesidades del vehículo 
                    desde la palma de sus manos y es totalmente GRATIS.
                </Paragraph>
                <Divider />
                <Paragraph>
                    <strong>Mi rol:</strong><br/>
                    <strong>Desarrollador Front-end HTML5 para plataforma administrativa</strong><br/>
                    <strong>Desarrollador Front-end Java.Android para aplicación mobil cliente y taller</strong><br/>
                    <strong>Desarrollador Back-end Node.js en servicios Lambda, RDS, S3 de Amazon Web Services (AWS)</strong>
                </Paragraph>
                <Row className={'links-container'} gutter={[10,10]}>
                    <Col>
                        <Button href={'https://play.google.com/store/apps/details?id=boken.notiplac&hl=es_CO'} type={'default'} icon={<AppstoreOutlined />} >Visitar Play Store</Button>
                    </Col>
                    <Col>
                        <Button href={'https://apps.apple.com/co/app/autopacifico-app/id1042466672'} type={'default'} icon={<AppstoreOutlined />} >Visitar Apple Store</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default TabAutopacifico;