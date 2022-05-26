import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import levelIcon from '../Assets/Images/icons/level.svg';
import durationIcon from '../Assets/Images/icons/duration.svg';
import impactIcon from '../Assets/Images/icons/impact.svg';

export default class WorkoutMeta extends Component {
    render () {
      const workout = this.props.data;
      const loading = this.props.loading

      return (

        <ul className="workout-meta">
            <li>
              {
                  loading && (
                  <Skeleton
                      circle
                      height="50px"
                      width="50px"
                  />)
              }
              <img src={levelIcon} alt="level" style={{ display:  loading ? 'none' : undefined }} />
              <span>{ loading ? <Skeleton /> : workout.levelTag }</span>
            </li>
            <li>
              {
                  loading && (
                  <Skeleton
                      circle
                      height="50px"
                      width="50px"
                  />)
              }
              <img src={impactIcon} alt="level" style={{ display:  loading ? 'none' : undefined }} />
              <span>{ loading ? <Skeleton /> : workout.impactTag }</span>
            </li>
            <li>
              {
                  loading && (
                  <Skeleton
                      circle
                      height="50px"
                      width="50px"
                  />)
              }
              <img src={durationIcon} alt="level" style={{ display:  loading ? 'none' : undefined }} />
              <span>{ loading ? <Skeleton /> : workout.duration + '\'' }</span>
            </li>
        </ul>

      )
    }
  }
