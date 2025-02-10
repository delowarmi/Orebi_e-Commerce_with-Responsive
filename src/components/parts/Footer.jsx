import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import Image from '../Image'
import Logo from '/src/assets/Logo.png'
import Heading from '../Heading'
import { FaFacebookF,FaLinkedinIn, } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";


const Footer = () => {
  return (
    <div className='bg-headerbgColor py-[20px] lg:py-[50px] overflow-hidden'>
      <Container>
        <Flex className={'flex-col lg:flex-row'}>
          <div className='w-full lg:w-[35%] ml-4 lg:ml-0'>
          <Flex className={'justify-center gap-x-2'}>
          <div className="w-[25%]">
            <ul>
              <li className='font-dm font-bold text-[16] text-navHColor pb-7'>MENU</li>
              <Link to='/'><li className='font-dm font-regular text-[14] text-fnColor pb-3'>Home</li></Link>
              <Link to='/products'><li className='font-dm font-regular text-[14] text-fnColor pb-3'>Shop</li></Link>
              <Link to='/about'><li className='font-dm font-regular text-[14] text-fnColor pb-3'>About</li></Link>
              <Link to='/contact'><li className='font-dm font-regular text-[14] text-fnColor pb-3'>Contact</li></Link>
              <Link><li className='font-dm font-regular text-[14] text-fnColor'>Journal</li></Link>
            </ul>
          </div>
          <div className="w-[28%]">
          <ul>
              <li className='font-dm font-bold text-[16] text-navHColor pb-7'>SHOP</li>
              <Link to=''><li className='font-dm font-regular text-[14] text-fnColor pb-3'>Accesories</li></Link>
              <Link to=''><li className='font-dm font-regular text-[14] text-fnColor pb-3'>Furniture</li></Link>
              <Link to=''><li className='font-dm font-regular text-[14] text-fnColor pb-3'>Electronics</li></Link>
              <Link to=''><li className='font-dm font-regular text-[14] text-fnColor pb-3'>Clothes</li></Link>
              <Link><li className='font-dm font-regular text-[14] text-fnColor'>Bags</li></Link>
            </ul>
          </div>
          <div className="w-[47%]">
          <ul>
              <li className='font-dm font-bold text-[16] text-navHColor pb-7'>HELP</li>
              <li className='font-dm font-regular text-[14] text-fnColor pb-3'>Privacy Policy</li>
              <li className='font-dm font-regular text-[14] text-fnColor pb-3'>Terms & Conditions</li>
              <li className='font-dm font-regular text-[14] text-fnColor pb-3'>Special E-shop</li>
              <li className='font-dm font-regular text-[14] text-fnColor pb-3'>Shipping</li>
              <li className='font-dm font-regular text-[14] text-fnColor'>Secure Payments</li>
            </ul>
          </div>
          </Flex>
          </div>
          <div className="w-full lg:w-[35%] text-center lg:text-start mt-2 lg:mt-0">
          <ul>
              <li className='font-dm font-bold text-[16] text-navHColor pb-3  lg:pr-[100px]'>(052) 611-5711 company@domain.com</li>
              <li className='font-dm font-regular text-[14] text-fnColor pb-3'>575 Crescent Ave. Quakertown, PA 18951</li>
              
            </ul>
          </div>
          <div className="lg:w-[27%]  translate-x-[43%] lg:translate-x-0">
            <Image ImgSrc={Logo}/>
          </div>
        </Flex>
        <Flex className={'justify-between mt-9 flex-col lg:flex-row'}>
          <div className="lg:w-[70%]">
          <Flex className={'justify-center gap-x-5 lg:justify-start'}>
          <FaFacebookF className='text-[20px]'/>
          <FaLinkedinIn className='text-[20px]'/>
          <FiInstagram className='text-[20px]'/>
          </Flex>
          </div>
          <div className="lg:w-[45%] xl:w-[30%] text-center">
          <Heading as={'p'}text={'2020 Orebi Minimal eCommerce Figma Template by Adveits'} className='font-dm font-regular text-[14px] text-fnColor'/>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Footer
