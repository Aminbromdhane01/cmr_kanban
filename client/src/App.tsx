import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

import './App.css'
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Topbar from './components/topbar/Topbar'

import Dashboard from './pages/Dashboard'
import Userlist from './pages/Userlist'
import Login from './pages/login/Login';
import Data from './pages/data_page/Data';
import Admin from './pages/admin_dashboard/Admin';
import Landing from './pages/landing/Landing';
import History from './pages/history/History';
import Register from './pages/register/Register';
import Archive from './pages/archive/Archive';
import Members from './pages/Data/Members';
import ProjectForm from './pages/createProject/ProjectForm';




function App() {
 

  return (
    <>
    <Router>
    
     
     <Routes>
     <Route path="/" element={<Landing />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register/>} />
     <Route path='/data' element={<Members/>}></Route>
     <Route path='/archive' element={<Archive/>}></Route>
     <Route
          path="/*"
          element={
            <div>
              <Topbar />
              <Routes>
                
                <Route path='/history/:id' element={<History/>}></Route>
                <Route path="/dashboard/:category" element={<Dashboard />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/project" element={<ProjectForm />} />
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
