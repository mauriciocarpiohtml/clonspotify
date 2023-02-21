import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Artistas from './pages/Artistas'
import Tendencias from './pages/Tendencias'
import { MyContext } from './context/MyContext'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {path:'/', element:<App/>},
  {path:'/artistas/:id', element:<Artistas/>},
  {path:'/tendencias', element:<Tendencias/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContext>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </MyContext>
  </React.StrictMode>,
)
