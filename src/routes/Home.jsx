import { Link } from 'react-router-dom';
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  async function verificaVazio(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new formData(form);
    if (formData.get('nome') == '') {
      alert('Preencha o campo nome');
      return;
    }
  }

  return (
    <form onSubmit={verificaVazio} method="get" id="mandar" className="mandar">
      <Container>
        <Row>
          <Col>Digite seu nome</Col>
        </Row>
      </Container>
      <input
        type="text"
        id="nome"
        name="nome"
        placeholder="Digite seu nome"
      ></input>

      <div className="my-6">
        <Link to="/chat" className="botao">
          Abrir chat
        </Link>
      </div>
    </form>
  );
}
