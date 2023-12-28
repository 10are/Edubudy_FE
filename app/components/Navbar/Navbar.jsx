
'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../../Redux/auth/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.auth);

  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isRegisterFormOpen, setRegisterFormOpen] = useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = useState(Boolean(user));
  const [userProfileImage, setUserProfileImage] = useState(null);

  const openLoginForm = () => {
    setLoginFormOpen(true);
    setRegisterFormOpen(false);
  };

  const openRegisterForm = () => {
    setRegisterFormOpen(true);
    setLoginFormOpen(false);
  };

  const closeForms = () => {
    setLoginFormOpen(false);
    setRegisterFormOpen(false);
  };

  const handleLogin = (formData) => {
    dispatch(loginUser(formData));
    closeForms();
  };

  const handleRegister = (formData) => {
    dispatch(registerUser(formData));
    closeForms();
  };

  const handleLogout = () => {

  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white">
          <span className="text-2xl font-bold">Logo</span>
        </div>
        <div className="flex items-center space-x-4">
          {isUserLoggedIn ? (
            <>
              <button
                className="text-white flex items-center space-x-2"
                onClick={handleLogout}
              >
                <img
                  src={userProfileImage || '/default-profile-image.jpg'}
                  alt="Profile"
                  className="w-6 h-6 rounded-full"
                />
                Çıkış Yap
              </button>
            </>
          ) : (
            <>
              <button
                className="text-white"
                onClick={openLoginForm}
              >
                Giriş Yap
              </button>
              <button
                className="text-white"
                onClick={openRegisterForm}
              >
                Kayıt Ol
              </button>
            </>
          )}
        </div>
      </div>

      {/* Giriş ve Kayıt Formları Popup */}
      {(isLoginFormOpen || isRegisterFormOpen) && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4">
            <div className="flex justify-end">
              <button
                className="text-gray-800"
                onClick={closeForms}
              >
                X
              </button>
            </div>
            {/* Form İçeriği */}
            {isLoginFormOpen && (
              <form>
                {/* Giriş formu elemanları buraya eklenebilir */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border rounded px-2 py-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700">
                    Şifre:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="border rounded px-2 py-1"
                  />
                </div>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => handleLogin({ email, password })}
                >
                  Giriş Yap
                </button>
              </form>
            )}
            {isRegisterFormOpen && (
              <form>
                {/* Kayıt formu elemanları buraya eklenebilir */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">
                    İsim:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border rounded px-2 py-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border rounded px-2 py-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700">
                    Şifre:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="border rounded px-2 py-1"
                  />
                </div>
                <button
                  type="button"
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => handleRegister({ name, email, password })}
                >
                  Kayıt Ol
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;