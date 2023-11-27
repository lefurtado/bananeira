import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';

const Fornecedores = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Fornecedores | Bananeira Garden</title>
      </Head>
    </React.Fragment>
  );
}

Fornecedores.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
};


export default Fornecedores;