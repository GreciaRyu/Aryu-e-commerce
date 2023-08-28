
// API: https://github.com/keikaavousi/fake-store-api

const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const productsApi = await response.json()
    
    return(productsApi);
}

function filter(arrayProductos)  {
const productsFilter = arrayProductos.filter(product => product.category === id)
    return(productsFilter.length > 0 ? setProducts(productsFilter) : setProducts(productsApi));
    }

 export default fetchData
 