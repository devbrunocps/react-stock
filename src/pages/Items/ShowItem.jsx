import { useContext } from "react"
import { StockContext } from "../../contexts/StockContexts"
import { useParams, Link } from "react-router-dom"

export default function ShowItem() {

    const stock = useContext(StockContext)
    const { id } = useParams()
    const item = stock.getItem(id)

    return (
        <div className="item">
            <div className="row">
                <h2>{item.name}</h2>
                <Link to={`/items/${item.id}/updateItem`} className="button is-small">Atualizar</Link>
                <Link to={'/items'} onClick={() => stock.handleItemsDelete(item)}>Excluir</Link>
            </div>
            <div className="row">
                <span>Categoria: {item.category}</span>
                <span>Quantidade em estoque: {item.quantity}</span>
                <span>Preço: R$ {item.price}</span>
            </div>
            <p>{item.description}</p>
            <div className="row">
                <p>Cadastrado em: {item.createdAt.toString()}</p>
                <p>Atualizado em: {item.updatedAt.toString()}</p>
            </div>
        </div>
    )

}