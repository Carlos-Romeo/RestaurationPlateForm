import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Restaurant from './Components/Pages/restaurant/Restaurant';
import Layout from './Components/Layout/Layout';
import HomePage from './Components/Pages/Acceuil/HomePages';
import SignUp from './Components/Pages/Signuporin/SignUp';
import Login from './Components/Pages/Signuporin/Login';
import CreatRestaurant from './Components/Pages/Formulaire/CreatRestaurant';
import ProtectedRoute from './Components/Pages/ProtectedRoute';
import Dashboard from './Components/Pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/creatRestaurant' element={<ProtectedRoute element={CreatRestaurant} />} />
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="/restaurant" element={<ProtectedRoute element={Restaurant} />} />
          </Route>
            <Route path='/Dashboard' element = {<ProtectedRoute element={Dashboard}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;