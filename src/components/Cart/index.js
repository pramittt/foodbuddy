import React, { Component } from 'react'
import OsBtn from '../Field/OsBtn'
import { Link } from 'react-router-dom'

class Cart extends Component {

  removeItemFromCart = (event, amount) => {
    this.props.removeItem(event.target, amount)
  }

  renderItem(item) {
    let { name, qty, subTotal } = item
    return <>
      <div className='item'>{name}</div>
      <div className='qty'>{qty}</div>
      <div>{subTotal}</div>
    </>
  }

  renderHeader = () => {
    return <div className={`cart-header-${this.props.source}`}>
      Cart Summary
    </div>
  }

  renderTotal = () => {
    return <div className='cart-total'>
      Total Amount: { this.props.totalAmount }
    </div>
  }

  proceedToPayment = (props) => {
    props.clickToProceed(props.items, this.props.totalAmount)
  }

  renderIndex() {
    return <div className='cart-index'>
      <div className='item'>Item</div>
      <div className='qty'>Qty</div>
      <div>Sub Total</div>
    </div>
  }

  renderProceed() {
    return <div className='btn-proceed'>
      <Link to='/payment'>
        <OsBtn text='Proceed' onClick={()=>this.proceedToPayment(this.props)}/>
      </Link>
    </div>
  }

  render() {
    return <>
    {this.props.source === 'payment' && this.renderHeader()}
    <div className={`main-cart-${this.props.source}`}>
      { this.props.source === 'booking' && this.renderHeader() }
      { this.props.totalAmount || this.props.source==='payment' ? <div className='cart-items'>
        { this.renderIndex() }
        { this.props.items.map((item, index) => 
          <>
            <div className='cart-index' key={index}>{ this.renderItem(item) }</div>
            {item.addOns.length ? <div className='cart-toppings'>
              Choose Toppings
              {item.addOns.map((item, index) => <div key={index}>-- {item}</div>)}
            </div>: ''}
            {item.note && <div className='cart-note'>
              Note to kitchen
              <div>-- {item.note}</div>
            </div>}
            { this.props.source === 'booking' && <OsBtn text='delete' id={item.id} onClick={(e)=>this.removeItemFromCart(e,item.subTotal)}/> }
          </>
        )}
      </div> : 'No item available' }
      { this.props.source === 'booking' && this.renderTotal() }
      { this.props.source === 'booking' && this.renderProceed() }
    </div>
    </>
  }
}

Cart.defaultProps = {
  source: 'booking'
}

export default Cart;
