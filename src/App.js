import React from 'react'
import { Sidebar } from './components/sidebar/Sidebar';
import { Topbar } from './components/topbar/Topbar';
import './app.css'
import { Home } from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserList } from '../src/pages/UserList/UserList';


function App() {
  return (
    <Router>
      <Topbar />
      <div className='Container'>
        <Sidebar />
        <div className='home'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/user' element={<UserList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
