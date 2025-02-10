import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { FaSearch,FaUser} from "react-icons/fa";
import Catagory from '../Catagory';
import User from '../User';
import Cart from '../Cart';



const Header = () => {
  return (
    <div className='bg-headerbgColor py-3 pl-1 '>
      <Container>
        <Flex className={'justify-between'}>
          <div className="w-[30%] lg:w-[20%] translate-y-1/4 z-10">
            <Flex className={'gap-x-1 lg:gap-x-2 '}>
            <Catagory/>
            </Flex>
          </div>
          <div className="w-[40%] lg:w-[50%] relative -ml-16 lg:ml-0">
          <input type="text"className='p-1 lg:p-3 bg-white rounded-md w-full border border-InfoColor'placeholder='Search ' />
          <FaSearch className='absolute right-4 top-1/2 -translate-y-1/2'/>
          </div>
          
          <div className="w-[20%] lg:w-[15%] translate-y-1/4 -ml-8 z-10">
            <Flex className={'gap-x-3 lg:gap-x-10'} >
            <Flex>
            <FaUser />
            <User/>
            </Flex>
            <Cart/>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Header
