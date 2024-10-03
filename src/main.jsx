
import { createRoot } from 'react-dom/client'
import './estilos/index.css'
import Header from '../src/componentes/header/Header.jsx'
createRoot(document.getElementById('root')).render(
    <div className='contendor-header'>
        <Header/>
    </div>
)
