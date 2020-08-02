/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

/*
Exemplo de uso do State: Gmail
Controle de true e false do menu.
Os valores (String, Obj, ...) como base definem como a app se comporta.
Há uma separação dos dados que aparecem na tela dos dasos que estão no código
 */
function CadastroCategoria() {
  /* Fazer com que o nome da categoria apareça em frente a Cadastrar Categoria */
  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: ' ',
  };
  const [categorias, setCategorias] = useState([]);
  /* PARA GUARDAR O TEXTO DA CATEGORIA DIGITADA E A NOVA CATEGORIA */
  const [values, setValues] = useState(valoresInicias);
  // let [nomeDaCategoria] recebe e abre o array 'Filmes'
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }
  useEffect(()=>{
    console.log('aloalo');
    const URL = window.location.hostname.includes('localhost') 
    ? 'http://localhost:8080/categorias'
    : 'https://projetoreact.herokuapp.com/categorias'
    fetch(URL)
      .then(async (respostaDoServidor)=>{
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
    /*setTimeout(()=>{
      setCategorias([
        ...categorias,
        {
          "id":	1,
          "nome":	"Front End",
          "descricao":	"Categoria",
          "cor":	"#cbd1ff"

        },
        {
          "id":	2,
          "nome":	"Back End",
          "descricao":	"Categoria",
          "cor":	"#cbd1ff"
        }
      ]);
    }, 4*1000)*/
  },[

  ]);
  function handlerChange(infosDoEvento) { /* A função 'funcaoHandler' captura a mundaça de input */
    // const {getAttribute, value} = infosDoEvento.target;
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }
  return (
    <PageDefault>
      <h1>
        Cadastrar Categoria:
        {values.titulo}
      </h1>
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // console.log('form para enviar')
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valoresInicias);
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.titulo}
          onChange={handlerChange}
        />
        <FormField
          label="Descrição"
          type=""
          name="descricao"
          value={values.descricao}
          onChange={handlerChange}
        />
        {/*
          <div>
            <label>
              Descrição
              <input
                type="text"
                value={values.descricao}
                name="descricao"
                onChange={handlerChange}
              />
            </label>
          </div>
        */}
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handlerChange}
        />
        {/*
              <div>
                <label>
                  Cor
                  <input
                    type="color"
                    value={values.cor}
                    name="cor"
                    onChange={handlerChange}
                  />
                </label>
              </div>
            */}
        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
      <div>
        Loading...
        </div>
      )}
      <ul>
        {categorias.map((categoria) =>
          // console.log(indice, categoria);
          // eslint-disable-next-line implicit-arrow-linebreak
          (
            <li key={`${categoria.titulo}`}>
              {/** Para cada key ter um valor diferente */}
              {categoria.titulo}
            </li>
          ))}
      </ul>

      <Link to="/">
        ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

// to substitui href
