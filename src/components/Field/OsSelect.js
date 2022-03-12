import React, { Component } from 'react'

class OsSelect extends Component {
  render() {
    return (
      <div className={this.props.extraClass}>
        <div>
          <label>{this.props.label}</label>
        </div>
        <select>
          { this.props.session.map( (item,index) => <option key={index} value={item}>{item}</option>)}
        </select>
      </div>
    )
  }
}

export default OsSelect;
