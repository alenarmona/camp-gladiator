import React from 'react';
import WorkoutsData from '../workouts.json';
import Workout from '../Components/Workout';

const Workouts = () => (
  <div>
    <h1>Workouts</h1>
    <section className="workouts">
        {
          WorkoutsData && WorkoutsData.map( workout => {
            return <Workout key={workout.id} data={workout} />
          })
        }
      </section>
  </div>
);

export default Workouts;