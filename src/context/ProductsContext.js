import { createContext,useEffect,useState } from "react";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {

const [productsList,setProductsList] = useState([])
const [onCheck,setOncheck]= useState(false)
const [mainFilter,setMainFilter]=useState([]);

    useEffect(() => {
      (async () => {
        const result = await fetch(`https://fr.openfoodfacts.org/cgi/search.pl?search_simple=1&action=process&page_size=200&page=30&json=true`)
        const data = await result.json()
        setProductsList(data.products)
        
      })()
    }, [productsList])

  return (
    <ProductsContext.Provider value={{
      productsList,
      onCheck,
      setOncheck,
      mainFilter,
      setMainFilter}}> 
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
