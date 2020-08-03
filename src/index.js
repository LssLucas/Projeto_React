import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './Pages/cadastro/video';
import Home from './Pages/Home';
import CadastroCategoria from './Pages/cadastro/categoria';

const Pagina404 = () => (<div> Pagina 404 </div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>

  </BrowserRouter>,
  document.getElementById('root'),
);
