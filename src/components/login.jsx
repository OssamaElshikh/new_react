import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform actions with the username and password, like authentication
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="col-form-label mt-4" htmlFor="inputDefault">Enter username</label>
          <input type="text" className="form-control" placeholder="Default input" id="inputDefault" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label className="form-label mt-4">Enter Password</label>
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" autoComplete="off" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
