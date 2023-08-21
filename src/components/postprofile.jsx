import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PostProfile.css';
import Nav from './navbar';

function PostProfile() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        speed: null,
        pop_name: null,
        dslam_hostname: null,
        frame: null,
        attainable_speed: null,
    });
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showintegerrAlert, setintegerErrorAlert] = useState(false);
    const [showglobalalert, setglobalalert] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (
            formData.name === '' ||
            formData.phone === ''

        ) {
            console.log('At least one field is empty');
            setShowErrorAlert(true);
            return;
        }

        else if (
            !Number.isInteger(formData.frame) || !Number.isInteger(formData.attainable_speed)

        ) {

            setintegerErrorAlert(true);
            setShowSuccessAlert(false);
            setShowErrorAlert(false);
        }

        try {
            await axios.post('http://localhost:8000/profiles/', formData);
            console.log('Post successful');

            setShowSuccessAlert(true);
            setShowErrorAlert(false);



            // You can perform any additional actions after successful post
        } catch (error) {
            setglobalalert(true)
            //   setShowSuccessAlert(false);
            //   setShowErrorAlert(true);
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
        <>
            <Nav />
            <div className="post">

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f8ff' }}>

                    <form className="row g-3 p-4 shadow" style={{ backgroundColor: 'white', borderRadius: '10px', width: '80%' }}>
                        {showSuccessAlert && (
                            <div className="alert alert-dismissible alert-success">
                                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                <strong>Well done!</strong> You successfully posted the profile.
                                <button className="btn-secondary" onClick={navigate('/profile')}> Close</button>

                            </div>
                        )}
                        {showErrorAlert && (
                            <div className="alert alert-dismissible alert-danger">
                                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                <strong>Oh snap!</strong> Empty field or invalid input
                            </div>
                        )}
                        {showglobalalert && (
                            <div className="alert alert-dismissible alert-danger">
                                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                <strong>Oh woww</strong> Error handling request!
                            </div>
                        )}
                        {showintegerrAlert && (
                            <div className="alert alert-dismissible alert-danger">
                                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                <strong>Input Error</strong> frame and attainable speed must be integers
                            </div>
                        )}
                        <h2>Add profile</h2>
                        <div className="col-md-4">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Phone</label>
                            <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleInputChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Speed</label>
                            <input type="text" className="form-control" name="speed" value={formData.speed} onChange={handleInputChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">POP Name</label>
                            <input type="text" className="form-control" name="pop_name" value={formData.pop_name} onChange={handleInputChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">DSLAM Hostname</label>
                            <input type="text" className="form-control" name="dslam_hostname" value={formData.dslam_hostname} onChange={handleInputChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Frame</label>
                            <input type="text" className="form-control" name="frame" value={formData.frame} onChange={handleInputChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Attainable Speed</label>
                            <input type="text" className="form-control" name="attainable_speed" value={formData.attainable_speed} onChange={handleInputChange} />
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-3">
                            <button type="submit" className="btn btn-dark" onClick={handleSubmit}>
                                Submit{' '}
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" fill="currentColor" className="bi bi-box-arrow-in-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z" />
                                    <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>




            </div>
        </>
    );
}

export default PostProfile;
