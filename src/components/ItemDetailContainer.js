import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const params = useParams()
    console.log(params.id)
    
    return (
        <div>Detalles de producto</div>
    )
}

export default ItemDetailContainer