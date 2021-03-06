import React, { Component } from 'react'
import Human from './Human'
import AI from './AI'

export default class Game extends Component {
  constructor() {
    super()
    this.state = {
      gameType: ''
    }
  }

  clickHandler = e => {
    this.setState({
      gameType: e.target.value
    })
  }

  onClick() {
    this.setState({
      gameType: ''
    })
  }

  render() {
    if (this.state.gameType !== '') {
      return (
        <div className="game">
          <button className="back" onClick={() => this.onClick()}>
            &larr;
          </button>
          {this.state.gameType === 'Human' ? <Human type="Human" /> : <AI type="AI" />}
        </div>
      )
    }

    return (
      <div className="choose-game-type">
        <h1>{'How would you like to play?'}</h1>
        <div className="buttons">
          <button onClick={this.clickHandler} value="AI">
            {'One Player'}
          </button>
          <button onClick={this.clickHandler} value="Human">
            {'Two Players'}
          </button>
        </div>
      </div>
    )
  }
}
