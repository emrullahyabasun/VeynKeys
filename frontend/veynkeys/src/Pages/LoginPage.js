import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Slices/usersSlice';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password })).unwrap();
      navigate('/home');  // Giriş başarılıysa anasayfaya yönlendir
    } catch (err) {
      // Hata işleme
      console.error('Failed to login:', err);
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
                    <label className="form-label">Email <span>*</span></label>
                    <input
                    placeholder='emrullah@user.com'
                      className="input-form"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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