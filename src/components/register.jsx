import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:8000/users/', {
                username,
                password,
            });

            if (response.status === 201) {
                navigate('/profile');
            } else {
                setError('User with same Username exists.');
            }
        } catch (error) {
            setError('User with same Username exists.');
        }
    };

    return (
        <div className='container-fluid back_img  d-flex align-items-center justify-content-center '>
            <div className='login template  '>
                <div className='form_container p-5 rounded bg-white '>
                    <form>
                        <h3 className='text-center mb-4'>Create a new account</h3>
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
                        {error && <p className='text-danger'>{error}</p>}
                        <div className='d-grid'>
                            <button
                                type='button'
                                className='btn btn-info'
                                onClick={handleRegister}
                            >
                                Create account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
