import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';
import Layout from './Pages/Layout';
import AboutMe from './Pages/AboutMe';
import Workouts from './Pages/Workouts';
import Workout from './Pages/Workout';
import NotFound from './Pages/NotFound';
import './Scss/App.scss';


const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Workouts />} />
      <Route path="/workouts/:id" element={<Workout />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;