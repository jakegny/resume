import React from 'react';
// import { Col, Row, Grid } from 'react-bootstrap';

const Projects = props => {
  return (
    <div>
      <h3 className="josefine">Projects</h3>
      <p className="merriweather">
        Side projects I am more than happy to talk about
      </p>
      <h4 className="josefine">Motion Controlled Drone Flight</h4>
      <p className="merriweather">
        <b>Java</b>
        {' '}
        (Android). Uses a Myo Band on your arm to do basic flight with a 3DR Iris drone.
      </p>
      <h4 className="josefine">News Reliability</h4>
      <p className="merriweather">
        <b>Python.</b>
        {' '}
        My first attempt and programatically determining how accurate a news story is.
      </p>
      <h4 className="josefine">Browser Network Tracking</h4>
      <p className="merriweather">
        <b>JavaScript.</b>
        {' '}
        Chrome plugin to visualize what network calls are being made.
      </p>
      <h4 className="josefine">React/Redux Component Generator</h4>
      <p className="merriweather">
        <b>JavaScript.</b>
        {' '}
        Think Yoeman at the component level.
      </p>
      <h4 className="josefine">React Scroll Mechanics</h4>
      <p className="merriweather">
        <b>JavaScript.</b>
        {' '}
        How to tie two scroll views together with different animations.
      </p>
      <h4 className="josefine">Meal Planner</h4>
      <p className="merriweather">
        <b>JavaScript / Clojure / ClojureScript.</b>
        {' '}
        Version one was done in Javascript. React Native / Node. Version two (very early still) is being worked on in Clojure / Cljs.
      </p>
    </div>
  );
};

export default Projects;
