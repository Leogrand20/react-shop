import { ShopProvider } from './context/ShopProvider'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'
import { Main } from './layout/Main'

import './App.css'

export const App = () => {
  return (
    <div className="shop">
      <Header />
      <ShopProvider>
        <Main />
      </ShopProvider>

      <Footer />
    </div>
  )
}
