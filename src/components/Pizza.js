import React from "react"

class Pizza extends React.Component {
 
  handleClick = () => {
    this.props.handleEdit(this.props.pizza.id)
  }

  render() {
    // console.log(this.props.pizza)

  return(
    <tr>
      <td>{this.props.pizza.topping}</td>
      <td>{this.props.pizza.size}</td>
      <td>{(this.props.pizza.vegetarian)===true? 'Yes' : 'No'}</td>
      <td><button type="button" className="btn btn-primary" onClick={this.handleClick}>Edit Pizza </button></td>
    </tr>
  )
  }
}

export default Pizza
