import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import img from '../../../../assets/images/banner.jpg'
import img2 from '../../../../assets/images/banner0.jpg'

const Banner = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper carousel">
        <SwiperSlide>
            <img  className='w-full h-[90vh]' src={img} alt="" />
            <div className='w-1/2 lg:w-1/3 text-white bg-black bg-opacity-5  p-10 absolute space-y-2 top-0 lg:top-28 left-0 lg:left-20'>
                <h2 className='text-xl font-bold tracking-widest'>WellCome to</h2>
                <h2 className='text-4xl font-extrabold'>D Gray</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi excepturi reprehenderit nulla, atque repudiandae nam ratione et quaerat natus.</p>
                <button className='btn btn-primary'>Order Now</button>
            </div>
            </SwiperSlide>
        <SwiperSlide><img className='w-full h-[80vh]' src={img2} alt="" />
        <div className='w-1/2 lg:w-1/3 text-white bg-black bg-opacity-5  p-10 absolute space-y-2 top-0 lg:top-28 left-0 lg:left-20'>
                <h2 className='text-xl font-bold tracking-widest'>WellCome to</h2>
                <h2 className='text-4xl font-extrabold'>D Gray</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi excepturi reprehenderit nulla, atque repudiandae nam ratione et quaerat natus.</p>
                <button className='btn btn-primary'>Order Now</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img  className='w-full h-[90vh]' src={img} alt="" />
            <div className='w-1/2 lg:w-1/3 text-white bg-black bg-opacity-5  p-10 absolute space-y-2 top-0 lg:top-28 left-0 lg:left-20'>
                <h2 className='text-xl font-bold tracking-widest'>WellCome to</h2>
                <h2 className='text-4xl font-extrabold'>D Gray</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi excepturi reprehenderit nulla, atque repudiandae nam ratione et quaerat natus.</p>
                <button className='btn btn-primary'>Order Now</button>
            </div>
            </SwiperSlide>
        <SwiperSlide><img className='w-full h-[80vh]' src={img2} alt="" />
        <div className='w-1/2 lg:w-1/3 text-white bg-black bg-opacity-5  p-10 absolute space-y-2 top-0 lg:top-28 left-0 lg:left-20'>
                <h2 className='text-xl font-bold tracking-widest'>WellCome to</h2>
                <h2 className='text-4xl font-extrabold'>D Gray</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi excepturi reprehenderit nulla, atque repudiandae nam ratione et quaerat natus.</p>
                <button className='btn btn-primary'>Order Now</button>
            </div>
        </SwiperSlide>
      </Swiper>
    );
};

export default Banner;