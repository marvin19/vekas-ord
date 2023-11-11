import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import WordTable from './pages/WordTable.tsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: 'WordTable',
    element: <WordTable/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
