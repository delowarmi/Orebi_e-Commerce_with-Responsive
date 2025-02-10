import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

let apiData =  createContext()

    const ContextApi = ({children}) => {
        let [all,setAll] = useState([])
        useEffect(()=>{
          async function all(){
            let data = await axios.get( 'https://dummyjson.com/products?limit=0' ).then((response)=>{
            setAll(response.data.products);
            //  console.log(data);
            })
  
                         

          }
            all()  
        },[])


        
  return (
    <apiData.Provider value={all}>{children}</apiData.Provider>
  )
}

export { apiData, ContextApi };

