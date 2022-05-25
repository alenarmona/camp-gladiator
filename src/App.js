import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  Outlet
} from 'react-router-dom';
import Home from './Pages/Home';
import Workouts from './Pages/Workouts';
import Workout from './Pages/Workout';
import NotFound from './Pages/NotFound';
import './Scss/App.scss';

const App = () => (
  <BrowserRouter>
    <div>
      <header>
        <Link to="/">Home</Link>
        {' '}
        <Link to="/workouts">Workouts</Link>
        {' '}
        <Outlet />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />}>
            <Route path=":id" element={<Workout />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);

export default App;