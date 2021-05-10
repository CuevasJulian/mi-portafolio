import React from 'react';
import { Carousel, Image } from 'antd';
import { ImagesFiles } from '@utils';
import './style.scss';

const CarouselWorks = () => {

    return (
        <Carousel  autoplay>
            <div className={'imagen-container'}>
                <Image className={'image-carousel'}  src={ImagesFiles.notiplac_label} />
            </div>
            <div className={'imagen-container'}>
                <Image className={'image-carousel'}  src={ImagesFiles.inacar_label} />
            </div>
            <div className={'imagen-container'}>
                <Image className={'image-carousel'}  src={ImagesFiles.gsrefini_label} />
            </div>
            <div className={'imagen-container'}>
                <Image className={'image-carousel'}  src={ImagesFiles.celsia_label} />
            </div>
            <div className={'imagen-container'}>
                <Image className={'image-carousel'} src={ImagesFiles.autoapp_label} />
            </div>
            <div className={'imagen-container'}>
                <Image className={'image-carousel'}  src={ImagesFiles.reem_label} />
            </div>
        </Carousel>
    );
}

export default CarouselWorks;