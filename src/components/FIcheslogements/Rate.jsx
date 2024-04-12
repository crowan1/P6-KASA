import React from "react";
import '../../assets/tags.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

function Rate(props) {

  const { ratingScale } = props

  const order = [1, 2, 3, 4, 5];

  return (
    <div className="ratting-container">
      {order.map((orderElem) => {
        return ratingScale >= orderElem ? (
          <FontAwesomeIcon key={orderElem} icon={solidStar} style={{ color: '#FF6060' }} />
        ) : (
          <FontAwesomeIcon key={orderElem} icon={solidStar} style={{ color: '#E3E3E3' }} />
        )
      })}
    </div>
  );
}

export default Rate;


