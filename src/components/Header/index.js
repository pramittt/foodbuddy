import React, { Component } from 'react'
import OsInput from '../Field/OsInput'
import Logo from '../../images/logo.png'

class Header extends Component {
  render() {
    const { source } = this.props
    return <>
      <div className='header'>
        <img src={Logo}/>
        <OsInput place='Search item'/>
      </div>
      <div className='header-text'>
        { source === 'booking' ? 'Build Your Menu' : 'Order Details' }
      </div>
    </>
  }
}

export default Header
