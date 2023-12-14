import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const ModalDetalhesFornecedores = ({ item, showModal, onHide, finalState }) => {
  // validação dos dados das props item //
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
          Editando Fornecedor {id} - {nome}
        </Modal.Header>
        <Modal.Body>
          <Form action="#">
            <Row className="g-3">
              <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control type='text' id='valueInput' defaultValue={nome} />
              </Form.Group>
              <Form.Group>
                <Form.Label>CNPJ</Form.Label>
                <Form.Control type='text' id='valueInput' defaultValue={cnpj} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Telefone</Form.Label>
                <Form.Control type='text' id='valueInput' defaultValue={telefone} />
              </Form.Group>
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

export default ModalDetalhesFornecedores;