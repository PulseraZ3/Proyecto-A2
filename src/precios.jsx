
import { createRoot } from 'react-dom/client'
import './estilos/index.css'
import Header from '../src/componentes/header/Header.jsx'
import ContentHeader from '../src/componentes/header/ContentHeader.jsx';
import { Footer } from './componentes/Footer.jsx';
import MainPrecios from './componentes/MainPrecios.jsx';
createRoot(document.getElementById('root')).render(
    <div>
        <div className='contendor-header'>
            <Header/>
            <ContentHeader/>
        </div>
        <MainPrecios/>
        <Footer/>
    </div>

)