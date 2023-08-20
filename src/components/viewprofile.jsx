import React from 'react';
import './overlay.css';



function ProfileDetails({ profile }) {
  
  return (
    

        <div className="card modal-overlay" >
      <h3 className="card-header">Profile Details</h3>
      <div className="card-body">
        <h5 className="card-title">{profile.id} </h5>
        <h6 className="card-subtitle text-muted">Phone: {profile.title}</h6>
      </div>
      <div className="card-body">
        <p className="card-text">Cell: {profile.body}</p>
        <p className="card-text">City: {profile.id}</p>
        <p className="card-text">Street: {profile.title}</p>
        <p className="card-text">Email: {profile.body}</p>
      </div>
      {/* <div className="card-footer text-muted">
        Created: {profile.registered.date}
      </div> */}
    </div>

    
  );
}



export default ProfileDetails;
