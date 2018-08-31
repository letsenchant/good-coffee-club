import React from 'react'
import PropTypes from 'proptypes'
import ShopCard from 'components/molecules/ShopCard'

const ResultsList = (props) => {
  return (
    <ul className="ResultsList">
      { props.shops && props.shops.map(shop => (
        <ShopCard
          key={shop.name}
          name={shop.name}
          address1={shop.address1}
          city={shop.city}
          state={shop.state}
          photoUrl={`https://picsum.photos/120/210/?random&key=${shop.name.substring(0,3)})`}
        />
      ))}
      { props.shops && props.shops.length == 0 &&
        <li>Loading...</li>
      }
    </ul>
  )
}

ResultsList.propTypes = {
  shops: PropTypes.array.isRequired
}

export default ResultsList
