import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ContextProvider } from './src/context/Context'
import { App } from './src/App'

import '@css/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
)
