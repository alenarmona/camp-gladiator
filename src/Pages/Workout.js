import React from 'react';
import { useParams } from "react-router-dom";

export default function Workout() {
let { id } = useParams();
  return <h2>Workout: {id}</h2>;
}