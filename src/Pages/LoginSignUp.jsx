import React, { useState } from 'react';

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password || (!isLogin && !formData.username)) {
      setMessage('Please fill in all fields.');
      return;
    }

    setMessage(isLogin ? 'Logged in successfully!' : 'Signed up successfully!');
    
    // Simulating user session
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="loginsignup w-full min-h-[95vh] bg-[#fce3fe] pt-10 flex justify-center items-center">
      <div className="loginsignup-container w-full max-w-[580px] bg-white rounded-lg py-10 px-6 sm:px-8">
        <h1 className="my-5 text-[24px] sm:text-[30px] font-medium text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h1>
        
        <form className="loginsignup-fields flex flex-col gap-5 mt-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              className="h-[50px] sm:h-[60px] w-full px-4 border border-gray-300 rounded-md outline-none text-gray-700 text-[16px] sm:text-[18px]"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          )}
          <input
            className="h-[50px] sm:h-[60px] w-full px-4 border border-gray-300 rounded-md outline-none text-gray-700 text-[16px] sm:text-[18px]"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="h-[50px] sm:h-[60px] w-full px-4 border border-gray-300 rounded-md outline-none text-gray-700 text-[16px] sm:text-[18px]"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full h-[50px] sm:h-[60px] mt-6 text-white bg-[#ff4141] rounded-md text-[18px] sm:text-[24px] font-medium hover:bg-[#e63b3b] transition-all duration-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-green-600 text-center font-medium">{message}</p>
        )}

        <p
          className="loginsignup-login mt-5 text-gray-600 text-[14px] sm:text-[18px] font-medium text-center"
        >
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{" "}
          <span
            className="text-[#ff4141] font-semibold cursor-pointer hover:underline"
            onClick={() => {
              setIsLogin(!isLogin);
              setFormData({ username: '', email: '', password: '' });
              setMessage('');
            }}
          >
            {isLogin ? 'Sign Up here' : 'Login here'}
          </span>
        </p>

        {!isLogin && (
          <div className="loginsignup-agree flex items-center mt-6 gap-4 text-gray-600 text-[14px] sm:text-[18px] font-medium">
            <input type="checkbox" id="agree" className="w-4 h-4 sm:w-5 sm:h-5" />
            <label htmlFor="agree">
              By continuing, I agree to the terms of use & privacy policy.
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignUp;
