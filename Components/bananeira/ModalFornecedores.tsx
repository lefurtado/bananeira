import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const ModalFornecedores = ({ showModal, onHide, finalState }) => {
  return (
    <div>
      <Modal
        show={showModal}
        onHide={onHide}
        centered
        size='md'
      >
        <Modal.Header className="modal-title fw-bold">
          Adicionar Fornecedores
        </Modal.Header>
        <Modal.Body>
          <Form action="#">
            <Row className="g-3">
              <Col lg={12}>
                <div className="form-floating">
                  <Form.Control type="text" id="firstnamefloatingInput" placeholder="Enter your firstname" />
                  <Form.Label htmlFor="firstnamefloatingInput">Nome</Form.Label>
                </div>
              </Col>
              <Col lg={12}>
                <div className="form-floating">
                  <Form.Control type="text" id="lastnamefloatingInput" placeholder="Enter your Lastname" />
                  <Form.Label htmlFor="lastnamefloatingInput">CNPJ</Form.Label>
                </div>
              </Col>
              <Col lg={12}>
                <div className="form-floating">
                  <Form.Control type="text" id="emailfloatingInput" placeholder="Enter your email" />
                  <Form.Label htmlFor="emailfloatingInput">Telefone</Form.Label>
                </div>
              </Col>
              <Col lg={12}>
                <div className="hstack gap-2 justify-content-end">
                  <Button variant="secondary" onClick={() => finalState(false)}>Fechar</Button>
                  <Button variant="primary" >Salvar</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalFornecedores;