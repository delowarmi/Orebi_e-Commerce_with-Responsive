import React, { useEffect, useState } from 'react'
import Flex from '../Flex'
import Product from '../Product'


const Post = ({allData,cetagorysearchFilter,brandsearchFilter}) => {
        console.log(brandsearchFilter);
        let [seeshort, setSeeshort]=useState([])
        let [catshow ,setCatshow]=useState(true)
        useEffect(()=>{
           let filterslice=cetagorysearchFilter.slice(0,6)
           setSeeshort(filterslice)
        },[cetagorysearchFilter])
      
        let handleshow=()=>{
          setSeeshort(cetagorysearchFilter)
          setCatshow(false)
        }
        let handlehide=()=>{
          let filterslice=cetagorysearchFilter.slice(0,6)
          setSeeshort(filterslice)
          setCatshow(true)
        }
        
  return (
    <>
    <div>
      <Flex className={'gap-x-10 flex-wrap'}>
        {cetagorysearchFilter.length >0 ?
        <div>
       <div className="flex flex-wrap gap-x-8">
          {seeshort.map((items) => (
          <div className='pt-16'>
              <div className='w-[270px] bg-white relative group'>
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
            </div>
            ))}
            </div>
            <div className='mt-6'>
            {catshow ?cetagorysearchFilter.length>6 &&
            <button onClick={handleshow} className=' font-bold py-2 px-6 bg-gray-500 font-dm text-red-700'>See All</button>
            :
            <button onClick={handlehide} className=' font-bold py-2 px-6 bg-gray-500 font-dm text-red-700'>See Less</button>
            }
            </div>
            </div>
        :
        allData.map((items) => (
          <div className='pt-16'>
            <div className='w-[270px] bg-white relative group'>
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
           
          </div>   
          
        ))}
    </Flex>
    </div>
    
    </>
  )
}

export default Post
