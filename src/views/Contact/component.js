import React from 'react';
import './styles.css';

const Contact = props => {
  return (
    <div>
      <h3 className="josefine">Contact</h3>
      <div>
        <span className="fa fa-phone contact-icon phone" />
        <span className="contact-item">801-541-4191</span>
      </div>
      <div>
        <span className="fa fa-envelope contact-icon email" />
        <a className="contact-item" href="mailto:jakegny@gmail.com">
          jakegny@gmail.com
        </a>
      </div>
      <div>
        <span className="fa fa-github contact-icon github" />
        <a className="contact-item" href="https://github.com/jakegny">
          https://github.com/jakegny
        </a>
      </div>
      <div>
        <span className="fa fa-twitter contact-icon twitter" />
        <a className="contact-item" href="https://twitter.com/jakegny">
          https://twitter.com/jakegny
        </a>
      </div>
      <div>
        <span className="fa fa-linkedin contact-icon linkedin" />
        <a
          className="contact-item"
          href="https://www.linkedin.com/in/jakenylund/"
        >
          https://www.linkedin.com/in/jakenylund/
        </a>
      </div>

    </div>
  );
};

export default Contact;
