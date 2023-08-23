import React , {useEffect} from 'react';
import { BrowserRouter , Route, Routes, useNavigate } from 'react-router-dom';
import PostProfile from './components/postprofile'; // Import your PostProfile component
import ProfileTable from './components/profilestable';
import Login2 from './components/login2';
import Register from './components/register';

// import 'bootstrap/dist/css/bootstrap.min.css'

function AppRouter() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     if (!token) {
//       navigate('/login');
//     }
//   }, [token, navigate]);

  return (
  <div>
     
     <Routes>

        <Route path="/" element={<Login2 />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/register" element={<Register />} />
       <Route path="/profile" element={<ProfileTable />} />
        <Route path="/addprofile" element={<PostProfile />} />
  
        
      </Routes>
    
 
    
</div>
  );
}

export default AppRouter;
