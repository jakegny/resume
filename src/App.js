import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import './App.css';

import Title from './views/Title';
import About from './views/About';
import Skills from './views/Skills';
import Experience from './views/Experience';
import Contact from './views/Contact';
import Projects from './views/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <Title />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <About />
              <Skills />
            </Col>
            <Col xs={12} md={6}>
              <Experience />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <Projects />
            </Col>
            <Col xs={12} md={6}>
              <Contact />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
