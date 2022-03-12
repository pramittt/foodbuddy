import React, { Component } from "react";
import { AddOnConsumer } from "../AddOnContext";
import OsBtn from "../Field/OsBtn";
import OsInput from "../Field/OsInput";
import OsSelect from "../Field/OsSelect";

class FoodForm extends Component {
  state={
    note: '',
    subTotal: false
  }

  qtyHandler = (event) => {
    this.props.changeQty(event.target.value)
    this.setState({subTotal: true})
  };

  handleSubmit = (amount, e) => {
    e.preventDefault();
    this.props.onAddCart(amount, this.state.note);
    this.setState({subTotal: false})
    e.target.reset();
  }

  onNoteChange = (event) => {
    this.setState({note: event.target.value})
  }

  totalAmount(props) {
    let amount = this.props.qty * this.props.price;
    this.props.addOns.forEach((item) => {
      amount += this.props.qty * props[item].price;
    });
    return amount
  }

  render() {
    return <AddOnConsumer>
      {(props) => {
        let amount = this.totalAmount(props)
        return <form onSubmit={this.handleSubmit.bind(this, amount)}>
          <OsInput place="Qty" label="Quantity" type="number" onChange={this.qtyHandler}/>
          <OsSelect extraClass='food-card-select' label="Session" session={this.props.session} />
          <OsInput extraClass='food-card-total' value={this.state.subTotal ? amount : '0'} label="Sub Total" disabled={true} />
          <OsInput extraClass='food-card-note' label="Note to the kitchen" onChange={this.onNoteChange} required={false}/>
          <OsBtn text="Add to Cart"/>
        </form>
      }}
    </AddOnConsumer>
  }
}

export default FoodForm;
