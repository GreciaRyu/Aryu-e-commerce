import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { db } from "../../firebase/client";
import { doc,getDoc } from "firebase/firestore";

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

    return (
        <ItemDetail detail={productDetail}/>
    );
}