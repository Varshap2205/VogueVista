import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import insta_icon from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center gap-[50px]'>
      <div className="footer-logo flex items-center gap-[20px]">
        <img src={footer_logo} alt="" />
        <p className='text-[#383838] text-[46px] font-[700]'>VogueVista</p>
      </div>
      <ul className="footer-links flex list-none gap-[50px] text-[#252525] text-[20px]">
        <li className='cursor-pointer'>Company</li>
        <li className='cursor-pointer'>Products</li>
        <li className='cursor-pointer'>Offices</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
      <div className="footer-social-icon flex gap-[20px]">
        <div className="footer-icons-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
            <img src={insta_icon} alt="" />
        </div>
        <div className="footer-icons-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
            <img src={pinterest} alt="" />
        </div>
        <div className="footer-icons-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
            <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footer-copyright flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a] text-[20px]">
        <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]'/>
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
