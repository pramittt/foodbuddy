import React, { Component } from 'react'
import Cart from '../Cart'
import Category from '../Category'
import Menu from '../Menu'
import { AddOnProvider } from '../AddOnContext'
import { capitalize } from '../helper'
import { Modal } from 'react-bootstrap'
import OsBtn from '../Field/OsBtn'

class Body extends Component {
  state = {
    category: '',
    itemsInCart: [],
    totalCost: 0,
  }

  onSelectCategory = (value) => {
    this.setState({category: value})
  } 

  onAddToCart = (item) => {
    let currItems = this.state.itemsInCart,
        currCost = this.state.totalCost + item.subTotal;
    currItems.push(item)
    this.setState({ 
      itemsInCart: currItems,
      totalCost: currCost
    })
  }

  handleModal = () => {
    this.props.onCloseModal()
  }

  removeFromCart = (itemToRemove, amount) => {
    const currItems = this.state.itemsInCart,
          newItems = currItems.filter(item => item.id.toString() !== itemToRemove.id.toString()),
          currCost = this.state.totalCost - amount
    this.setState({ 
      itemsInCart: newItems,
      totalCost: currCost
    })
  }

  render() {
    console.log(this.props.orderDone)
    let { extras, menu, paymentMethods, submenu } = this.props.data,
        category = this.state.category;
    let menuImage = extras.categories[capitalize(category)]?.bannerImage;
    return (<>
      <AddOnProvider value={submenu}>
      <div className='main-body'>
        <Category category={extras.categories} selectCategory={this.onSelectCategory}/>
        <Menu menu={menu} selectedCat={this.state.category} menuImage={menuImage} onAddToCart={this.onAddToCart}/>
        <Cart items={this.state.itemsInCart} removeItem={this.removeFromCart} totalAmount={this.state.totalCost} clickToProceed={this.props.getItems}/>
      </div>
      </AddOnProvider>
      { this.props.orderDone && <div className='modal'>
        <Modal show={this.props.orderDone} animation={false}>
          <Modal.Body>Order Successfully placed</Modal.Body>
          <Modal.Footer>
            <OsBtn text='close' onClick={this.handleModal}/>
          </Modal.Footer>
        </Modal>
      </div> }
    </>)
  }
}

export default Body
