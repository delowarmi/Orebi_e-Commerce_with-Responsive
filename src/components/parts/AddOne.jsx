
import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Add_1 from '/src/assets/ad_1.png'
import Add_2 from '/src/assets/Ad_2.png'
import Add_3 from '/src/assets/Ad_3.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slice/CounterSlice'


const AddOne = () => {

  return (

<>

    <div className='bg-white py-[30px] lg:py-[60px] px-2 overflow-hidden'>
      <Container>
        <Flex className={'justify-between flex-col lg:flex-row'}>
                <div className="lg:w-[49%]">
                <Image ImgSrc={Add_1}/>
                </div>
                <div className="lg:w-[49%] mt-[3%] lg:mt-0">
                <Flex className={'flex-col gap-y-3 lg:gap-y-8'}>
                <Image ImgSrc={Add_2}/>
                <Image ImgSrc={Add_3}/>
                </Flex>
                </div>
        </Flex>
      </Container>
    </div>
    </>
  )
}

export default AddOne
