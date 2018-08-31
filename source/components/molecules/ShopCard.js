import React from 'react'
import PropTypes from 'proptypes'

const ShopCard = (props) => {
  return (
    <li className="ShopCard" key={props.name}>
      <div className="ShopPhoto" style={{ backgroundImage: `url(${props.photoUrl})`}}></div>
      <h3>{props.name}</h3>
      <p>{props.address1}<br/>{props.city}, {props.state}</p>
    </li>
  )
}

ShopCard.propTypes = {
  name: PropTypes.string.isRequired,
  address1: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired
}

export default ShopCard
