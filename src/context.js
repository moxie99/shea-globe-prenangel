import React, { Component } from 'react';
import { items } from './data';

const CarContext = React.createContext();

class CarProvider extends Component {

    state = {
        Autos: [],
        sortedCars: [],
        sortedDrinks: [],
        featuredCars: [],
        featuredDrinks: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    // getData

    componentDidMount() {
        let Autos = this.formatData(items);
        let featuredCars = Autos.filter(Auto => Auto.featured === true);
        let featuredDrinks = Autos.filter(Auto => Auto.drinks === true);


        let maxPrice = Math.max(...Autos.map((item) =>
            item.price));
        
        let maxSize = Math.max(...Autos.map((item) =>
            item.size));

        this.setState({
            Autos,
            featuredCars,
            featuredDrinks,
            sortedCars: Autos,
            sortedDrinks: Autos,
            loading: false,
            price: maxPrice,
            maxPrice,
            size: maxSize,
            maxSize
        });
    }

    formatData(items) {
        let tempItems = items.map(item => {

            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let Auto = { ...item.fields, images, id  };
            return Auto;
        });
        return tempItems;
    }


    getCar = (slug) => {
        let tempAutos = [...this.state.Autos];
        const car = tempAutos.find(car => car.slug === slug);
        return car;
    };

    getDrink = (drinkSlug) => {
        let tempDrinks = [...this.state.Autos];
        const drink = tempDrinks.find(drink => drink.drinkSlug === drinkSlug);
        return drink;
    };


    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;

        this.setState(
            {
                [name]: value
            },
            this.filterCars);   
    };


    filterCars = () => {
        let {
            Autos, type, capacity, price, minSize, maxSize, breakfast, pets
        } = this.state

        
        let tempAutos = [...Autos];
        capacity = parseInt(capacity);
        price = parseInt(price);

        // filter by type
        if (type !== 'all') {
            tempAutos = tempAutos.filter( 
                Auto => Auto.type === type
            )
        }

        // filter by capacity
        if (capacity !== 1) {
            tempAutos = tempAutos.filter(
                Auto => Auto.capacity >= capacity
            );
        }

        // filter by price
    
            tempAutos = tempAutos.filter(
                Auto => Auto.price <= price
            ); 
            
        // filter by size
        tempAutos.filter(
            Auto => Auto.size >= minSize && Auto.size <= maxSize
        );

        // filter by breakfast
        if (breakfast) {
            tempAutos = tempAutos.filter( Auto => 
                Auto.breakfast === true
                )
        }
        

        // filter by pets
        if (pets) {
            tempAutos = tempAutos.filter( Auto => 
                Auto.pets === true
                )
            }


        // filter by pets

// change state

        this.setState({
            sortedCars: tempAutos 
        })
    }; 

    filterDrinks = () => {
        
    }


    render() {
        return (
            <CarContext.Provider value={{
                ...this.state, 
                getCar: this.getCar,
                getDrink: this.getDrink,
                handleChange: this.handleChange
            }}>

                {this.props.children}
                
            </CarContext.Provider>
        )
    }
}

const CarConsumer = CarContext.Consumer; 

export function withCarConsumer(Component){
    return function ConsumerWrapper(props) {
        return <CarConsumer>
            {
                value => <Component {...props} context={value} />
            }
        </CarConsumer>
    }
}

export {CarProvider, CarContext, CarConsumer}