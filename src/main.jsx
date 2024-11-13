import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import MyRouter from './router/MyRouter'
import store from './store/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
       <MyRouter/>
    </BrowserRouter>  
    </Provider> 
  </StrictMode>,
)
