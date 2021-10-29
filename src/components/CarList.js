import React from 'react';
import Cars from './Cars';

export default function CarList({ Autos }) {
    if (Autos.length === 0) {
        return (
            <div className="empty-search">
                <h3>Ooops...., No Wheels Match Your Search Parameter</h3>
            </div>
        )
    }
    
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    Autos.map((item) => {
                        return (
                            <Cars key={item.id} Auto={item} /> 
                        )
                    })
                }

            </div>
        </section>
    )
}
