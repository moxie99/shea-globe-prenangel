import React, { Component } from 'react';
import defaultImage from '../sheaglobalImages/toyotatruck2.jpg';
// import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { CarContext } from '../context';
import StyledHero from '../components/StyledHero';




export default class SingleDrink extends Component{
    constructor(props) {
        super(props);
        this.state = {
            drinkSlug: this.props.match.params.drinkSlug,
            defaultImage
        }
    }

    static contextType = CarContext;
    // componentDidMount() {
        
    // }
    render() {
        const { getDrink } = this.context;
        const drink = getDrink(this.state.drinkSlug);
        if (!drink) {
            return <div className="error">

                <h3>
                    Drink Not Available On This Stand...
                </h3>
                <Link to="/drinks" className="btn-primary"> 
                    Return To Drinks
                </Link>
            </div>
        }
        const { drinkSlug, description, capacity, size, price, extras, breakfast, pets, images } = drink;

        const [mainImg, ...defaultImg] = images;
        return (
            <>
                
                <StyledHero img={ mainImg || this.state.defaultImage }>
                    <Banner title={`${drinkSlug} Stand`}>
                        <Link to='/drinks' className="btn-primary">
                            Back To Drinks
                        </Link>
                    </Banner>
                </StyledHero>

                 <section className="single-room">
                    <div className="single-room-images">
                        {
                            defaultImg.map((item, index) => {
                                return <img key={index} src={item} alt={drinkSlug} />;
                            })
                            }
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>
                                Detaiils
                            </h3>
                            <p>
                                {description}
                            </p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>
                               price:#{price}
                            </h6>
                            <h6>
                                size:#{size} sq. ft.
                            </h6>
                            <h6>
                                max. capacity: {
                                    capacity > 1? `${capacity} people`:
                                `${capacity} person`
                                }
                            </h6>
                            <h6>
                                {pets ? `pets allowed` :
                                `not allowed `}
                            </h6>
                            <h6>
                                {

                                    breakfast &&  `free breakfast included`
                                }
                            </h6>
                        </article>
                    </div>
                </section>

                <section className="room-extras">
                    <h6>
                        extras
                    </h6>

                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </section>
                
                
            </>
        )
    }
}
 