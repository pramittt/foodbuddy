import React, { Component } from 'react'
import { AddOnConsumer } from '../AddOnContext'; 

class AddOn extends Component {
  state = {
    addOns: []
  }

  onChange = (event) => {
    let items = this.state.addOns
    if(event.target.checked) {
      items.push(event.target.value)
      this.setState({addOns: items})
    } else {
      this.setState({addOns: items.filter(item => item!==event.target.value)})
    }
    console.log(this.state.addOns)
    this.props.addOnChange(this.state.addOns)
  }

  render() {
    return <AddOnConsumer> 
      { (props) => (
      <div>
        { this.props.submenu.map( (item,index) => 
          <div key={index} className='add-on-select'>
            <input type='checkbox' id='addOn' name='addOn' value={item} onChange={this.onChange}/>
            <img src={props[item].imageurl} width={50} height={40}/>
            <span>{item}</span>
            <span className='price'>{props[item].price}</span>
          </div>
        )}
      </div>
      )}
    </AddOnConsumer>
  }
}

export default AddOn;
