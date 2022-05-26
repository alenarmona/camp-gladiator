import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Workouts from './Pages/Workouts';
import Workout from './Pages/Workout';
import NotFound from './Pages/NotFound';
import './Scss/App.scss';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/workouts" element={<Workouts />} />
      <Route path="/workouts/:id" element={<Workout />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;