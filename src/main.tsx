import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClientProvider, QueryClient} from 'react-query'

const queryCliente = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCliente}>
    <App />  
    </QueryClientProvider>
  </React.StrictMode>,
)
