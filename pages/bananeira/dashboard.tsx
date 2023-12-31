import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';

const Dashboard = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Dashboard | Bananeira Garden</title>
      </Head>
    </React.Fragment>
  );
}

Dashboard.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
};


export default Dashboard;