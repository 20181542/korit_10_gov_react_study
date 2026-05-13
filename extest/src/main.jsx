import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Ex1 from './Ex6.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      
      <Ex1 />
   </BrowserRouter>
)