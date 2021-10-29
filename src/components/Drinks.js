import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImage from '../sheaglobalImages/coke5.jpg';

export default function Cars({ Auto }) {
  const { drinkSlug, images, packageName, Drinkprice } = Auto;
  return (
      <>
      <article className="room">

        <div className="img-container">
          <img src={images[1] || defaultImage} alt="car" />
          <div className="price-top">
            <h6>#{Drinkprice}</h6>
            <p>per {packageName}</p>
          </div>
          <Link to={`/drinks/${drinkSlug}`} className="btn-primary room-link">
            Features
          </Link>
        </div>
        <p className="room-info">
          {drinkSlug}
        </p>
        
         </article>
   
    </>
  );
}


Cars.propTypees = {
  Auto:PropTypes.shape({
    packageName: PropTypes.string.isRequired,
    drinkSlug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    Drinkprice: PropTypes.number.isRequired,
  })
}
