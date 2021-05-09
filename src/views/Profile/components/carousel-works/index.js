import React from 'react';
import { Carousel, Image } from 'antd';
import './style.scss';

const CarouselWorks = () => {

    const proyectosPath = './assets/proyectos';

    return (
        <Carousel  autoplay>
            <div className={'imagen-container'}>
                <Image className={'image-carousel'}  src={`${proyectosPath}/notiplac/background.png`} />
            </div>
            <div className={'imagen-container'}>
                <Image className={'image-carousel'}  src={`${proyectosPath}/inacar/web.png`} />
            </div>
            <div className={'imagen-container'}>
                <Image className={'image-carousel'}  src={`${proyectosPath}/celsia/background.png`} />
            </div>
            <div className={'imagen-container'}>
                <Image className={'image-carousel'} src={`${proyectosPath}/autoapp/background.png`} />
            </div>
        </Carousel>
    );
}

export default CarouselWorks;