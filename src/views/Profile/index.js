import React, { useState } from 'react';
import { Row, Col, Typography, Avatar,Card, Popover, Tabs } from 'antd';
import { LinkedinOutlined } from '@ant-design/icons';
import { SkillPopOver,CarouselWorks, TabNotiplac, TabAutopacifico, TabCelsia, TabInacar, TabGSRefini, TabReem } from './components';
import { ImagesFiles } from '@utils';
import './style.scss';
const Profile = ( props ) => {
    const { Title, Paragraph,Text,Link } = Typography;
    const { TabPane } = Tabs;
    
    const [ tabSelection, setTabSelection ] = useState('notiplac')

    return(
        <Row className={'profile-container'}>
            <Col span={24} className={'top-col'}>
                <Card className={'profile-description'}>
                    <Row gutter={[10,10]} >
                        <Col sm={24} md={16} lg={8} className={'foto-container'}>
                            <Avatar size={200}  src={ImagesFiles.mi_foto} />
                        </Col>
                        <Col sm={24} md={16} lg={16}>
                            <Title>Hello world!</Title>
                            <Paragraph>
                                Mi nombre es <strong>Julián David</strong> y soy <strong>Diseñador de Medios Interactivos</strong> apasionado por el <strong>Desarrollo de Software</strong>, 
                                los videojuegos, las infraestructuras y las nuevas tecnologías. 
                            </Paragraph>
                            <Paragraph>
                                Todo inicia con el gusto por los videojuegos y en el 2009 me embarco en una aventura del proceso 
                                creativo en una universidad diversa en pensamientos, llena de personas con ideas increíbles y 
                                rica en dinámicas de trabajo en equipo que me enamoran del desarrollo de todo medio interactivo y 
                                su capacidad de comunicar a las personas, sin importar su presentación, web, mobil, videojuegos o el arte
                            </Paragraph>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col xs={0} sm={0} lg={24} className={'carousel-col'}>
                <CarouselWorks />
            </Col>
            <Col span={24} className={'mid-col'}>
                <Card className={'skills-container'}>
                    <Row gutter={[10,10]} >
                        <Col lg={8}>
                            <Row>
                                <Col span={24}>
                                    <Title>Powers up!</Title>
                                </Col>
                                <Col span={24}>
                                    <Row gutter={[10,10]}>
                                        <Col span={12}>
                                            <Card className={'skill-card'}>
                                                    <Avatar size={80} className={'avatar-language'} src={ImagesFiles.icon_android} />
                                                {/* <Popover content={SkillPopOver} title={'Android Nativo'} trigger={"hover"}>
                                                </Popover> */}
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card className={'skill-card'}>
                                                    <Avatar size={80} className={'avatar-language'} src={ImagesFiles.icon_react} />
                                                {/* <Popover content={SkillPopOver} title={'React JS'} trigger={"hover"}>
                                                </Popover> */}
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card className={'skill-card'}>
                                                    <Avatar size={80} className={'avatar-language'} src={ImagesFiles.icon_node} />
                                                {/* <Popover content={SkillPopOver} title={'Node JS'} trigger={"hover"}>
                                                </Popover> */}
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card className={'skill-card'}>
                                                    <Avatar size={80} className={'avatar-language'} src={ImagesFiles.icon_c} />
                                                {/* <Popover content={SkillPopOver} title={'C#'} trigger={"hover"}>
                                                </Popover> */}
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card className={'skill-card'}>
                                                    <Avatar size={80} className={'avatar-language'} src={ImagesFiles.icon_aws} />
                                                {/* <Popover content={SkillPopOver} title={'AWS'} trigger={"hover"}>
                                                </Popover> */}
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card className={'skill-card'}>
                                                    <Avatar size={80} className={'avatar-language'} src={ImagesFiles.icon_mysql} />
                                                {/* <Popover content={SkillPopOver} title={'SQL / My SQL'} trigger={"hover"}>
                                                </Popover> */}
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={16}>
                            <Tabs activeKey={tabSelection} onChange={(e) => setTabSelection(e)}>
                                <TabPane key={'notiplac'} tab={'Notiplac'}>
                                    <TabNotiplac />
                                </TabPane>
                                <TabPane key={'autopacifico'} tab={'Autopacifico'}>
                                    <TabAutopacifico />
                                </TabPane>
                                <TabPane key={'celsia'} tab={'Celsia'}>
                                    <TabCelsia />
                                </TabPane>
                                <TabPane key={'inacar'} tab={'Inacar'}>
                                    <TabInacar />
                                </TabPane>
                                <TabPane key={'reem'} tab={'Reem'}>
                                    <TabReem />
                                </TabPane>
                                <TabPane key={'gsrefini'} tab={'GSRefini'}>
                                    <TabGSRefini />
                                </TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col span={24} className={'footer-col'}>
                <Card className={'contact-container'}>
                    <Row gutter={[10,10]}>
                        <Col sm={24} lg={12}>
                            <Title level={5}>Mi Contacto:</Title>
                            <Text>Teléfono:<strong>3183907895</strong><br/></Text>
                            <Text>Correo:<strong>cuevas.juliandavid@gmail.com</strong></Text>
                        </Col>
                        <Col sm={24} lg={12}>
                            <Title level={5}>Mis Redes Sociales:</Title>
                            <Link href={'https://www.linkedin.com/in/cuevasjulian/'}><Text><LinkedinOutlined style={{color:'#0a66c2'}}/> <strong>Mi LinkedIn</strong></Text></Link>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    );
}

export default Profile;