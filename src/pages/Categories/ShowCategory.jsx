import { useContext } from "react"
import { StockContext } from "../../contexts/StockContexts"
import { useParams, Link } from "react-router-dom"

export default function ShowCategory() {

    const stock = useContext(StockContext)
    const { id } = useParams()
    const category = stock.getCategory(id)

    return (
        <div className="item">
            <div className="row">
                <h2>{category.name}</h2>
                <Link to={`/categories/${category.id}/update`} className="button is-small">Atualizar</Link>
                <Link to={'/categories'} onClick={() => stock.handleCategoriesDelete(category)}>Excluir</Link>
            </div>
            <div className="row">
                <span>Quantidade de itens: {category.quantity}</span>
            </div>
            <p>{category.description}</p>
            <div className="row">
                <p>Cadastrado em: {category.createdAt.toString()}</p>
                <p>Atualizado em: {category.updatedAt.toString()}</p>
            </div>
        </div>
    )

}