import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import CarContainer from '../components/CarContainer';


const Cars = () => {

    return (

        <>
        <Hero hero="carsHero">
            
            <Banner
                title="Our Catalogue Of Wheels"
                subtitle="Get To Feel Our Wheels Before The Road Experience"
            >

                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
            </Hero>

            <CarContainer />
            
            </>
    )
}

export default Cars
