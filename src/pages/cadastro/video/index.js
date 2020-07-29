import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastrar Review</h1>
      <Link to="/cadastro/categoria">Votar</Link>
    </PageDefault>
  );
}
export default CadastroVideo;
