
import React, { Component, useState } from 'react'
import { NavLink } from 'react-router-dom';


export class MealItem extends Component {
  render() {
    return (
     

      <div className="container my-4">
             <div className="card" style={{width:" 18rem",height:" 25rem"}}>
               
          <img src={this.props.url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <NavLink to={`/${this.props.go}`}><button  className='btn btn-warning'> view Recipe </button> </NavLink>
            
          </div>
        </div>

          </div>

    )

  }
}

export default MealItem;

