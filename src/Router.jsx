import { createBrowserRouter } from 'react-router-dom'

import RootLayout from './pages/RootLayout/RootLayout'
import Dashboard from './pages/Dashboard/Dashboard'

import ItemsLayout from './pages/Items/ItemsLayout'
import ListAllItems from './pages/Items/ListItems'
import CreateItem from './pages/Items/CreateItem'
import ShowItem from './pages/Items/ShowItem'
import UpdateItem from './pages/Items/UpdateItem'

import CategoriesLayout from './pages/Categories/CategoriesLayout'
import ListCategories from './pages/Categories/ListCategories'
import CreateCategory from './pages/Categories/CreateCategory'
import ShowCategory from './pages/Categories/ShowCategory'
import UpdateCategory from './pages/Categories/UpdateCategory'

const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [
        { index: true, element: <Dashboard /> },
        {
            path: 'items',
            element: <ItemsLayout />,
            children: [
                { index: true, element: <ListAllItems /> },
                { path: 'newItem', element: <CreateItem /> },
                { path: ":id", element: <ShowItem /> },
                { path: ":id/updateItem", element: <UpdateItem /> },
            ]
        },
        {
            path: 'categories',
            element: <CategoriesLayout />,
            children: [
                {index: true, element: <ListCategories />},
                {path: "newCategory", element: <CreateCategory />},
                {path: ":id", element: <ShowCategory />},
                {path: ":id/updateCategory", element: <UpdateCategory />}
            ]
        }
    ]
}])

export default router