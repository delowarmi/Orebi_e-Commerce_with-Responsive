import React from 'react'
import { PiNumberTwoBold } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FiRotateCcw } from "react-icons/fi";
import Container from '../Container';
import Flex from '../Flex';
import Heading from '../Heading';

const Info = () => {
  return (
   <div className='shadow-md bg-white   border-b-2 border-r-slate-700 pl-1 overflow-hidden lg:mb-[50px]'>
    <Container>
        <Flex className={'justify-center  py-3 lg:py-6'}>
                <div className="w-1/3">
                <Flex className={'gap-x-1 '}>
                <PiNumberTwoBold className='text-[12px] md:text-[18px]'/>
                <Heading as={'p'} text={'Two years warranty'} className='text-[10px] md:text-[18px] font-dm font-semibold text-navHColor'/>
                </Flex>
                </div>
                <div className="w-1/3 pl-3">
                <Flex className={'gap-x-1 '}>
                <LiaShippingFastSolid className='text-[12px] md:text-[18px]'/>
                <Heading as={'p'} text={'Free shipping'} className='text-[12px] md:text-[18px] font-dm font-semibold text-navHColor'/>
                </Flex>
                </div>
                <div className="w-1/3">
                <Flex className={'gap-x-1 '}>
                <FiRotateCcw className='text-[12px] md:text-[18px]'/>
                <Heading as={'p'} text={'Free shipping'} className='text-[12px] md:text-[18px] font-dm font-semibold text-navHColor'/>    
                </Flex>
                </div>
        </Flex>
    </Container>
    </div>
  )
}

export default Info
