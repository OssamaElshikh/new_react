import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import ProfileDetails from './viewprofile'; 
import { Link } from 'react-router-dom';


function Profile() {
  const [data, Setprofiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null); // Track selected profile

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

  return (
    <div>
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
          <Table className="table table-hover">
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
                <tr key={index} className="table-light">
                  <td>{user.name.first} {user.name.last}</td>
                  <td>{user.phone}</td>
                  <td>{user.cell}</td>
                  <td>{user.location.city}</td>
                  <td>{user.location.street.name}</td>
                  <td>{user.email}</td>
                  <td>{user.location.coordinates.latitude}</td>
                  <td>
                    {/* <Button onClick={() => handleViewDetails(user)}  ><Link to={`/viewprofile`}> view</Link> </Button> */}
                  <button type="button" class="btn btn-outline-info sm" onClick={() => handleViewDetails(user)}>View</button>
                  <button type="button" class="btn btn-outline-warning sm">Update</button>
                  <button type="button" class="btn btn-outline-danger sm">Delete</button>

                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default Profile;
 


