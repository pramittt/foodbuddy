import React, { Component } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Payment from '../components/Payment';

class MainApp extends Component {
  state = {
    isDataLoaded: false,
    data: null,
    orderDone: false
  }

  componentDidMount() {
    fetch('https://smartqdemo.firebaseio.com/events-data.json')
    .then( args => args.json())
    .then(json => {
      this.setState({
        data: json,
        isDataLoaded: true
      })
    })
  }

  getItemsForBooking = (items, amount) => {
    this.setState({ items, amount })
  }

  onOrderSuccess = () => {
    this.setState({ orderDone : true})
  }

  onCloseModal = () => {
    this.setState({orderDone: false})
  }

  renderBooking() {
    return <>
      <Header source='booking'/>
      {this.state.data && <Body data={this.state.data} getItems={this.getItemsForBooking} orderDone={this.state.orderDone} onCloseModal={this.onCloseModal}/>}
    </>
  }

  renderPayment() {
    return <>
      <Header source='payment'/>
      <Payment items={this.state.items} amount={this.state.amount} methods={this.state.data?.paymentMethods} onSuccess={this.onOrderSuccess}/>
    </>
  }

  render() {
    return <Router>
      <Routes>
        <Route path="/" element={this.renderBooking()}/>
        <Route path="/payment" element={ this.renderPayment() }/>
      </Routes>
    </Router>
  }
}

export default MainApp;
