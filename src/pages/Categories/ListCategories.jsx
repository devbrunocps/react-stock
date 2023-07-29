import { useContext } from "react"
import { Link } from "react-router-dom"
import { StockContext } from "../../contexts/StockContexts"

export default function ListCategories() {

    const stock = useContext(StockContext)

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>QUANTIDADE DE ITENS</th>
                    <th>AÇÕES</th>
                </tr>
            </thead>
            <tbody>
                {stock.categories.map((category) => {
                    return (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.quantity}</td>
                            <td className="btns">
                                <Link to={`/categories/${category.id}`}>Ver</Link>
                                <Link to={`/categories/${category.id}/updateCategory`}>Atualizar</Link>
                                <button onClick={() => stock.handleCategoriesDelete(category)}>Remover</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}