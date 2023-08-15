import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import ProfileDetails from './viewprofile'; // Import the new component


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
        // Show profile details when selectedProfile is not null
        <div>
          <Button variant="secondary" onClick={handleBackToList}>Back to List</Button>
          <ProfileDetails profile={selectedProfile} />
        </div>
      ) : (
        // Show table of profiles
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
  <Button variant="info" size="sm" className="mr-1" onClick={() => handleViewDetails(user)}>View</Button>
  <Button variant="warning" size="sm" className="mr-1">Update</Button>
  <Button variant="danger" size="sm" className="mr-0">Delete</Button>
</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default Profile;
