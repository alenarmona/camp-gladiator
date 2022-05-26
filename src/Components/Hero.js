import React, { Component } from 'react';

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
                </div>
            </section>

      )
    }
  }
