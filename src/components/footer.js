import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
      Copyright © 2020 Corey Ferland 
      <p className="icons">
        <a href="https://www.linkedin.com/in/corey-ferland/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <span className="icon">
          <a href="https://github.com/cferland" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </span>
      </p>
    </footer>
  )
}

export default Footer;