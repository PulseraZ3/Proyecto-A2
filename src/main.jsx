
import { createRoot } from 'react-dom/client'
import './estilos/index.css'
import Header from '../src/componentes/header/Header.jsx'
import ContentHeader from '../src/componentes/header/ContentHeader.jsx';

createRoot(document.getElementById('root')).render(
    <div className='contendor-header'>
        <Header/>
        <ContentHeader/>
    </div>
)
