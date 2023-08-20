import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import ProfileDetails from './viewprofile'; 
import { Link } from 'react-router-dom';


function Profile() {
  const [data, Setprofiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null); // Track selected profile
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false); // State for showing delete confirmation form
  const [profileToDelete, setProfileToDelete] = useState(null);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=12')
      .then((res) => Setprofiles(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleViewDetails = (profile) => {
  
    setSelectedProfile(profile);
  };

  const handleBackToList = () => {
    setSelectedProfile(null); // Clear selected profile when going back
  };

    const handleDeleteClick = (profile) => {
    setProfileToDelete(profile);
    setShowDeleteConfirmation(true);
  };
    const handleConfirmDelete = () => {
    // Perform deletion logic here
    const updatedData = data.filter(user => user !== profileToDelete);
    Setprofiles(updatedData);

    // Reset states
    setShowDeleteConfirmation(false);
    setProfileToDelete(null);
  };

  const handleCancelDelete = () => {
    // Cancel the delete action
    setShowDeleteConfirmation(false);
    setProfileToDelete(null);
  };

  return (
    <div>
<div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}}>
  <h1 style={{ marginTop: '60px' }}>List of Profiles <svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
  </svg></h1>
</div>
     {selectedProfile ? (
        <div>
          {/* Show profile details when selectedProfile is not null */}
          <ProfileDetails profile={selectedProfile} />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                      <button type="button" class="btn btn-outline-primary"onClick={handleBackToList}>Back to List</button>

            </div>
        </div>
      ) : (
        <div className="table-responsive">
          {/* Show table of profiles */}
          <table className="table table-hover">
            <thead>
              <tr className="table-primary">
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Speed</th>
                <th scope="col">Pop_name</th>
                <th scope="col">Dslam_hostname</th>
                <th scope="col">Frame</th>
                <th scope="col">Attainable speed</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                
                <tr key={index} className={index % 3 === 0 ? "table-light" : index % 3 === 1 ? "table-info" : "table-dark"}>
                  <td>{user.name.first} {user.name.last}</td>
                  <td>{user.phone}</td>
                  <td>{user.cell}</td>
                  <td>{user.location.city}</td>
                  <td>{user.location.street.name}</td>
                  <td>{user.email}</td>
                  <td>{user.location.coordinates.latitude}</td>
                  <td>
                    {/* <Button onClick={() => handleViewDetails(user)}  ><Link to={`/viewprofile`}> view</Link> </Button> */}
                  <button type="button" class="btn btn-info " onClick={() => handleViewDetails(user)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg></button>
                  <button type="button" class="btn btn-warning "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>
                  <button type="button" class="btn btn-danger "  onClick={() => handleDeleteClick(user)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
      )}
      {showDeleteConfirmation && (
        <div className="delete-confirmation">
          <p>Are you sure you want to delete this profile?</p>
          <button type="button" class="btn btn-danger" onClick={handleConfirmDelete}>Confirm</button>
          <button type="button" class="btn btn-secondary" onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
 


