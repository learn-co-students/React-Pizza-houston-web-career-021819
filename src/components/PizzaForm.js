import React from "react"

const PizzaForm = (props) => {
  console.log(props)
  return(
      <div className="form-row">
      <form onSubmit={(e)=>props.editPizza(e)} >
        <div className="col-5">
            <input onChange={props.setTopping} type="text" className="form-control" placeholder="Pizza Topping" value={props.pizzaToEdit.topping}/>
        </div>
        <div className="col">
          <select onChange={props.setSize} value={props.pizzaToEdit.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" onChange={props.setVeg} checked={null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" onChange={props.setNonVeg} checked={null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" >Submit</button>
        </div>
        </form>
      </div>

  )
}

export default PizzaForm
