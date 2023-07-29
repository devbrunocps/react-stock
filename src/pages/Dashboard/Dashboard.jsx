import './style.css'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { StockContext } from '../../contexts/StockContexts'

export default function Dashboard() {
    const [diversityItems, setDiversityItems] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    const [NumberFewItems, setNumberFewItems] = useState(0)
    const [diversityCategories, setDiversityCategories] = useState(0)
    const [fewItems, setFewItems] = useState([])

    const stock = useContext(StockContext)



    useEffect(() => {
        setDiversityItems(stock.items.length)

        setTotalItems(() => {
            let total = 0
            stock.items.forEach(item => {
                total += +item.quantity
            })
            return total
        })

        setNumberFewItems(() => {
            let items = stock.items.filter(item => item.quantity <= 10)

            return items.length
        })

        setDiversityCategories(stock.categories.length)

        setFewItems(() => {
            let items = stock.items.filter(item => item.quantity <= 10)

            return items
        })
    }, [])

    return (
        <main className='dashboard'>
            <div className="title">
                <h1>DASHBOARD</h1>
            </div>
            <div className="row">
                <div className="info">
                    <span>DIVERSIDADE DE ITENS</span>
                    <h1>{diversityItems}</h1>
                </div>
                <div className="info">
                    <span>INVENTÁRIO TOTAL</span>
                    <h1>{totalItems}</h1>
                </div>
                <div className="info">
                    <span>ITENS ACABANDO</span>
                    <h1>{NumberFewItems}</h1>
                </div>
                <div className="info">
                    <span>DIVERSIDADE DE CATEGORIAS</span>
                    <h1>{diversityCategories}</h1>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ITENS ACABANDO</th>
                        <th>NOME</th>
                        <th>QUANTIDADE NO ESTOQUE</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fewItems.map(item => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td className='few'>{item.quantity}</td>
                                    <td>
                                        <Link to={`/items/${item.id}`}>Ver</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </main>
    )
}