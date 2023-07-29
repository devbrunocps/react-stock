import { useContext, useEffect, useState } from "react"
import { StockContext } from "../../contexts/StockContexts"
import { useNavigate, useParams } from "react-router-dom"

export default function UpdateItem() {
    const stock = useContext(StockContext)
    const { id } = useParams()

    let item = stock.items.filter(item => item.id == id)

    const [name, setName] = useState(item[0].name)
    const [quantity, setQuantity] = useState(item[0].quantity)
    const [price, setPrice] = useState(item[0].price)
    const [category, setCategory] = useState(item[0].category)
    const [description, setDescription] = useState(item[0].description)
    const [createdAt, setCreatedAt] = useState(item[0].createdAt)

    let handleChange = (ev, setState) => {
        setState(ev.target.value)
    }

    let handleUpdateItem = (ev) => {

        ev.preventDefault()

        const item = {
            id,
            name,
            quantity,
            price, 
            category,
            description,
            createdAt,
            updatedAt: new Date(),
        }

        stock.setItems((currentState) => {
            let updatedItems = currentState.filter(el => el.id != id)
            localStorage.setItem('stock-items', JSON.stringify([item, ...updatedItems]))
            return [item, ...updatedItems]
        })

        alert("ITEM ATUALIZADO COM SUCESSO!")
    }


    return (
        <form onSubmit={(ev) => handleUpdateItem(ev)}>
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

