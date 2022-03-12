import React, { Component } from 'react'

export default class OsBtn extends Component {
  render() {
    return <div className='btn'>
      <button 
        onSubmit={this.props.onSubmit} 
        onClick={this.props.onClick} 
        id={this.props.id} 
        form={this.props.formId}
        disabled={this.props.disabled}
      >
        {this.props.text}
      </button>
    </div>
  }
}
