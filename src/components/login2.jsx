import React, { useState } from 'react';
import './style.css';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login2() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/token/', {
                username,
                password,
            });
            // If authentication is successful, response will have a valid token
            const token = response.data.access;
            if (token) {
                // Redirect to '/profile' route
                localStorage.setItem('token', token);
                navigate('/profile');
                console.log(username)
            } else {
                setError('Authentication failed. Please check your credentials.');
            }
        } catch (error) {
            setError('Authentication failed. Please check your credentials.');
        }
    };

    return (
        !localStorage.getItem('token') ?
            <div className='container-fluid back_img  d-flex align-items-center justify-content-center '>
                <div className='login template  '>
                    <div className='form_container p-5 rounded bg-white '>
                        <form>
                            <h3 className='text-center mb-4'>Login</h3>
                            <div className='mb-3'>
                                <label htmlFor='username' className='form-label'>
                                    Username
                                </label>
                                <input
                                    type='text'
                                    placeholder='Enter username'
                                    className='form-control'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password' className='form-label'>
                                    Password
                                </label>
                                <input
                                    type='password'
                                    placeholder='Enter password'
                                    className='form-control'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && <p className="text-danger">{error}</p>}
                            <div className='d-grid'>
                                <button type='button' className='btn btn-info' onClick={handleLogin}>
                                    Sign in <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                    </svg>
                                </button>
                            </div>
                            <div className='d-grid'>
                                <button className='btn btn-primary' onClick={() => navigate('/register')}>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> :
            <Navigate to='/profile' replace />

    );
}

export default Login2;
