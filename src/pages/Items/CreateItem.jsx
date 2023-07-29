import { useContext, useState } from "react"
import { StockContext } from "../../contexts/StockContexts"

export default function CreateItems() {
    const stock = useContext(StockContext)

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    let handleChange = (ev, setState) => {
        setState(ev.target.value)
    }

    let handleSubmit = (ev) => {

        ev.preventDefault()

        let item = {
            id: Math.floor(Math.random() * 1000000),
            name,
            quantity,
            price,
            category,
            description,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        stock.addItem(item)

        setName('')
        setQuantity('')
        setPrice('')
        setCategory('')
        setDescription('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
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
                <div className="input-group">
                    <label htmlFor="quantity">Quantidade</label>
                    <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        required
                        value={quantity}
                        onChange={(ev) => handleChange(ev, setQuantity)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="price">Preço</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        required
                        value={price}
                        onChange={(ev) => handleChange(ev, setPrice)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="category">Categoria</label>
                    <select
                        name="category"
                        id="category"
                        value={category}
                        required
                        onChange={(ev) => handleChange(ev, setCategory)}
                    >
                        <option disabled value="">Selecione uma categoria...</option>
                        {stock.categories.map(category => {
                            return (
                                <option value={category.name} key={category.name}>
                                    {category.name}
                                </option>
                            )
                        })}
                    </select>
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