import React, { useEffect, useState } from 'react'
import Flex from '../Flex'
import Product from '../Product'


const Post = ({allData,cetagorysearchFilter,brandsearchFilter,filterprice,colList}) => {
  
        let [seeshort, setSeeshort]=useState([])
        let [catshow ,setCatshow]=useState(true)
        let [pricehort, setPricehort]=useState([])
        let [pricehow ,setPricehow]=useState(true)
        let [brandhort, setBrandhort]=useState([])
        let [brandhow ,setBrandhow]=useState(true)


        useEffect(()=>{
           let filterslice=cetagorysearchFilter.slice(0,6)
           setSeeshort(filterslice)
        },[cetagorysearchFilter])
        useEffect(()=>{
          let filterslice=brandsearchFilter.slice(0,6)
          setBrandhort(filterslice)
       },[brandsearchFilter])

        useEffect(()=>{
          let filterslice=filterprice.slice(0,6)
          setPricehort(filterslice)
       },[filterprice])

      
        let handleshow=()=>{
          setSeeshort(cetagorysearchFilter)
          setCatshow(false)
        }
        let handlbrandeshow=()=>{
          setBrandhort(brandsearchFilter)
          setBrandhow(false)
        }

        let handleprishow=()=>{
          setPricehort(filterprice)
          setPricehow(false)
        }

        let handlehide=()=>{
          let filterslice=cetagorysearchFilter.slice(0,6)
          setSeeshort(filterslice)
          setCatshow(true)
        }
        let handlebrandhide=()=>{
          let filterslice=brandsearchFilter.slice(0,6)
          setBrandhort(filterslice)
          setBrandhow(true)
        }
        let handleprihide=()=>{
          let filterslice=filterprice.slice(0,6)
          setPricehort(filterslice)
          setPricehow(true)
        }
        // 'gap-x-10 flex-wrap'
  return (
    <>
    <div> 
     
      <Flex className={`${colList== 'Activelist'?'gap-x-10 flex-col':'gap-x-10  flex-wrap'}`}>
      {(brandsearchFilter.length >0 ?
      <div>
      <div className={ `${colList== 'Activelist'?'gap-x-10  flex-col':'gap-x-10 flex flex-wrap'}`}>
         {brandhort.map((items) => (
         <div className='w-full lg:w-[270px] pt-16'>
             <div className='w-full lg:w-[270px] bg-white relative group'>
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
           {brandhow ?brandsearchFilter.length>6 &&
           <button onClick={handleprishow} className=' font-bold py-2 px-6 bg-gray-500 font-dm text-red-700'>See All</button>
           :
           <button onClick={handleprihide} className=' font-bold py-2 px-6 bg-gray-500 font-dm text-red-700'>See Less</button>
           }
           </div>
           </div>
          :
          filterprice.length>0 ?
          <div>
          <div className={`${colList== 'Activelist'?'gap-x-10  flex-col':'gap-x-10 flex flex-wrap'}`}>
             {pricehort.map((items) => (
             <div className='pt-16 w-full lg:w-[270px]'>
                 <div className='w-full lg:w-[270px] bg-white relative group'>
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
               {pricehow ?filterprice.length>6 &&
               <button onClick={handleprishow} className=' font-bold py-2 px-6 bg-gray-500 font-dm text-red-700'>See All</button>
               :
               <button onClick={handleprihide} className=' font-bold py-2 px-6 bg-gray-500 font-dm text-red-700'>See Less</button>
               }
               </div>
               </div>
         :
        
         cetagorysearchFilter.length >0 ?
        <div>
       <div className={`${colList== 'Activelist'?'gap-x-10 flex-col':'gap-x-10 flex flex-wrap'}`}>
          {seeshort.map((items) => (
          <div className='lg:pt-16 w-full lg:w-[270px]'>
              <div className='w-full lg:w-[270px] bg-white relative group'>
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
          <div className='pt-4 lg:pt-16 w-full lg:w-[270px]'>
            <div className='lg:ml-0 w-full lg:w-[270px] bg-white relative group'>
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
          
        )))}
    </Flex>
    </div>
    
    </>
  )
}

export default Post
