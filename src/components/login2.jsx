import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';


function login2() {
    const navigate = useNavigate();

    return (


        <div className='container-fluid back_img  d-flex align-items-center justify-content-center '>
            <div className='login template  '>
                <div className='form_container p-5 rounded bg-white '>

                    <form>
                        <h3 className="text-center mb-4">Login</h3>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" placeholder='Enter username' className='form-control' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" placeholder='Enter password' className='form-control' />
                        </div>
                        <div className='d-grid'>
                            <button className='btn btn-primary' onClick={navigate('/profile')}>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default login2
