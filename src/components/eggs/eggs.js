import React ,{useState,useEffect} from "react";
import axios from "axios"
import DietCard from '../dietCard/DietCard';
import "./Eggs.scss";

const Eggs = () => {
    const [dataProducts,setDataProducts] = useState([])
    const egg = "egg"

    useEffect(()=> {
        axios
        .get(`https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=allergens&tag_contains_0=does_not_contain&tag_0=${egg}&sort_by=unique_scans_n&page_size=20&page=3&sort_by=unique_scans_n&json=true`)
        .then(res => {
            setDataProducts(res.data.products)  
        })
        .catch(err=> {
            console.log(err)
        })
    },[]);

    return ( 
        <div className="data-container">
            <ul className="products-list">
                {dataProducts.map((element,index) => (
                    <DietCard 
                    key={index} 
                    image_front_small_url={element.image_front_small_url}
                    brands={element.brands}
                    categories={element.categories}
                    ingredients_text={element.ingredients_text}
                    />
                ))}
            </ul>
        </div>
    );  
};

export default Eggs;