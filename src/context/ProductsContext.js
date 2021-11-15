import { createContext,useEffect,useState } from "react";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {

const [productsList,setProductsList] = useState([])
// const [query, setQuery] = useState("");

    useEffect(() => {
      (async () => {
        const result = await fetch(`https://fr.openfoodfacts.org/cgi/search.pl?search_simple=1&action=process&page_size=100&json=true`)
        const data = await result.json()
        setProductsList(data.products)
        
      })()
    }, [])

  return (
    <ProductsContext.Provider value={{productsList}}> 
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
