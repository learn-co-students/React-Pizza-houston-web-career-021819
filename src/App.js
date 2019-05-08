import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    selectedPizza: {}
  }

  componentDidMount(){
    fetch('http://localhost:3001/pizzas')
    .then(res => res.json())
    .then(pizzasData =>{
      this.setState({
        pizzas: pizzasData
      })
    })
  }

  setSize = (e) => {
    this.setState({
      selectedPizza: {...this.state.selectedPizza, size: e.target.value}
    })
  }

  setVeg = (e) => {
    this.setState({
      selectedPizza: {...this.state.selectedPizza, vegetarian: (e.target.value==="Vegetarian"? true : false)}
    })
  }

  setNonVeg = (e) => {
    this.setState({
      selectedPizza: {...this.state.selectedPizza, vegetarian: (e.target.value==="Non Vegetarian"? true : false)}
    })
  }

  setTopping = (e) => {
    //console.log(i_topping)
    this.setState({
      selectedPizza: {...this.state.selectedPizza, topping: e.target.value}
    })
  }
  
  handleEdit = (pizza) => {
    console.log('handelEdit method')
    this.setState({
      selectedPizza: pizza
    })
  }


  //I had the following method before, but it appended the selectedPizza and it didnt replace
  // editPizza = (e) => {
  //   e.preventDefault()
  //   let changedPizza = this.state.selectedPizza
  //   this.setState({
  //     pizzas: [...this.state.pizzas, changedPizza]
  //   })  
  // }

  updatedPizzas = () => {
    let changedPizza = this.state.selectedPizza
    return this.state.pizzas.map((pizza, index) => 
      pizza.id===changedPizza.id ? changedPizza : pizza
    )
  }

  editPizza = (e) => {
    e.preventDefault()
    let changedPizza = this.state.selectedPizza
    this.setState({
      pizzas: this.updatedPizzas()
    })
    fetch(`http://localhost:3001/pizzas/${changedPizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topping:  changedPizza.topping,
        size: changedPizza.size,
        vegetarian: changedPizza.vegetarian

      })
    })
    
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaToEdit={this.state.selectedPizza} setTopping={this.setTopping} setSize={this.setSize} setVeg={this.setVeg} setNonVeg={this.setNonVeg} editPizza={this.editPizza}/>
        <PizzaList pizzas={this.state.pizzas} handleEdit={this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
