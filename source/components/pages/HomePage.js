import React from 'react'
import PropTypes from 'proptypes'
import { connect } from 'react-redux';

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
              <li className="ResultCard">
                <div className="ResultPhoto" style={{ backgroundImage: `url(https://picsum.photos/120/210/?random&key=${shop.name.substring(0,3)})`}}></div>
                <h3>{shop.name}</h3>
                <p>{shop.address1}<br/>{shop.city}, {shop.state}</p>
              </li>
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
