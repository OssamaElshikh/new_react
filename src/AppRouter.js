import React, { useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import PostProfile from "./components/postprofile"; // Import your PostProfile component
import ProfileTable from "./components/profilestable";
import Login2 from "./components/login2";
import Register from "./components/register";
import ProtectedRoute from "./components/protected_route";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route exact path="/profile" element={<ProtectedRoute />}>
          <Route exact path="/profile" element={<ProfileTable />} />
        </Route>
        <Route exact path="/addprofile" element={<ProtectedRoute />}>
          <Route exact path="/addprofile" element={<PostProfile />} />
        </Route>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login2 />} />
      </Routes>
      {/* <Routes>

        <Route path="/" element={<Login2 />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addprofile" element={<PostProfile />} />
  
        
      </Routes> */}
    </div>
  );
}

export default AppRouter;
