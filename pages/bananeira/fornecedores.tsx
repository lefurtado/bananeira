import React, { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import { Button, Card, Col, Row } from 'react-bootstrap';
import SearchTable from './SearchTable.jsx';
import ModalFornecedores from 'Components/bananeira/ModalFornecedores';

const Fornecedores = () => {
  const [modal_grid, setmodal_grid] = useState<boolean>(false);
  
  function tog_grid() {
    setmodal_grid(!modal_grid);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Fornecedores | Bananeira Garden</title>
      </Head>

      <div className='page-content'>
        <Row>
          <Col lg={12}>
            <Card>
              <Card.Header>
                <h5 className="card-title mb-0">Lista de Fornecedores</h5>
              </Card.Header>
              <Card.Body>
                <SearchTable />
                <Button
                  variant='primary'
                  onClick={() => tog_grid()}
                >
                  Adicionar fornecedor
                </Button>

                {/* Modal de adicionar fornecedor */}

                <ModalFornecedores 
                  showModal={modal_grid}
                  onHide={() => tog_grid()}
                  finalState={setmodal_grid}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

Fornecedores.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
};


export default Fornecedores;