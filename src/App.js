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
        <Row className="justify-content-md-center pt-5">
          <Col md="auto">
            <h1 className="pt-4 pb-2 text-center">Бинго!</h1>
            <h5 className="pb-5 ml-5">Собравший всю строку/столбец/диагональ обязан выкрикнуть "бинго" на всю аудиторию<br/>
              <i>и пусть Глебовский припомнит вам это на экзамене</i>
            </h5>
            <BingoTable/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
