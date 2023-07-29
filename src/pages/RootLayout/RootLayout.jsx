import './style.css'
import { Link, Outlet } from "react-router-dom"

export default function RootLayout() {
    return (
        <>
            <header>
                <div className="logo">
                    <Link to={'/'} >REACT STOCK</Link>
                </div>
                <nav className="navbar" id="navbar">
                    <Link to={'/'}>Dashboard</Link>
                    <Link to={'/items'}>Itens</Link>
                    <Link to={'/categories'}>Categorias</Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
}