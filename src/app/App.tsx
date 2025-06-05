import { Footer } from '@app/layout/Footer/Footer'
import { Header } from '@app/layout/Header/Header'
import { Main } from '@app/layout/Main/Main'
import { ShopProvider } from '@app/providers/ShopProvider'

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
