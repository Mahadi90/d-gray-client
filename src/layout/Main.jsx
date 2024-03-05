import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <marquee className='bg-black p-2 text-white font-bold' behavior="" direction="">Discount Up to 100% || Buy 1990+ and get delivery charge free</marquee>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;