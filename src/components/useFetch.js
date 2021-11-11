import {useState,useEffect} from 'react';
import axios from "axios"


const useFetch = (url = '', options = null) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      
  
      setLoading(true);
  
      axios
        .get(url, options)
        .then(res => {
        setData(res.data.products);
        setError(null);
        
          
        })
        .catch(error => {
          
            setError(error);
            setData(null);
          
        })
        setLoading(false);
  
      
    }, [url, options]);
  
    return { loading, error, data };
  };
  
  export default useFetch;
