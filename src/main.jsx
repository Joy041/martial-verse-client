import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Router/Router'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Providers/AuthProvider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
