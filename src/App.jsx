import { Header } from './layout/Header'
import { Main } from './layout/Main'
import { Footer } from './layout/Footer'
import { ContextProvider } from './context/Context'

import './App.css'

export const App = () => {
  return (
    <div className="shop">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
