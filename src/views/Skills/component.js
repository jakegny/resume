import React from 'react';
import './styles.css';

// <div>
//   <div className="xp-bar xp-marker1" />
//   <div className="xp-bar xp-marker1" />
//   <div className="xp-bar" />
//   <div className="xp-bar xp-marker2" />
// </div>

const Skills = props => {
  return (
    <div>
      <h3 className="josefine">Skills</h3>
      <div>
        <div className="bar js">
          JS | React/Redux | Node
        </div>
        <div className="bar devops">
          DevOps | AWS | CI/CD | Docker | ...
        </div>
        <div className="bar java">
          Java | Spring
        </div>
        <div className="bar python">
          Python | Data Science
        </div>
        <div className="bar clojure">
          Clojure | Cljs
        </div>
        <div className="xp-bar1">
          <div className="xp-marker-left"><span>Beginner</span></div>
          <div className="xp-marker-left"><span>Proficient</span></div>
          <div className="xp-marker-right"><span>Expert</span></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
