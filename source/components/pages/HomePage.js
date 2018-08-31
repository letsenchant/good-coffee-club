import React from 'react'
import PropTypes from 'proptypes'
import { connect } from 'react-redux';

import ShopCard from 'components/molecules/ShopCard'

class HomePage extends React.Component {
  render() {
    console.log("Rendering HomePage w/ props...", this.props)
    return (
      <div className="HomePage">
        <header className="HomePage__Header">
          <div className="wrap">
            <input
              className="SearchInput"
              type="text"
              value={this.props.searchInputText}
              placeholder="Where are you looking?"
            />
          </div>
        </header>
        <div className="ResultsContainer wrap">
          <ul className="ResultsList">
            { this.props.shops && this.props.shops.map(shop => (
              <ShopCard
                key={shop.name}
                name={shop.name}
                address1={shop.address1}
                city={shop.city}
                state={shop.state}
                photoUrl={`https://picsum.photos/120/210/?random&key=${shop.name.substring(0,3)})`}
              />
            ))}
            { this.props.shops && this.props.shops.length == 0 &&
              <li>Loading...</li>
            }
          </ul>
          <div className="ResultsMap"></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  console.log("Got state to map: ", state)
  return {
    shops: state.coffeeShops.shops
  };
}

HomePage.propTypes = {
  shops: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(HomePage);
