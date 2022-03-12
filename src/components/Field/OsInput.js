import React, { Component } from 'react'

class OsInput extends Component {
  render() {
    return (
      <div className={`input-field ${this.props.extraClass}`}>
        <div>
          <label>{this.props.label}</label>
        </div>
        <input 
          placeholder={this.props.place} 
          type={this.props.type} 
          disabled={this.props.disabled} 
          onChange={this.props.onChange} 
          value={this.props.value} 
          required={this.props.required}
        />
      </div>
    )
  }
}

OsInput.defaultProps = {
  required: true
}

export default OsInput
