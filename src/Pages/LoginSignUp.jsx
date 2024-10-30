import React from 'react';

const LoginSignUp = () => {
  return (
    <div className='loginsignup w-full h-[95vh] bg-[#fce3fe] pt-[40px]'>
      <div className="loginsignup-container w-full max-w-[580px] h-[650px] bg-white m-auto py-[40px] px-[6%]">
        <h1 className='my-[20px] text-[30px] font-[500] text-center'>Sign Up</h1>
        <div className='loginsignup-fields flex flex-col gap-[29px] mt-[30px]'>
          <input className='h-[72px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]' type="text" placeholder="Username" />
          <input className='h-[72px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]' type="email" placeholder="Email" />
          <input className='h-[72px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]' type="password" placeholder="Password" />
        </div>
        <button className='w-full h-[72px] text-white bg-[#ff4141] mt-[30px] border-none text-[24px] font-[500] cursor-pointer'>Continue</button>
        <p className='loginsignup-login mt-[20px] text-[#5c5c5c] text-[18px] font-[500] text-center'>Already have an account? <span className='text-[#ff4141] font-[600] cursor-pointer'>Login here</span></p>
        <div className='loginsignup-agree flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[18px] font-[500]'>
          <input type="checkbox" id='agree' />
          <label htmlFor='agree'>By Continuing, I agree to the terms of use & privacy policy.</label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
