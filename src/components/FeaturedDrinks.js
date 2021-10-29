import React, { Component } from 'react'
import { CarContext } from '../context';
import Loading from './Loading';
import Drink from './Drinks';
import Title from './Title';

export default class FeaturedDrinks extends Component {
    static contextType = CarContext;
    render() {
        let {loading,  featuredDrinks: Autos } = this.context;
        
        Autos = Autos.map(Auto => {
            return <Drink key={Auto.id} Auto = {Auto} />
        })
        return (
            <section className="featured-rooms">
                <Title title="Drinks In Store"></Title>
                <div className="featured-rooms-center">
                    {
                        loading? <Loading/> : Autos
                    }
                </div>


           </section>
        )
    }
}
