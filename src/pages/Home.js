import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedCars from '../components/FeaturedCars';
import FeaturedDrinks from "../components/FeaturedDrinks";

const Home = () => {

    return (
        <>

        
            <Hero hero="defaultHero">
                <Banner
                    title="Luxurious Automobile"
                    subtitle="Check Out Our Classy Wheels Good Payment Plan">

                    <Link to="/cars" className="btn-primary"> Our Automobiles</Link>
                </Banner>
            </Hero>

            <Services></Services>
            <FeaturedCars></FeaturedCars>
            <FeaturedDrinks></FeaturedDrinks>


        </>
    )
    
}

export default Home

