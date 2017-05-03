import React from 'react';
import './styles.css';

import nikeLogo from '../../nike.png';
import skillsaiLogo from '../../skillsai.png';
import skywardLogo from '../../skyward.png';
import intelLogo from '../../intelLogo.png';
import columbiaSteelLogo from '../../columbiasteel.png';
import upLogo from '../../up.png';

const Experience = props => {
  return (
    <div>
      <h3 className="josefine">Experience</h3>
      <div>
        <div className="company">
          <img className="company-logo nike" src={nikeLogo} alt="nike logo" />
          <h4 className="josefine company-name">Nike</h4>
          <h5 className="merriweather company-time">2016 - Present</h5>
        </div>
        <h5 className="josefine">Senior Web Application Developer</h5>
        <p className="merriweather">
          Dynamic web page generation for NikeID with React/Redux
        </p>
      </div>

      <div>
        <div className="company">
          <img
            className="company-logo square"
            src={skillsaiLogo}
            alt="skillsai logo"
          />
          <h4 className="josefine company-name">SkillsAI</h4>
          <h5 className="merriweather company-time">2016 - Present</h5>
        </div>
        <h5 className="josefine">Co-Founder, Architect, Senior Developer</h5>
        <p className="merriweather">
          React/Redux and Node. Alexa Skill development, Hangman with over 6000 games played per month.
        </p>
      </div>

      <div>
        <div className="company">
          <img
            className="company-logo square"
            src={skywardLogo}
            alt="skyward logo"
          />
          <h4 className="josefine company-name">Skyward</h4>
          <h5 className="merriweather company-time">2015 - 2016</h5>
        </div>
        <h5 className="josefine">Full Stack Developer</h5>
        <p className="merriweather">
          Patent for Drone routing design. Lead Mobile Developer, what ever else needed doing.
        </p>
      </div>

      <div>
        <div className="company">
          <img
            className="company-logo intel"
            src={intelLogo}
            alt="intel logo"
          />
          <h4 className="josefine company-name">Intel</h4>
          <h5 className="merriweather company-time">2014 - 2015</h5>
        </div>
        <h5 className="josefine">Process TD Engineer</h5>
        <p className="merriweather">
          Automation development, tool management and maintenance.
        </p>
      </div>

      <div>
        <div className="company">
          <img
            className="company-logo columbia"
            src={columbiaSteelLogo}
            alt="columbia steel logo"
          />
          <h4 className="josefine company-name">Columbia Steel Casting</h4>
          <h5 className="merriweather company-time">2012 - 2014</h5>
        </div>
        <h5 className="josefine">Sys Admin</h5>
        <p className="merriweather">
          System administrator for Engineering firm.
        </p>
      </div>

      <div>
        <div className="company">
          <img
            className="company-logo up"
            src={upLogo}
            alt="university of portland logo"
          />
          <h4 className="josefine company-name">University of Portland</h4>
          <h5 className="merriweather company-time">2011 - 2012</h5>
        </div>
        <h5 className="josefine">Media Services Technician</h5>
        <p className="merriweather">
          A/V and computer help desk for students and professors.
        </p>
      </div>
    </div>
  );
};

export default Experience;
