import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImage from '../sheaglobalImages/audicar1.jpg';

export default function Cars({ Auto }) {
  const { name, slug, images, price } = Auto;
  return (
      <>
      <article className="room">
        <div className="img-container">
          <img src={images[0] || defaultImage} alt="car" />
          <div className="price-top">
            <h6>#{price}</h6>
            <p>Negotiable</p>
          </div>
          <Link to={`/cars/${slug}`} className="btn-primary room-link">
            Features
          </Link>
        </div>
        <p className="room-info">
          {name}
        </p>
         </article>
   
    </>
  );
}


Cars.propTypees = {
  Auto:PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  })
}