import React, { Component } from 'react'

export default class Questions extends Component {
  render() {
    return (
      <div>
        <p>I am Questions</p>
        <p>{this.props.properties.category}</p>
        <p>{this.props.properties.difficulty}</p>
      </div>
    )
  }
}
