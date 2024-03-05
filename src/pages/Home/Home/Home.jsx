import React from 'react';
import Banner from './Banner/Banner';
import Collection from './Collection/Collection';
import Popular from './popular/Popular';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Collection></Collection>
           <Popular></Popular>
        </div>
    );
};

export default Home;