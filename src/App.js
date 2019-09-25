import React, { Component } from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import BingoTable from "./components/BingoTable";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


/*
 * It gets the validation,
 * after that shows the Bingo Table
 */

class App extends Component {
  state = {
    validation: false
  };

  render () {
    return (
      <Container className="text-center">
        <Row className="justify-content-md-center pt-5">
          <Col md="auto">
            <h1>Бинго по лекциям компьютерных сетей</h1>
            <h5>Перед тем, как продолжить, пройдите валидацию:</h5>
            <p>(will make it later)</p>
            {/* тут вызовется функция валидации, которая покажет таблицу при успешном входе */}
            <BingoTable/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
