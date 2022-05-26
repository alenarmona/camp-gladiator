import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Hero extends Component {
    render () {
      const props = this.props

      return (
            <section className='hero' style={{
                backgroundImage: `url(${props.backgroundImage})`
              }}>
                <div className='hero-content'>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <Link
                        to={`/workouts/${props.id}`}
                        key={props.id}
                    >
                        More info...
                    </Link>
                </div>
            </section>

      )
    }
  }
