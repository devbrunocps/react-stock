import './style.css'
import { Link, Outlet, useLocation } from "react-router-dom"

export default function ItemsLayout() {
    let { pathname } = useLocation()

    return (
        <main>
            <nav className="tabs">
                <Link to={"/items"} className={`tab ${pathname === '/items' ? 'active' : ''}`}>Todos os itens</Link>
                <Link to={"/items/newItem"} className={`tab ${pathname === '/items/newItem' ? 'active' : ''}`}>Novo item</Link>
            </nav>
            <Outlet />
        </main>
    )
}