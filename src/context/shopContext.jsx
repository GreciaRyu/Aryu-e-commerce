import { createContext,useState,useEffect } from "react";
import { getDocs,collection } from "firebase/firestore";
import { db } from "../firebase/client"

export const ShopContext = createContext()

const ShopComponentContext = ({children}) =>{
    const [products, setProducts] =useState([])
    const [cart,setCart]= useState([])
    const [totalCart, setTotalCart] =useState(0)

    const productsRef = collection(db, "products")
    const getProducts = async () => {
        const data = await getDocs(productsRef)
        const dataProducts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setProducts(dataProducts)
    }

    useEffect(() => {
        getProducts()
    }, [products])

    function addToCart (item, quantity) {
            if(existsInCart(item.id)){
                const newCart = [...cart]
                newCart.forEach(product => {
                    if(product.id === item.id){
                        product.quantity += quantity
                        product.price *= product.quantity
                    }
                });
                setCart(newCart)
            } 
            else{
                setCart([...cart,{ 
                id: item.id,
                title: item.title,
                quantity: quantity,
                price: item.price*quantity,
                image: item.image,
                }])
            }
        }
    
    function removesFromCart (itemID) {
        const newCart = [...cart].filter(product => product.id !== itemID)
        setCart(newCart)
        totalCartPrice()
        return(cart)

    }

    function existsInCart (itemID) {
        return (cart.find((item) => item.id=== itemID))
    }

    function totalCartPrice() {
        let total = 0
        cart.forEach((product) => {
            total += product.price
        })
        setTotalCart(total)
        return (totalCart)
    }

    function totalCartQuantity() {
        let totalQuantity=0
        cart.forEach((product) => {
            totalQuantity+= product.quantity
        })
        return (totalQuantity)
    }

    const limpiarCarrito = () => {
        setCart([])
        setTotalCart(0)
    }

    return (<ShopContext.Provider value={{
        products,setProducts,cart,totalCart,limpiarCarrito,addToCart,removesFromCart, 
        totalCartPrice, totalCart, totalCartQuantity, getProducts,}}>
        {children}
    </ShopContext.Provider>
    )
}
export default ShopComponentContext