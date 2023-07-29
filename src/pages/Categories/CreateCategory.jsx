import { useContext, useState } from "react"
import { StockContext } from "../../contexts/StockContexts"
import './style.css'

export default function CreateCategory() {
    const stock = useContext(StockContext)

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [description, setDescription] = useState('')

    let handleChange = (ev, setState) => {
        setState(ev.target.value)
    }

    let handleSubmit = (ev) => {

        ev.preventDefault()

        let category = {
            id: Math.floor(Math.random() * 1000000),
            name,
            quantity: 0,
            description,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        stock.addCategory(category)

        setName('')
        setQuantity('')
        setDescription('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row-category">
                <div className="input-group">
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={name}
                        onChange={(ev) => handleChange(ev, setName)}
                    />
                </div>
            </div>
            <div className="form-control">
                <label htmlFor="description">Descrição</label>
                <textarea
                    name="description"
                    id="description"
                    required
                    rows={10}
                    value={description}
                    onChange={(ev) => handleChange(ev, setDescription)}
                ></textarea>
            </div>
            <button>Salvar</button>
        </form>
    )
}