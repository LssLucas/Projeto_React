import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './Pages/cadastro/video';
import Home from './Pages/Home';
import CadastroCategoria from './Pages/cadastro/categoria';


/*TESTE DE PÁGINA

function CadastroVideo () {
  return (
    <div>
      CadastroVideo
    </div>
  )
}
*/
const Pagina404 =  () => ( <div>Pagina 404 </div> )

ReactDOM.render(
  //a tag abaixo possibilita a app à atualizar-se sem a necessidade de recarregar a pagina
  <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={Pagina404} />
      </Switch>
      

  </BrowserRouter>,
  
  /*
  Para trocar de pagina sem a utilização da biblioteca Switch
  é necessário utilizar a estrutura condicional IF:
    if (){
      <CadastroVideo />
    }
  SWITCH ==> é utilizado para determinar a rota da página
  ROUTE ==> declaração de cada uma das 
  
  <Route path="/" component={App} exact/> ==> exact é utilizado para que a rota seja especificada

  */ 
  
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  document.getElementById('root')
);
