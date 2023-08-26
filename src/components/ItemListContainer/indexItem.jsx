const Item =({nombre, deleteItem}) =>{
    return (
        <div>
            <p>{nombre}</p>
            <button onClick={() => deleteItem(nombre)}>Borrar</button>
        </div>
    )
}

export default Item