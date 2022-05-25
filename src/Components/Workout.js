import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Workout extends Component {
    render () {
      const workout = this.props.data

      return (

            <div className='workout' key={workout.id} id={workout.id}>
                <div className='img-container'>
                    <img src={workout.thumbnail} alt={workout.title} />
                </div>
                <div className='data-container'>
                    <h2>{workout.title}</h2>
                    <p>{workout.description}</p>
                    <Link
                        to={`/workouts/${workout.id}`}
                        key={workout.id}
                    >
                        More info...
                    </Link>
                </div>
            </div>

      )
    }
  }
