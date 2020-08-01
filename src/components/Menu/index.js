import React from 'react';
import Logo from '../../assets/image/Logo.png'
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';
function Menu(){
    return (
        <nav className="Menu">
        <a href="/" >
            <img className="Logo" src={Logo} alt="Logo"/>
        </a>
        <Button as="a" className="ButtonLink" href="/" >
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
        */
    );

}

export default Menu;