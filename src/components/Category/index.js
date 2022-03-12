import React, { Component } from 'react'

class Category extends Component {
  state = {
    category: ''
  }

  selectCategory = (event) => {
    if(event.target.alt) {
      this.setState({category: event.target.alt})
      this.props.selectCategory(event.target.alt)
    }
  }

  render() {
    let category = Object.entries(this.props.category)
    console.log(category)
    return <div className='category' onClick={this.selectCategory}>
      { category.map((item, index) => 
        <div className={`cat-option ${this.state.category === item[0] ? 'active' : ''}`} key={index} value={item}>
          <img width={80} height={80} src={item[1].icon} alt={item[0]}/>
          <div>{item[0]}</div>
        </div>
      )}
    </div>
  }
}

export default Category
