import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import levelIcon from '../Assets/Images/icons/level.svg';
import durationIcon from '../Assets/Images/icons/duration.svg';
import impactIcon from '../Assets/Images/icons/impact.svg';

export default class WorkoutMeta extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }
    componentDidMount() {
        setTimeout(() => {
           this.setState( { loading: false });
        }, 1000);
    }
    render () {
      const workout = this.props.data

      return (

        <ul className="workout-meta">
            <li><img src={levelIcon} alt="level" /><span>{this.state.loading ? <Skeleton /> : workout.levelTag }</span></li>
            <li><img src={impactIcon} alt="level" /><span>{this.state.loading ? <Skeleton /> : workout.impactTag }</span></li>
            <li><img src={durationIcon} alt="level" /><span>{this.state.loading ? <Skeleton /> : workout.duration + '\'' }</span></li>
        </ul>

      )
    }
  }
