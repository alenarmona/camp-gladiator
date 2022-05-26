import React from 'react';
import WorkoutsData from '../workouts.json';
import Workout from '../Components/Workout';
import Hero from '../Components/Hero';
import backgroundImage from '../Assets/Images/Hero-Workouts.jpg';

const Workouts = () => (
  <div className="page-workouts">
    <Hero title="Workouts" backgroundImage={backgroundImage} description="CG is a fun, challenging and personalized workout program designed to unlock your full fitness potential. Our program is where amazing workouts, top-rated Certified Personal Trainers and an incredible community come together - whether outside or online!" />
    <section className="workouts">
        {
          WorkoutsData && WorkoutsData.map( workout => {
            return <Workout key={workout.id} data={workout} renderMode={workout.id % 2 ? 'reverse': ''} />
          })
        }
      </section>
  </div>
);

export default Workouts;