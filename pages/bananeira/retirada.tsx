import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';

const Retirada = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Retirada | Bananeira Garden</title>
      </Head>
    </React.Fragment>
  );
}

Retirada.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
};


export default Retirada;