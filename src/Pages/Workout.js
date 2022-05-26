import React from 'react';
import WorkoutsData from '../workouts.json';
import { useParams } from "react-router-dom";
import WorkoutMeta from '../Components/WorkoutMeta';
import ScrollToTop from '../Components/ScrollToTop';

function getWorkoutDetails(id) {
    let workout = WorkoutsData.filter( (workout) => workout.id === id);
    return workout && workout[0];
}
export default function Workout() {
    let { id } = useParams();
    let workout = getWorkoutDetails(id);

    return (

        <div className="page-workout">
            <ScrollToTop />
            <div className="main-content">
                <div className="left-content">
                    <h2>{workout.title}</h2>
                    <p>{workout.description}</p>
                    <WorkoutMeta data={workout} />
                </div>
                <div className="right-content">
                    <img src={workout.thumbnail} alt={workout.title} />
                </div>
            </div>

            <video src={workout.media} width="100%" controls >
                <source src={workout.media} />
            </video>
        </div>
    );
}
