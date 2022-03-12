import React, { Component } from 'react'

class MenuHeader extends Component {
  render() {
    return (
      <div className='menu-header'>
        <div className='menu-header-text'>
          {this.props.category}
        </div>
        <img src={this.props.image} width={300} height={120}/>
      </div>
    )
  }
}

export default MenuHeader
