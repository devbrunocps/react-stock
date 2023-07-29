import { useContext, useEffect, useState } from "react"
import { StockContext } from "../../contexts/StockContexts"
import { useParams } from "react-router-dom"

export default function UpdateCategory() {
    const stock = useContext(StockContext)
    const { id } = useParams()

    let category = stock.categories.filter(category => category.id == id)

    const [name, setName] = useState(category[0].name)
    const [quantity, setQuantity] = useState(category[0].quantity)
    const [description, setDescription] = useState(category[0].description)
    const [createdAt, setCreatedAt] = useState(category[0].createdAt)

    let handleChange = (ev, setState) => {
        setState(ev.target.value)
    }

    let handleUpdateItem = (ev) => {

        ev.preventDefault()

        const category = {
            id,
            name,
            quantity,
            description,
            createdAt,
            updatedAt: new Date(),
        }

        stock.setItems((currentState) => {
            let updatedCategories = currentState.filter(el => el.id != id)
            localStorage.setItem('stock-categories', JSON.stringify([category, ...updatedCategories]))
            return [category, ...updatedCategories]
        })

        alert("ITEM ATUALIZADO COM SUCESSO!")
    }


    return (
        <form onSubmit={(ev) => handleUpdateItem(ev)} className="row-category ">
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

