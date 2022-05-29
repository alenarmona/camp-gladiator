import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import WorkoutMeta from './WorkoutMeta';

function Workout(props) {
    const workout = props.data
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        //Simulating real loading
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    })

    return (

        <div className={`workout ${props.renderMode}`} key={workout.id} id={workout.id}>
            <div className="img-container">
                {
                    loading && (
                    <Skeleton
                        circle
                        height="100%"
                    />
                )}
                <img src={workout.thumbnail} alt={workout.title} style={{ display: loading ? 'none' : undefined }}/>
            </div>
            <div className="data-container">
                <h2>{loading ? <Skeleton /> : workout.title }</h2>
                <WorkoutMeta data={workout} loading={loading} />
                <p>{ loading ? <Skeleton /> : workout.description }</p>
                <Link
                    to={`/workouts/${workout.id}`}
                    key={workout.id}
                    className="button"
                    style={{ display:  loading ? 'none' : undefined }}
                >
                    More Info
                </Link>
            </div>
        </div>
    )
  }

  export default Workout;