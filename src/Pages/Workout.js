import React from 'react';
import WorkoutsData from '../workouts.json';
import Hero from '../Components/Hero';
import backgroundImage from '../Assets/Images/Hero-Workouts.jpg';
import { useParams } from "react-router-dom";
import { render } from '@testing-library/react';

export default function Workout() {
    let { id } = useParams();
    return (
        <div className="page-workout">
            <h2>Workout: {id}</h2>
        </div>
    );
}