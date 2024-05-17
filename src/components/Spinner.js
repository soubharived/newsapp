import React, { Component } from 'react'
import loadSpinner from '../loadSpinner.gif'
export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={loadSpinner} alt="loading" />
      </div>
    )
  }
}
