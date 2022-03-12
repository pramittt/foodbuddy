import React, { Component } from 'react'
import Cart from '../Cart'
import OsBtn from '../Field/OsBtn'
import OsInput from '../Field/OsInput'
import OsRadio from '../Field/OsRadio'
import OsSelect from '../Field/OsSelect'
import { Link } from 'react-router-dom'

export default class Payment extends Component {
  state ={
    isSelected: false
  }
  renderInfo() {
    return <>
      <div className='info-header'>Event Detail</div>
      <form id='info-form'>
        <OsInput label='Name' place='Name'/>
        <OsInput label='Contact Number' place='Contact Number'/>
        <OsInput label='Event Name' place='Event Name'/>
        <OsInput label='Event Loaction' place='Event Location'/>
        <OsInput label='Event Date' place='Event Date' type='DateTime'/>
        <OsSelect label='Delivery Mode' session={['Fast','SuperFast']} />
      </form>
    </>
  }

  isChecked = () => {
    this.setState({isSelected: true})
    console.log(this.state.isSelected)
  }

  renderPaymentMethod() {
    return <div className='payment-method-box'>
      <OsRadio name='payment' options={this.props.methods} onChange={this.isChecked}/>
    </div>
  }

  renderMakePayment() {
    let disabled = !this.state.isSelected
    return <Link to='/'>
      <OsBtn text='Make Payment' formId='info-form' onClick={this.props.onSuccess} disabled={disabled}/>
    </Link>
  }

  render() {
    return <div className='payment-page'>
      <div className='event-summary'>
        { this.renderInfo() }
        <Cart items={this.props.items} source='payment'/>
      </div>
      <div className='payment-method'>
        <div className='text'>Select Payment Method</div>
        <div className='make-payment'>
          { this.renderPaymentMethod() }
          <div className='total-amount'>
            Total Amount : $ {this.props.amount}
          </div>
          { this.renderMakePayment() }
        </div>
      </div>
    </div>
  }
}
