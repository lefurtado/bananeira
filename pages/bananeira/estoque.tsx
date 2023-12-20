import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

import avtar1 from '@assets/images/bananeira/plantas/aspargo_outonal.jpeg';
import avtar3 from '@assets/images/bananeira/plantas/bq_samambaia_mescla.jpeg';
import avtar4 from '@assets/images/bananeira/plantas/pendente_samambaia.jpeg';
import avtar5 from '@assets/images/bananeira/plantas/redondo_mescla.jpeg';
import avtar6 from '@assets/images/bananeira/plantas/salsao_outonal.jpeg';
import ModalEstoque from 'Components/bananeira/ModalEstoque';

const Estoque = () => {
  const [modal_grid, setmodal_grid] = useState<boolean>(false);
  const [modal_gridDetails, setmodal_gridDetails] = useState<boolean>(false);
  const [details, setDetails] = useState<any>(null);

  function tog_grid() {
    setmodal_grid(!modal_grid);
  };

  function handleModalDetails(cellProps: any) {
    setmodal_gridDetails(!modal_gridDetails);
    setDetails(cellProps);
  }

  return (
    <React.Fragment>
      <Head>
        <title>Estoque | Bananeira Garden</title>
      </Head>

      <div className="page-content">
        <Row className="row-cols-xxl-5 row-cols-lg-3 row-cols-1">
          <Col>
            <Card className="card-body">
              <div className="d-flex flex-column text-center mb-4 align-items-center">
                <div className="flex-shrink-0">
                  <Image src={avtar5} alt="" className="avatar-xl rounded-circle" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h5 className="card-title mb-1">Redondo Mescla</h5>
                  <p className="text-muted mb-0">BG230589</p>
                </div>
              </div>
              <Button onClick={() => tog_grid()} className="btn btn-primary btn-sm">Ver Detalhes</Button>
            </Card>
          </Col>
          <Col>
            <Card className="card-body">
              <div className="d-flex flex-column text-center mb-4 align-items-center">
                <div className="flex-shrink-0">
                  <Image src={avtar3} alt="" className="avatar-xl rounded-circle" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h5 className="card-title mb-1">BQ Samambaia Mescla</h5>
                  <p className="text-muted mb-0">AM1733</p>
                </div>
              </div>
              <Button onClick={() => tog_grid()} className="btn btn-primary btn-sm">Ver Detalhes</Button>
            </Card>
          </Col>
          <Col>
            <Card className="card-body">
              <div className="d-flex flex-column text-center mb-4 align-items-center">
                <div className="flex-shrink-0">
                  <Image src={avtar1} alt="" className="avatar-xl rounded-circle" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h5 className="card-title mb-1">Aspargo Outonal</h5>
                  <p className="text-muted mb-0">AM1857</p>
                </div>
              </div>
              <Button onClick={() => tog_grid()} className="btn btn-primary btn-sm">Ver Detalhes</Button>
            </Card>
          </Col>
          <Col>
            <Card className="card-body">
              <div className="d-flex flex-column text-center mb-4 align-items-center">
                <div className="flex-shrink-0">
                  <Image src={avtar6} alt="" className="avatar-xl rounded-circle" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h5 className="card-title mb-1">Salsao Outonal</h5>
                  <p className="text-muted mb-0">AM1679</p>
                </div>
              </div>
              <Button onClick={() => tog_grid()} className="btn btn-primary btn-sm">Ver Detalhes</Button>
            </Card>
          </Col>
          <Col>
            <Card className="card-body">
              <div className="d-flex flex-column text-center mb-4 align-items-center">
                <div className="flex-shrink-0">
                  <Image src={avtar4} alt="" className="avatar-xl rounded-circle" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h5 className="card-title mb-1">Pendente Samambaia</h5>
                  <p className="text-muted mb-0">AM2181</p>
                </div>
              </div>
              <Button onClick={() => tog_grid()} className="btn btn-primary btn-sm">Ver Detalhes</Button>
            </Card>
          </Col>

          {/* MODAL DE DETALHES DO ITEM DO ESTOQUE */}
          <ModalEstoque
            showModal={modal_grid}
            onHide={() => tog_grid()}
            finalState={setmodal_grid}
          />

        </Row>
      </div>

    </React.Fragment>
  );
}

Estoque.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
};


export default Estoque;