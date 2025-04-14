

import Login from './Login'
import Dasboard from './Components/Dasboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './Components/Add';
import { useState } from 'react';
import { UserProvider } from './Components/UserContext';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
    console.log('User added:', userData);
  };

  return (
    <>
     <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dasboard" element={<Dasboard />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </UserProvider> 
    </BrowserRouter>

    </>
  )
}

export default App
