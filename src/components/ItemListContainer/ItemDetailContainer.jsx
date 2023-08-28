import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer () {
    const[productDetail, setProductDetail] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        const getItem = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const item = await response.json()
        setProductDetail(item)
    }
        getItem()
    }, [id])

    return (
        <ItemDetail detail={productDetail}/>
    );
}