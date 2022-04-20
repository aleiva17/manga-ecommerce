import { Routes, Route } from "react-router-dom";
import ItemListContainer from './components/sections/ItemListContainer'
import Header from './components/layout/Header/Header'
import ItemDetailContainer from './components/sections/ItemDetailContainer'
import NotFound from './components/pages/NotFound';
import { CartContextProvider } from "./context/CartContext";

const App = () => {
  return (
    <div className='h-screen grid grid-rows-[auto_1fr]'>
      <CartContextProvider>
        <Header />
        <Routes>
            <Route path='/'element={ <ItemListContainer /> } />
            <Route path='/category/:id' element={ <ItemListContainer /> } />
            <Route path='/item/:id' element={ <ItemDetailContainer /> } />
            <Route path='*' element={ <NotFound /> } />
        </Routes>
      </CartContextProvider>
    </div>
  )
}

export default App
