/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForms';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const { handlerChange, values } = useForm({
    titulo: 'Vídeo',
    url: 'https://www.youtube.com/watch?v=k7IPr-rhrPE',
    categoria: 'Conheça o canal da Alura!',
  });
  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastrar Video</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });
        console.log('categoriaEscolhida', categoriaEscolhida);
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!!!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Titulo do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handlerChange}
        />
        <FormField
          label="URL do Vídeo"
          name="url"
          value={values.url}
          onChange={handlerChange}
        />
        <FormField
          label="Categoria do Vídeo"
          name="categoria"
          value={values.categoria}
          onChange={handlerChange}
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
