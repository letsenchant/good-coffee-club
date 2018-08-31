import React from 'react'
import PropTypes from 'proptypes'
import { connect } from 'react-redux';

import ResultsList from 'components/organisms/ResultsList'
import ResultsMap from 'components/organisms/ResultsMap'

class HomePage extends React.Component {
  render() {
    console.log("Rendering HomePage w/ props...", this.props)
    return (
      <div className="HomePage">
        <header className="Header">
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
          <ResultsList shops={this.props.shops} />
          <ResultsMap shops={this.props.shops} />
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
