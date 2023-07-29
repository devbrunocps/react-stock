import { createContext, useState } from "react";

export const StockContext = createContext({})


export function StockContextProvider({ children }) {

    // category = name, quantity, createdAt, updatedAt

    const [categories, setCategories] = useState(() => {
        let storedCategories = localStorage.getItem('stock-categories')
        if (!storedCategories) return []
        let categories = JSON.parse(storedCategories)
        return categories
    })

    let addCategory = (category) => {
        setCategories((currentState) => {
            const updatedCategories = [category, ...currentState]
            localStorage.setItem('stock-categories', JSON.stringify(updatedCategories))
            return updatedCategories
        })
    }

    let getCategory = (catId) => {
        return categories.find(cat => cat.id == catId)
    }

    let handleCategoriesDelete = (category) => {
        setCategories((currentState) => {
            let updatedCategories = currentState.filter(el => el.id != category.id)
            localStorage.setItem('stock-categories', JSON.stringify(updatedCategories))
            return updatedCategories
        })

        setItems((currentState) => {
            let updatedItems = currentState.filter(item => item.category != category.name)
            localStorage.setItem('stock-items', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    // item = name, description, category{}, quantity, price, createdAt, updatedAt

    const [items, setItems] = useState(() => {
        let storedItems = localStorage.getItem('stock-items')
        if (!storedItems) return []
        let items = JSON.parse(storedItems)
        return items
    })

    let addItem = (item) => {
        setItems((currentState) => {
            const updatedItems = [item, ...currentState]
            localStorage.setItem('stock-items', JSON.stringify(updatedItems))
            return updatedItems
        })

        setCategories((currentState) => {
            let quantityItems = items.filter(el => el.category == item.category)

            let category = categories.filter(category => category.name == item.category)
            category[0].quantity = quantityItems.length + 1

            let remainingCategories = currentState.filter(category => category.name != item.category)

            let updatedCategories = [category[0], ...remainingCategories]
            localStorage.setItem('stock-categories', JSON.stringify(updatedCategories))
            return updatedCategories
        })
    }

    let getItem = (itemId) => {
        return items.find(item => item.id == itemId)
    }

    let handleItemsDelete = (item) => {
        setItems((currentState) => {
            let updatedItems = currentState.filter(el => el.id != item.id)
            localStorage.setItem('stock-items', JSON.stringify(updatedItems))
            return updatedItems
        })

        setCategories((currentState) => {
            let quantityItems = items.filter(el => el.category == item.category)

            let category = categories.filter(category => category.name == item.category)
            category[0].quantity = quantityItems.length - 1

            let remainingCategories = currentState.filter(category => category.name != item.category)

            let updatedCategories = [category[0], ...remainingCategories]
            localStorage.setItem('stock-categories', JSON.stringify(updatedCategories))
            return updatedCategories
        })
    }


    const stock = {
        items,
        setItems,
        addItem,
        getItem,
        handleItemsDelete,
        categories,
        addCategory,
        handleCategoriesDelete,
        getCategory,
    }

    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}