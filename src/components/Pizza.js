import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? "Yes" : "No"}</td>
      <td><button id = {props.id} type="button" className="btn btn-primary" onClick={props.handleClick}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
