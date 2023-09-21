import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { db } from "../../firebase/client";
import { doc,getDoc } from "firebase/firestore";
import Loader from "../Loader/indexLoader";

export default function ItemDetailContainer () {
    const [productDetail, setProductDetail] = useState({})
    const { id } = useParams()


    const productRef = doc(db, "products", `${id}`)
    const getItem = () => { }
    getDoc(productRef).then((snapshot => {
        if (snapshot.exists()) {
            setProductDetail({ id: snapshot.id, ...snapshot.data() })
        }
    }))

    useEffect(() => {
        getItem()
    }, [])

    if(productDetail===undefined){
        return(
            <Loader></Loader>
        )}

    return (
        <ItemDetail detail={productDetail}/>
    );
}