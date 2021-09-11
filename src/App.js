import "./App.css";
import React from "react";
import { FiEye, FiEyeOff, FiTerminal } from "react-icons/fi";

function App() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [passwordVisibleConfirm, setPasswordVisibleConfirm] =
    React.useState(false);

  const togglePassword = () => {
    setPasswordVisible(passwordVisible ? false : true);
  };
  const togglePasswordConfirm = () => {
    setPasswordVisibleConfirm(passwordVisibleConfirm ? false : true);
  };

  return (
    <>
      <div className="header-text bg-white min-w-full flex justify-center my-8 ">
        <div className="flex relative ">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 blur opacity-75 rounded-lg"></div>
          <div className="relative flex bg-white p-3 rounded-lg">
            <FiTerminal className="text-4xl " />
            <h3 className="text-3xl">Code Fusion</h3>
          </div>
        </div>
      </div>
      <div className="App mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form action="#" className="mb-0 space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 my-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                required
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-pink-400 focus:ring-pink-400"
              />
              {/* -------password------- */}
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mt-4 mb-2">
                password{" "}
              </label>

              {/* --------icon----------- */}
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  autoComplete="password"
                  required
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:border-pink-400 focus:ring-pink-400"
                />
                {passwordVisible ? (
                  <FiEyeOff
                    className="absolute top-1/4 right-4 cursor-pointer text-gray-400 "
                    onClick={togglePassword}
                  />
                ) : (
                  <FiEye
                    className="absolute top-1/4 right-4 cursor-pointer text-gray-400 "
                    onClick={togglePassword}
                  />
                )}
              </div>
              {/* -------confirm password------- */}
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mt-4 mb-2 ">
                Confirm Password{" "}
              </label>
              <div className="relative">
                <input
                  type={passwordVisibleConfirm ? "text" : "password"}
                  id="confirmPassword"
                  autoComplete={false}
                  required
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:border-pink-400 focus:ring-pink-400"
                />
                {passwordVisibleConfirm ? (
                  <FiEyeOff
                    className="absolute top-1/4 right-4 cursor-pointer text-gray-400 "
                    onClick={togglePasswordConfirm}
                  />
                ) : (
                  <FiEye
                    className="absolute top-1/4 right-4 cursor-pointer text-gray-400 "
                    onClick={togglePasswordConfirm}
                  />
                )}
              </div>
              <div className="relative my-6">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 blur opacity-75 rounded-lg"></div>
                <button
                  type="submit"
                  id="btn"
                  className="relative w-full border-gray-300 rounded-lg shadow-sm bg-white text-gray-800 text-md font-medium p-3">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
