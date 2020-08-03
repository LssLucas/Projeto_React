/* eslint-disable react/jsx-filename-extension */
/*
    NO REACT TODO COMPONENTE É UMA FUNÇÃO
*/

import React, { useEffect } from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';
{/*const AppWrapper = styled.div`
background: var(--black);
`;*/}
function Home() {
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then(categoriasComVideos => {
        setDadosIniciais(categoriasComVideos);
        console.log(categoriasComVideos);
      })
    },[]);

  return (
    // Retorna JSX ou HTML
    // Hot roll
    <AppWrapper className="App">

      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        category={dadosIniciais.categorias[4]}
      />
      <Carousel
        category={dadosIniciais.categorias[5]}
      />
      <Footer />
    </AppWrapper>
  );
}

export default Home;
