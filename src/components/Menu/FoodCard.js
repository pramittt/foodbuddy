import React, { Component } from 'react'
import OsBtn from '../Field/OsBtn';
import AddOn from './AddOn';
import FoodForm from './FoodForm';

class FoodCard extends Component {
  state = {
    showAddOn: false,
    addOns: [],
    qty: 0,
  }

  toggleAddOn = () => {
    this.setState({ showAddOn: !this.state.showAddOn })
  }

  addOnChange = (values) => {
    this.setState({ addOns: values })
  }

  changeQty = (value) => {
    this.setState({qty: value})
  }

  onAddCart = (value, note) => {
    const item = {
      id: Date.now(),
      name: this.props.food.foodname,
      qty: this.state.qty,
      subTotal: value,
      addOns: this.state.addOns,
      note
    }
    this.setState({ showAddOn: false})
    this.props.onAddToCart(item)
  }

  render() {
    let { foodname, fooddescription, imageurl, price, submenu, sessionlist } = this.props.food;
    return (<div className='food-body'>
      <div className='food-card'>
        <img className='food-image' src={imageurl} width={100} height={80}/>
        <div className='food-detail'>
          <div className='name'>{foodname}</div>
          <div className='description'>{fooddescription}</div>
          { submenu && <OsBtn text='Add-ons' onClick={this.toggleAddOn}/> }
        </div>
        <div className='food-price'>
          ${price}
        </div>
      </div>
      { submenu && this.state.showAddOn && <AddOn submenu={submenu} addOnChange={this.addOnChange}/>}
      <FoodForm session={sessionlist} price={price} addOns={this.state.addOns} changeQty={this.changeQty} qty={this.state.qty} onAddCart={this.onAddCart}/>
    </div>
    )
  }
}

export default FoodCard
