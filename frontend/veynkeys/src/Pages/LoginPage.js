import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Slices/usersSlice';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const actionResult = await dispatch(loginUser({ username, password }));
      if (actionResult.payload && actionResult.payload.authToken) {
        
        const { authToken, username, email } = actionResult.payload;
        localStorage.setItem('token', authToken);
        
        
        console.log('Logged in user:', { username, email });
        navigate('/home');
      } else {
        console.error('Login failed: No token returned');
      }
    } catch (err) {
      console.error('Failed to login:', err);
      alert('Login failed: ' + (err.message || 'Unknown error'));
    }
};



  return (
    <>
      {/*======================login area Start==========================*/}
      <div className="login-area mt-25">
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 col-lg-6">
              <div className="checkout_info mb-20">
                <form className="form-row" onSubmit={handleSubmit}>
                  <h1 className="last-title mb-30 text-center">Login to Your Account</h1>
                  <div className="form_group col-12">
                    <label className="form-label">Username <span>*</span></label>
                    <input
                    placeholder='emrullahyabasun'
                      className="input-form"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form_group col-12 position-relative">
                    <label className="form-label">Password <span>*</span></label>
                    <input
                      placeholder='123'
                      className="input-form "
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                  </div>
                  <div className="form_group group_3 col-lg-3">
                    <button className="login-register" type="submit">Login</button>
                  </div>
                  <div className="form_group group_3 col-lg-9">
                    <label htmlFor="remember_box">
                      <input id="remember_box" type="checkbox" />
                      <span> Remember me </span>
                    </label>
                  </div>
                  <div className="col-lg-12 text-left">
                    <a className="lost-password" href="#">Lost your password?</a>
                  </div>
                  <div className="col-lg-12 text-left">
                    <p className="register-page"> No account? <a href="register.html">Create one here</a>.</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*======================login area End==========================*/}

    </>
  )
}

export default LoginPage