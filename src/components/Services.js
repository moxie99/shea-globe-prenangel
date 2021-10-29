import React, { Component } from 'react';
import Title from './Title';
import { FaCar, FaMoneyBillAlt, FaCocktail } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";



export default class Services extends Component {
    state = {
    
    services: [
        {
        icon: <FaCar />,
        title: "Clean Classy Automobiles",
        info: "Mercedes, Toyota, Honda, Peugeot among other"

    },
        {
          icon: <BsBriefcaseFill />,
        title: "Accurate and Full Documentation of Vehicles",
        info: "We can assist with full and accurate documentation of vehicle particulars in a shorter time to avoid embarassments."
      },
        {
          icon: <FaMoneyBillAlt />,
        title: "Easy and Flexible Payment Plans",
        info: "For our automobiles, we make payment easier than the conventional way of purchasing wheels. We have easy and friendly payment plans."
      },
    //     {
    //       icon: <FaMoneyCheckAlt />,
    //     title: "Workable Insurance Options",
    //     info: "We assist with great and spontaneous insurance plans. Insurance assures of safety."
    //   },
        {
          icon: <FaCocktail />,
        title: "Wholesales and Retails Sales of Drinks",
        info: "Bitters, Coca-Cola, Can Drinks, Bottled Drinks and Assorted Wines At Good Price for Wholesalers and Retailers."
      } 

    ]
}
    render() {
        return (
            <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">

                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>

                        </article>
                    })}
                </div>
            </section>
        )
    }
}
