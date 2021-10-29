import React from 'react';
import Drinks from './Drinks';

export default function DrinkList({ Autos }) {
    if (Autos.length === 0) {
        return (
            <div className="empty-search">
                <h3>Ooops...., No Drinks Match Your Search Parameter</h3>
            </div>
        )
    }
    
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    Autos.map((item) => {
                        return (
                            <Drinks key={item.id} Auto={item} />
                        )
                    })
                }

            </div>
        </section>
    )
}
