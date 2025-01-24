import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProductList } from "./pages"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  )
}
