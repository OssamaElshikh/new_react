import React from 'react';
import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom';


function ProfileDetails({ profile }) {
  
  return (
    

        <div className="card mb-3">
      <h3 className="card-header">Profile Details</h3>
      <div className="card-body">
        <h5 className="card-title">{profile.name.first} {profile.name.last}</h5>
        <h6 className="card-subtitle text-muted">Phone: {profile.phone}</h6>
      </div>
      <div className="card-body">
        <p className="card-text">Cell: {profile.cell}</p>
        <p className="card-text">City: {profile.location.city}</p>
        <p className="card-text">Street: {profile.location.street.name}</p>
        <p className="card-text">Email: {profile.email}</p>
      </div>
      <div className="card-footer text-muted">
        Created: {profile.registered.date}
      </div>
    </div>

    
  );
}



export default ProfileDetails;
