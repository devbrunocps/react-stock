import { RouterProvider } from "react-router-dom"
import router from "./Router"
import { StockContextProvider } from "./contexts/StockContexts"


function App() {
  return (
    <StockContextProvider>
      <RouterProvider router={router}/>
    </StockContextProvider>
  )
}

export default App
