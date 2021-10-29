import React, { Component } from 'react'
import { CarContext } from '../context';
import Loading from './Loading';
import Car from './Cars';
import Title from './Title';

export default class FeaturedCars extends Component {
    static contextType = CarContext;
    render() {
        let {loading,  featuredCars: Autos } = this.context;
        
        Autos = Autos.map(Auto => {
            return <Car key={Auto.id} Auto = {Auto} />
        })
        return (
            <section className="featured-rooms">
                <Title title="Featured Wheels"></Title>
                <div className="featured-rooms-center">
                    {
                        loading? <Loading/> : Autos
                    }
                </div>


           </section>
        )
    }
}
