import React from 'react';
import './overlay.css';



function ProfileDetails({ profile }) {
  
  return (
    

        <div className="card modal-overlay" >
      <h3 className="card-header">Profile Details</h3>
      <div className="card-body">
        <h5 className="card-title">{profile.id} </h5>
        <h6 className="card-subtitle text-muted">name: {profile.name}</h6>
      </div>
      <div className="card-body">
        <p className="card-text">phone: {profile.phone}</p>
        <p className="card-text">speed: {profile.speed}</p>
        <p className="card-text">Pop_name: {profile.pop_name}</p>
        <p className="card-text">Dslam_hostname: {profile.dslam_hostnsme}</p>
        <p className="card-text">frame: {profile.frame}</p>
        <p className="card-text">attainable_speed: {profile.attainable_speed}</p>

      </div>
      {/* <div className="card-footer text-muted">
        Created: {profile.registered.date}
      </div> */}
    </div>

    
  );
}



export default ProfileDetails;
