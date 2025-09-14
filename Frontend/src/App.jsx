import { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardMain from './components/Dashboard';
import Chat from './components/Chat';
import Feed from './components/Feed';
import Employee from './components/Employee';
import Recognition from './components/Recognition';
import Events from './components/Events';
import Profile from './components/Profile';
import Settings from './components/Settings';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Navigate} from "react-router-dom"

function App() {

  const [activePage, setActivePage] = useState('dashboard');
  const [profileData, setProfileData] = useState({
    email: "maria.dsouza@company.com",
    phone: "+1 (555) 123-4567",
    role: "HR Manager",
    department: "Human Resource",
    id: "HR001",
    location: "New York, NY",
  });

  return (
    <div className='d-flex h-100'>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-content" style={{ 
        marginLeft: '250px', 
        width: 'calc(100% - 250px)', 
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: '#f8f9fa'
      }}>
       <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardMain />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/event" element={<Events />} />
          <Route path="/profile" element={<Profile profile={profileData} setProfile={setProfileData}/>} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;