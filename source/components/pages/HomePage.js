import React from 'react'
import PropTypes from 'proptypes'
import { connect } from 'react-redux';

class HomePage extends React.Component {
  render() {
    console.log("Rendering HomePage w/ props...", this.props)
    return (
      <div>
        <h1>List of Coffee Shops</h1>
        <ul>
        { this.props.shops && this.props.shops.map(shop => (
          <li>{shop.title}</li>
        ))}
        { !this.props.shops &&
          <li>No shops loaded yet</li>
        }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    shops: state.coffeeShops.shops
  };
}

HomePage.propTypes = {
  shops: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(HomePage);
