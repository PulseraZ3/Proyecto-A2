import { createRoot } from 'react-dom/client'
import './estilos/index.css'

import Catalogo from "./componentes/CatalogoDiv.jsx";
import ContentHeader from "./componentes/header/ContentHeader.jsx"
import Header from "./componentes/header/Header.jsx"
import Footer from "./componentes/Footer.jsx"


createRoot(document.getElementById('catalogo-root')).render(
    <>
        <div className='contendor-header'>
            <Header/>
            <ContentHeader/>
        </div>
        <Catalogo />
        <Footer/>
    </>
)
