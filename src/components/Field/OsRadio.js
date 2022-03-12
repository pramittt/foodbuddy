import React, { Component } from 'react'

export default class OsRadio extends Component {
  render() {
    return this.props.options.map((item,index) => 
    <div key={index} className='radio-input'>
      <input type='radio' id={this.props.name} name={this.props.name} value={item.label} onChange={this.props.onChange}/>
      <label>{item.label}</label>
    </div>
    )
  }
}