import React from 'react'
import { Sidebar } from './components/sidebar/Sidebar';
import { Topbar } from './components/topbar/Topbar';
import './app.css'
import { Home } from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className='Container'>
        <Sidebar />
        <div className='home'>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
