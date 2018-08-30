import React, { PropTypes } from 'react'

export default class NotFoundPage extends React.Component {
  render() {
    console.log("Rendering 404 page...")
    return <h1>404 - Route not found</h1>
  }
}

NotFoundPage.propTypes = {}
