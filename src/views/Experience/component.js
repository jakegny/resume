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
          Contract project with a newly formed team of five developers to create a product personalization application for the company’s apparel and shoe lines. Project was completed early, and an offer of a permanent role was extended. Contributed to the UI, back end and the infrastructure setup and roll-out.
          {' '}
          Technologies used: React/Redux, Angular, Node.js, HTML/JavaScript/CSS, JSON, Postman, Python, D3.js, TensorFlow, Asgard, Jenkins, Mocha, Enzyme, Git/Github, Jira, Confluence
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
          Google Actions environments to provide audible reporting and a dashboard for ecommerce store owners. Created other games and utilities on these platforms as well. Managed four developers working on the server side, in the web console and dashboard, as well as the client connectors to Woo Commerce, Shopify, and Google Analytics.
          {' '}
          Technologies used: Node.js, React/Redux, HTML/JavaScript/CSS, Bootstrap, JQuery, JSON, PHP, Python, D3.js, AWS (EC2, ELB, Cloudwatch, Route53, IAM, S3, SNS), Apache, ELK monitoring, Amazon ASK, Google Actions/API.AI, Mocha, MySQL, Postgres, psql, pgAdmin, Postman, Star UML, Woo Commerce, Shopify, Google Analytics, Stripe, vi, Atom, Git/Github, Jira, Confluence
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
          Contributed to a team of 11 developers in all aspects of the product from infrastructure to the core server to a unique geo-location mobile app for drone management, for which a patent is pending. Led the three person Dev Ops team, restructuring the server farm to realize more than $200K savings annually.
          {' '}
          Technologies used: Java, Spring, JUnit, React/Redux, React Native, Leaflet, D3.js, JSON, XML, Postman, Stormpath, Apache, AWS (EC2, ELB, Cloudwatch, Route53, IAM, S3, SNS), RabbitMQ, ELK Monitoring, Jenkins, Salt, Docker, Python, ESRI, Atom, vi, Git/Github, IntelliJ, Jira, Confluence
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
          Hired six months prior to graduation as a Test Dev Engineer to automate the testing of both new design and existing wafers. In addition to automation development, owned multi-million dollar tools and modules, as well as the setup and maintenance of the web servers for a 14-person team of primarily PhD designers. Negotiated with tool vendors on component upgrades and repairs as well as new tooling.
          {' '}
          Technologies used: Python, Java, C/C++, Matlab, MS SQL, Sublime, Visual Studio Code
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
          Network and user administrator for engineering design firm with more than 500 employees. Responsible for server patching, upgrades and patches and assisting both engineers and non-technical personnel.
          {' '}
          Technologies used: Python, MS SQL, Powershell, Sublime{' '}
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
          Responsible for setting up audio/visual equipment for school events, assisting professors with classroom equipment issues, and Help Desk work.
        </p>
      </div>
    </div>
  );
};

export default Experience;
