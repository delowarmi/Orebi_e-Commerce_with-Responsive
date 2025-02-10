import React, { useContext } from'react'
import "slick-carousel/slick/slick.css";
import PriveArrow from '../PriveArrow';
import NextArrow from '../NextArrow';
import Container from '../Container';
import Heading from '../Heading';
import Slider from 'react-slick';
import Product from '../Product';
import { Link } from 'react-router-dom';
import { apiData } from '../ContextApi';



const Arrival = () => {
  let data = useContext(apiData)
  
  
        var settings = {
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow:<PriveArrow/>,
                nextArrow:<NextArrow/>,

                responsive: [
                        {
                          breakpoint: 1034,
                          settings: {
                                infinite: true,
                                speed: 500,
                                slidesToShow: 3,
                                slidesToScroll: 1,
                          }
                        },
                        {
                          breakpoint: 870,
                          settings: {
                                infinite: true,
                                speed: 500,
                                slidesToShow: 2,
                                slidesToScroll: 1,
                          }
                        },
                        {
                          breakpoint: 580,
                          settings: {
                                infinite: true,
                                speed: 500,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                          }
                        }
                      ]
              };

  return (
        <div className='py-[60px] overflow-hidden'>
        
        <Container >
        <Heading as={'h3'} text={'New Arrivals'} className='font-dm font-bold text-[40px] pb-[30px] text-navHColor'/>

        <Slider  {...settings} >

        {data.map((items) => (
          <div className='w-full relative group px-2'>
         
        <Product 
        id={items.id}
        imgSrc={items.thumbnail}
        badge={items.discountPercentage}
        heart={'Add to Wish List'}
        Compare={'Compare'}
        Cart={'Add to Cart'}
        title={items.title}
        prise={items.price}
        color={items.brand}
        />  
       
        </div>
         
        ))}
      </Slider>
      </Container>
      </div>
  )
}


export default Arrival
