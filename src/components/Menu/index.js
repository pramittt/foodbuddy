import React, { Component } from 'react'
import FoodCard from './FoodCard';
import MenuHeader from './MenuHeader';

class Menu extends Component {
  state = {
    items: []
  }
  getFilterItems(items) {
    return items.filter(item => item.category === this.props.selectedCat)
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      this.setState({items: this.props.menu.filter(item => item.category === this.props.selectedCat)})
    }
  }

  render() {
    let { items } = this.state
    return <div className='menu'>
      <MenuHeader image={this.props.menuImage} category={this.props.selectedCat}/>
      { items.map((food, index) => <FoodCard key={index} food={food} onAddToCart={this.props.onAddToCart}/>) }
    </div>
  }
}

export default Menu;
