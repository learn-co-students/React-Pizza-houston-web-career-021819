import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    selectedPizza: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({ pizzas: pizzas }))
  }

  handleChange = (e) => {
    e.persist()
    console.log(e.target.name)
    console.log(e.target.value)
    if (e.target.name === "vegetarian") {
      if (e.target.value === "Vegetarian") {
        this.setState({
          selectedPizza: {
            ...this.state.selectedPizza,
            [e.target.name]: true
          }
        })
      } else {
        this.setState({
          selectedPizza: {
            ...this.state.selectedPizza,
            [e.target.name]: false
          }
        })
      }
    } else {
      this.setState({
        selectedPizza: {
          ...this.state.selectedPizza,
          [e.target.name]: e.target.value
        }
      })
    }
  }

  handleClick = (e) => {
    e.persist()
    const pizza = this.state.pizzas.find(p => p.id == e.target.id)
    this.setState({ selectedPizza: pizza })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const pizzas = [...this.state.pizzas]
    this.setState({pizzas: pizzas.map(pizza => {
      return pizza.id === this.state.selectedPizza.id
      ? this.state.selectedPizza
      : pizza
    })})

    fetch('http://localhost:3000/pizzas', {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        pizzas: this.state.pizzas
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm {...this.state.selectedPizza} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <PizzaList pizzas={this.state.pizzas} handleClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
