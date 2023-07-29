import { useContext } from "react"
import { Link } from "react-router-dom"
import { StockContext } from "../../contexts/StockContexts"

export default function ListAllItems() {

    const stock = useContext(StockContext)

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                    <th>ESTOQUE</th>
                    <th>CATEGORIA</th>
                    <th>AÇÕES</th>
                </tr>
            </thead>
            <tbody>
                {stock.items.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.category}</td>
                            <td className="btns">
                                <Link to={`/items/${item.id}`}>Ver</Link>
                                <Link to={`/items/${item.id}/updateItem`}>Atualizar</Link>
                                <button onClick={() => stock.handleItemsDelete(item)}>Remover</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}