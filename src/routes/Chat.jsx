import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      user: 'Atendente diz:',
      text: 'Olá! Como posso ajudar você hoje?',
      align: 'left',
    },
    {
      user: 'Atendente diz:',
      text: 'Tem alguma dúvida específica?',
      align: 'left',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const addMessage = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      alert('Preencha todos os campos!');
      return;
    }

    setMessages([
      ...messages,
      { user: 'Você diz:', text: inputValue, align: 'right' },
    ]);
    setInputValue('');
  };

  return (
    <Container fluid className="chat-container">
      <Row>
        <Col>
          <div id="title">Atendimento On-line</div>
        </Col>
      </Row>
      <div id="voltar">
        <Link to="/" className="volta">
          Voltar
        </Link>
      </div>
      <main>
        <section className="screen">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.align}`}>
              <div className="usuario">{message.user}</div>
              <div className="msg">{message.text}</div>
            </div>
          ))}
        </section>
        <form id="mandar" className="mandar" onSubmit={addMessage} method="get">
          <input
            type="text"
            id="mensagem"
            placeholder="Digite sua mensagem..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button id="enviar" type="submit">
            Enviar
          </button>
        </form>
      </main>
    </Container>
  );
};

export default Chat;
