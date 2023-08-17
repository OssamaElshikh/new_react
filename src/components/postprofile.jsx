import React, { useState } from 'react';
import axios from 'axios';
import './PostProfile.css'; 

function PostProfile() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    speed: '',
    pop_name: '',
    Dslam_hostname: '',
    Frame: '',
    Attainable_speed: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      console.log('Post successful:', response.data);
      // You can perform any additional actions after successful post
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
     <h2>Add profile</h2>
    <div className='post' >
     
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Speed</label>
          <input type="text" className="form-control" name="speed" value={formData.speed} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">POP Name</label>
          <input type="text" className="form-control" name="pop_name" value={formData.pop_name} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">DSLAM Hostname</label>
          <input type="text" className="form-control" name="Dslam_hostname" value={formData.Dslam_hostname} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Frame</label>
          <input type="text" className="form-control" name="Frame" value={formData.Frame} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Attainable Speed</label>
          <input type="text" className="form-control" name="Attainable_speed" value={formData.Attainable_speed} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>

    </div>
  );
}

export default PostProfile;
