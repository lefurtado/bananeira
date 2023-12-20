import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const ModalEstoque = ({ item, showModal, onHide, finalState }) => {
  const nome = item ? item.nome : '';
  const cnpj = item ? item.cnpj : '';
  const telefone = item ? item.telefone : '';
  const id = item ? item.id : '';

  return (
    <div>
      <Modal
        show={showModal}
        onHide={onHide}
        centered
        size='lg'
      >
        <Modal.Header className="modal-title fw-bold">
          Detalhes do item
        </Modal.Header>
        <Modal.Body>
          <Form action="#">
            <Row className="g-3">
              <Col lg={12}>
                <div className="hstack gap-2 justify-content-end">
                  <Button variant="outline-secondary" onClick={() => finalState(false)}>Fechar</Button>
                  <Button variant="outline-primary">Salvar</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalEstoque;