import React, { Component } from 'react';
import defaultBackground from '../sheaglobalImages/toyotatruck2.jpg';
// import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { CarContext } from '../context';
import StyledHero from '../components/StyledHero';



export default class SingleCar extends Component{
    constructor(props) {
        super(props);

        console.log(this.props);

        this.state = {
            slug: this.props.match.params.slug,
            defaultBackground
        }
    }

    static contextType = CarContext;
    // componentDidMount() {
        
    // }
    render() {
        const { getCar } = this.context;
        const car = getCar(this.state.slug);
        if (!car) {

            return (

                <div className="error">
                    <h3>
                        No Car Found
                    </h3>
                    <Link to="/cars" className="btn-primary">
                        Return To Cars
                    </Link>
                </div>
            );
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = car;

        const [mainImg, ...defaultImg]  = images;
         return (
            <>
                <StyledHero img={mainImg || this.state.defaultBackground }>
                    <Banner title={`${name} Showroom`}>
                        <Link to='/cars' className="btn-primary">
                            Back To Cars
                        </Link>
                    </Banner>
                </StyledHero>

                <section className="single-room">
                    <div className="single-room-images">
                        {
                            defaultImg.map((item, index) => {
                                return <img key={index} src={item} alt={name} />;
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
 