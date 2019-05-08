import React, { Component } from 'react';
import Pizza from '../components/Pizza'
import PizzaForm from '../components/PizzaForm';


class PizzaList extends Component {

 

  // addNewPizza = (i_topping, i_size, i_vegetarian) => {
  //   let newPizza = { "id": this.state.pizzas.length+1, "topping": i_topping , "size": i_size, "vegetarian":i_vegetarian }
  //   this.setState({
  //     pizzas: [...this.state.pizzas, newPizza]
  //   })
  // }

  

  render() {
    //console.log(this.state.pizzas)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          
          {this.props.pizzas.map((pizza, index) => <Pizza pizza={pizza} handleEdit={()=>this.props.handleEdit(pizza)} />)}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
