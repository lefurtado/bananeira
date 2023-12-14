import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const ModalFornecedores = ({ showModal, onHide, finalState }) => {
  return (
    <div>
      <Modal
        show={showModal}
        onHide={onHide}
        centered
        size='lg'
      >
        <Modal.Header className="modal-title fw-bold">
          Adicionar Fornecedores
        </Modal.Header>
        <Modal.Body>
          <Form action="#">
            <Row className="g-3">
              <Col lg={6}>
                <div className="form-floating">
                  <Form.Control type="text" id="firstnamefloatingInput" placeholder="Enter your firstname" />
                  <Form.Label htmlFor="firstnamefloatingInput">Nome</Form.Label>
                </div>
              </Col>
              <Col lg={6}>
                <div className="form-floating">
                  <Form.Control type="text" id="lastnamefloatingInput" placeholder="Enter your Lastname" />
                  <Form.Label htmlFor="lastnamefloatingInput">Email</Form.Label>
                </div>
              </Col>
              <Col lg={10}>
                <div className="form-floating">
                  <Form.Control type="email" id="emailfloatingInput" placeholder="Enter your email" />
                  <Form.Label htmlFor="emailfloatingInput">Endereço</Form.Label>
                </div>
              </Col>
              <Col lg={2}>
                <div className="form-floating">
                  <Form.Control type="password" id="passwordfloatingInput" placeholder="Enter your password" />
                  <Form.Label htmlFor="passwordfloatingInput">Número</Form.Label>
                </div>
              </Col>
              <Col lg={12} >
                <Form.Select className='mb-3 form-select-lg' aria-label='exemplo'>
                  <option defaultValue={0} value="">Selecione o tipo de fornecedor</option>
                  <option value="1">Plantas</option>
                  <option value="2">Acessórios</option>
                </Form.Select>
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