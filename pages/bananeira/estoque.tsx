import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import { Card, Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

import avtar1 from '@assets/images/bananeira/plantas/aspargo_outonal.jpeg'
import avtar2 from '@assets/images/users/avatar-2.jpg'
import avtar3 from '@assets/images/bananeira/plantas/bq_samambaia_mescla.jpeg'
import avtar4 from '@assets/images/bananeira/plantas/pendente_samambaia.jpeg'
import avtar5 from '@assets/images/bananeira/plantas/redondo_mescla.jpeg'
import avtar6 from '@assets/images/bananeira/plantas/salsao_outonal.jpeg'
import avtar7 from '@assets/images/users/avatar-7.jpg'
import avtar8 from '@assets/images/users/avatar-8.jpg'

const Estoque = () => {
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
              <Link href="#" className="btn btn-primary btn-sm">Ver Detalhes</Link>
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
              <Link href="#" className="btn btn-primary btn-sm">Ver Detalhes</Link>
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
              <Link href="#" className="btn btn-primary btn-sm">Ver Detalhes</Link>
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
              <Link href="#" className="btn btn-primary btn-sm">Ver Detalhes</Link>
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
              <Link href="#" className="btn btn-primary btn-sm">Ver Detalhes</Link>
            </Card>
          </Col>
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