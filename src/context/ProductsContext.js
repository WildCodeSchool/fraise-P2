import { createContext,useEffect,useState } from "react";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {

const [productsList,setProductsList] = useState([])
const [onCheck,setOncheck]= useState(false)
const [mainFilter,setMainFilter]=useState([]);
const [theme,setTheme] = useState("light");
const [isToggled,setIsToggled] = useState(false)
const [homeDisplayed, setHomeDisplayed] = useState(true);

const handleClickHome = () => {if(homeDisplayed == false) {
      setHomeDisplayed(true)
    }}

    useEffect(() => {
      (async () => {
        const result = await fetch(`https://fr.openfoodfacts.org/cgi/search.pl?search_simple=1&action=process&page_size=250&page=1&json=true`)
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
      setMainFilter,
      theme,
      setTheme,
      isToggled,
      setIsToggled,
      homeDisplayed,
      setHomeDisplayed,
      handleClickHome
    
      }}> 
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
