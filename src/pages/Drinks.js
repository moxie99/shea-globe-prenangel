import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import DrinkContainer from '../components/DrinkContainer';
import { Link } from 'react-router-dom';



const Drinks = () => {
    return (

        <>
            <Hero hero="drinksHero">
                <Banner title="Drink Stand">
                    <Link to="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>

            </Hero>
            
            <DrinkContainer />
            
            </>
    )
}

export default Drinks
