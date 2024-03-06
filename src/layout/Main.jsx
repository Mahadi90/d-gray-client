import React, { useContext } from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import { AuthContext } from '../../providers/AuthProivder';

const Main = () => {
const {user} = useContext(AuthContext)

    return (
        <div>
            <Header></Header>
            <marquee className='bg-black p-2 text-white font-bold' behavior="" direction="">Discount Up to 100% || Buy 1990+ and get delivery charge free</marquee>
            {user && <h2 className='font-bold text-primary text-center my-2'>Hi,{user?.displayName}</h2>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;