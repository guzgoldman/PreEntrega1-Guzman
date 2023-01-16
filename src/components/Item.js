import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <article className="item" key={producto.id}>
            <h3>{producto.title}</h3>
            <img className="item__img" src={producto.image} alt={producto.title} />
            <p>${producto.price}</p>
            <Link to={"/item/"+producto.id}>Ver mas</Link>
        </article>
    )
}

export default Item