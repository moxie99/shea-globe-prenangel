import React from 'react';
import { useContext } from 'react';
import { CarContext } from '../context';
import Title from '../components/Title';
// get al unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};
export default function CarFilter({Autos}) {
    const context = useContext(CarContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

        // get unique types
    let types = getUnique(Autos, 'type');

    // add all
    types = ["all", ...types];


    types = types.map((item, index) => {
        return (<option value={item} key={index}>{item}</option>);
    });


    let passengers = getUnique(Autos, 'capacity');

     passengers =  passengers.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        )
    })
    return (
        <section className="filter-container">
            <Title title="Search Wheels" />

            <form className="filter-form">

                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">Automobile Type</label>
                    <select 
                    name="type" 
                        id="type"
                        value={type}
                    className="form-control" 
                    onChange={handleChange}
                    >
 
                    {types}

                    </select>
                </div>

                {/* end select type */}

                {/* sitter type */}
                <div className="form-group">
                    <label htmlFor="capacity">Passengers</label>
                    <select 
                    name="capacity" 
                    id="capacity" value={capacity} 
                    className="form-control" 
                    onChange={handleChange}
                    >

                    {passengers}

                    </select>
                </div>

                {/* end sitter type */}

                {/* Car Price */}
                <div className="form-group">
                    <label htmlFor="price">Price Range{price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>

                {/* Car Price Ends */}

                {/* Car Size */}
                <div className="form-group">
                    <label htmlFor="size">Car Size</label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            name="minSize"
                            id="size"
                            value={minSize}
                            onChange={handleChange} />
                        <input
                            type="number"
                            name="maxSize"
                            id="size"
                            value={maxSize}
                            onChange={handleChange} />
                    </div>
                </div> 

                {/* Car Size Ends */}

                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">Breakfast </label>  
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">Pets </label>  
                    </div>
                    </div>

                {/* extras ends */}

            </form>
        </section>
    )
}
