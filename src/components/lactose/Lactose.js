import React,{useState,useEffect} from 'react';
import axios, { Axios } from "axios"
import DietCard from '../dietCard/DietCard';
import "./Lactose.css";
import Alert from "../Alert";
import InfoDetails from "../lactose/InfoDetails";
import { v4 as uuidv4 } from "uuid";

const Lactose = () =>{
    const [dataProducts,setDataProducts] = useState([])
    const [query, setQuery] = useState("");
    const [details, setDetails] = useState([]);
    const [alert, setAlert] = useState("");

    // //  const url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=allergens&tag_contains_0=does_not_contain&tag_0=${query}&sort_by=unique_scans_n&page_size=20&page=50&sort_by=unique_scans_n&json=true` // alergen 
    //  const url = `https://fr.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=true`; // By product name
    // //const url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=allergens&tag_contains_0=does_not_contain&tag_0=${query}&additives=without&page_size=60&&page=3&json=true`
    
    // const getData = async () => {
    //     if (query !== ""){
    //         const result = await axios.get(url)
    //         if(!result.data.products){
    //             return setAlert("No food with such name")
    //         }
    //         console.log(result)
    //         setDataProducts(result.data.products)
    //         setDetails(result.data.products)
    //         }else{
    //             setAlert("Please fill the form")
    //     }
    // };
        // onChange input value get value
    const onChange = e => setQuery(e.target.value);

    // on click get data with conditions
    const onSubmit = e => {
        e.preventDefault();
        getData();
    };
        
    return (
        <div className="data-container">
            <form onSubmit={onSubmit} className="search-form">
            {alert !== "" && <Alert alert={alert} />}
                <input
                type="text"
                name="query"
                onChange={onChange}
                value={query}
                autoComplete="on"
                placeholder="dietary requirement"
                />
                <input type="submit" value="Find products" />
            </form>
            <div className="recipes">
                {details !== [] &&
                details.map(info => <InfoDetails key={uuidv4()} ingredients={info} />)}
            </div>
        </div>
    ); 
};

export default Lactose;

