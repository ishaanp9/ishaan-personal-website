import './App.css';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className="header">
        <p className="header-item">Home</p>
        <p className="header-item">About</p>
        <p className="header-item">Resume</p>
        <p className="header-item">Projects</p>
        <p className="header-item">Contact Me</p>
      </div>

      {/* Here we gonna have my name */}

      <div className="name-text">Ishaan Puri</div>
      <h3 className="subtitle-text">
        <span className="subtitle-item-text">Software Developer</span>
        <span className="subtitle-item-text">Entrepenuer</span>
        <span className="subtitle-item-text">Learner</span>
      </h3>
      <div className="links-container">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ishaanp9"
        >
          <div className="link-container">
            <FaGithub
              color={'black'}
              classname="link-logo"
              name="github-logo"
              size={30}
            />
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ishaanpuri/"
        >
          <div className="link-container">
            <FaLinkedinIn
              color={'black'}
              classname="link-logo"
              name="linkedin-logo"
              size={30}
            />
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:ishaanp9@uw.edu"
        >
          <div className="link-container">
            <MdEmail
              color={'black'}
              classname="link-logo"
              name="email-logo"
              size={30}
            />
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/ishaanp9/"
        >
          <div className="link-container">
            <AiFillInstagram
              color={'black'}
              classname="link-logo"
              name="instagram-logo"
              size={30}
            />
          </div>
        </a>
      </div>

      {/* Here will be the buttons to my github, linkedin, email, and instagram */}
    </div>
  );
}

export default App;
