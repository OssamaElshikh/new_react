import React from 'react';


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
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Additional information: ...</li>
        {/* You can add more list items for additional information */}
      </ul>
      <div className="card-footer text-muted">
        Created: {profile.registered.date}
      </div>
    </div>

    // <div className="profile-details">
    //   <h2>{profile.name.first} {profile.name.last}</h2>
    //   <p>Phone: {profile.phone}</p>
    //   <p>Cell: {profile.cell}</p>
    //   <p>City: {profile.location.city}</p>
    //   <p>Street: {profile.location.street.name}</p>
    //   <p>Email: {profile.email}</p>
    //   <p>Latitude: {profile.location.coordinates.latitude}</p>
    // </div>
    
  );
}



export default ProfileDetails;
