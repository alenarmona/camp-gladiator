import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import WorkoutMeta from './WorkoutMeta';

export default class Workout extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }
    componentDidMount() {
        //Simulating real loading
        setTimeout(() => {
           this.setState( { loading: false });
        }, 1000);
    }
    render () {
      const workout = this.props.data

      return (

            <div className={`workout ${this.props.renderMode}`} key={workout.id} id={workout.id}>
                <div className="img-container">
                    {
                        this.state.loading && (
                        <Skeleton
                            circle
                            height="100%"
                        />
                    )}
                    <img src={workout.thumbnail} alt={workout.title} style={{ display:  this.state.loading ? 'none' : undefined }}/>
                </div>
                <div className="data-container">
                    <h2>{this.state.loading ? <Skeleton /> : workout.title }</h2>
                    <WorkoutMeta data={workout} loading={this.state.loading} />
                    <p>{ this.state.loading ? <Skeleton /> : workout.description }</p>
                    <Link
                        to={`/workouts/${workout.id}`}
                        key={workout.id}
                        className="button"
                        style={{ display:  this.state.loading ? 'none' : undefined }}
                    >
                        More Info
                    </Link>
                </div>
            </div>

      )
    }
  }
