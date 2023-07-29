import { Link, Outlet, useLocation } from "react-router-dom"

export default function CategoriesLayout() {
    let { pathname } = useLocation()

    return (
        <main>
            <nav className="tabs">
                <Link to={"/categories"} className={`tab ${pathname === '/categories' ? 'active' : ''}`}>Todos as categorias</Link>
                <Link to={"/categories/newCategory"} className={`tab ${pathname === '/categories/newCategory' ? 'active' : ''}`}>Nova categoria</Link>
            </nav>
            <Outlet />
        </main>
    )
}