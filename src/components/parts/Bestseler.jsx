import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Product from '../Product'
import bag from '/src/assets/bag.png'
import bati from '/src/assets/bati.png'


const Bestseler = () => {

 



  return (
    <div className='py-[60px] overflow-hidden'>
      <Container>
         <Heading as={'h3'} text={'Our Bestsellers'} className='font-dm text-[36px] font-bold pb-[20px] text-navHColor'/>
        <Flex className={' justify-between md:flex-wrap md:flex-row flex-col lg:flex-row'}>

        <div className="md:w-[49%] lg:w-[24%]  relative group">
        <Product 
        imgSrc={bati}
        badge={'New'}
        heart={'Add to Wish List'}
        Compare={'Compare'}
        Cart={'Add to Cart'}
        title={'Basic Crew Neck Tee'}
        prise={'44.00'}
        color={'Black'}
        />              
        </div>
        <div className="md:w-[49%] lg:w-[24%] relative group">
        <Product 
        imgSrc={bag}
        badge={'New'}
        heart={'Add to Wish List'}
        Compare={'Compare'}
        Cart={'Add to Cart'}
        title={'Basic Crew Neck Tee'}
        prise={'44.00'}
        color={'Black'}
        />              
        </div>
        <div className="md:w-[49%] lg:w-[24%] relative group">
        <Product 
        imgSrc={bati}
        badge={'New'}
        heart={'Add to Wish List'}
        Compare={'Compare'}
        Cart={'Add to Cart'}
        title={'Basic Crew Neck Tee'}
        prise={'44.00'}
        color={'Black'}
        />              
        </div>
        <div className="md:w-[49%] lg:w-[24%] relative group">
        <Product 
        imgSrc={bag}
        badge={'New'}
        heart={'Add to Wish List'}
        Compare={'Compare'}
        Cart={'Add to Cart'}
        title={'Basic Crew Neck Tee'}
        prise={'44.00'}
        color={'Black'}
        />  
        </div>
                
        </Flex>
      </Container>
    </div>
  )
}



export default Bestseler
