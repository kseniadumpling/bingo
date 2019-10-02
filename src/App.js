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
      <Container >
        <Row className="justify-content-md-center pt-2">
          <Col md={10} sm={12} xs={12}>
            <h1 className="pt-2 pb-2 text-center">Бинго!</h1>
            <p className="pb-2 ml-5">Собравший всю строку/столбец/диагональ обязан выкрикнуть "бинго"<br/>
              <i>и пусть Глебовский припомнит вам это на экзамене</i>
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={12} sm={12} xs={12}>
            <BingoTable/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
