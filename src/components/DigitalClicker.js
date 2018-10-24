import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor() {
    this.state = {
      timesClicked: 0
    }
  }

  increment = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return(
      <button>//timesClicked
      </button>
    )
  }
}
