import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './styles.css';
import avatar from '../../avatar.jpg';

const Title = props => {
  return (
    <Row className="show-grid">
      <Col xs={12} md={3}>
        <img className="avatar" src={avatar} alt="jake" />
      </Col>
      <Col xs={12} md={9}>
        <div>
          <h2 className="josefine">Jake Nylund</h2>
          <h4 className="merriweather">
            Engineer  |  Architect  |  Programmer
          </h4>
        </div>
      </Col>
    </Row>
  );
};

export default Title;
