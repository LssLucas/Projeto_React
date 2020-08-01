import React from 'react';
import { Link } from 'react-router-dom'; 
import Logo from '../../assets/image/Logo.png'
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu(){
    
    return (
        <nav className="Menu">
        <Link to="/" >
            <img className="Logo" src={Logo} alt="Logo"/>
        </Link>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Contato
        </Button>
    </nav>        
    

        /*
        ButtonLink => children
        Após a criação da tag abaixo, utilizei Ctrl+c para parar a aplicação, 
        logo em seguida o comando npm install foi executado        
        Durante o desenvolvimento dessa aplicação
        a pasta node_modules foi exluida para simular o recebimento do projeto
        e reinstalada com o comendo npm install (existe a possibilidade de uso npm i)

        E trecho de código abaixo foi editado para receber dinamicamente o componente {Link}
        <Button as="a" className="ButtonLink" href="/cadastro/video" >
            Contato
        </Button>

        */
    );

}

export default Menu;