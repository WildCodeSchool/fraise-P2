import React,{useState,useEffect} from 'react';
import axios from "axios"

const useCustomHook = (url) => {
    const [dataProducts,setDataProducts] = useState([])
    useEffect(()=> {
        axios
        .get(url)
        .then(res => {
            setDataProducts(res.data.products) 
            // console.log(res.data.products) 
        })
        .catch(err=> {
            console.log(err)
        })
   
    },[url]);

    return{dataProducts}
};

export default useCustomHook;