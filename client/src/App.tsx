import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

import './App.css'
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Topbar from './components/topbar/Topbar'

import Dashboard from './pages/Dashboard'
import Login from './pages/login/Login';
import Admin from './pages/admin_dashboard/Admin';
import Landing from './pages/landing/Landing';
import History from './pages/history/History';
import Register from './pages/register/Register';
import Archive from './pages/archive/Archive';
import Members from './pages/Data/Members';
import ProjectForm from './pages/createProject/ProjectForm';
import Privateroutes from './utils/Privateroutes';
import AuthPrivateroutes from './utils/authPrivateRoute';
import { useEffect } from 'react';
import AdminPrivateRoute from './utils/AdminPrivateRoute';




function App() {
  useEffect(() => {
    const checkTokenExpiration = () => {
    
      
      const token = localStorage.getItem('token');
      if (token) {
        const tokenData = JSON.parse(atob(token.split('.')[1])); 
        const expirationTime = tokenData.exp * 1000; 

        if (Date.now() > expirationTime) {
        
          localStorage.removeItem('token');
        }
      }
    };

    checkTokenExpiration();
  }, []);
 

  return (
    <>
    <Router>
    
     
     <Routes>
     
     <Route path="/" element={<Landing />} />
     <Route element={<AdminPrivateRoute/>}>
    
     <Route path='/archive' element={<Archive/>}></Route>
     </Route>
     <Route element={<AuthPrivateroutes/>}>
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register/>} />
     </Route>
     
     <Route
          path="/*"
          element={
            <div>
              <Topbar />
              <Routes>
          <Route element={<Privateroutes/>}>    <Route path="/dashboard" element={<Dashboard />} /></Route>
            <Route element={<AdminPrivateRoute/>}>   <Route path='/history/:id' element={<History/>}></Route>
               
                <Route path="/admin" element={<Admin />} />
                <Route path="/project" element={<ProjectForm />} /></Route> 
              </Routes>
            </div>
          }
        />
     
     </Routes>
     </Router>
    
   
    </>
  )
}

export default App
