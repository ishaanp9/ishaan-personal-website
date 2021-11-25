import './App.css';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

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

      <h1>Ishaan Puri</h1>
      <div>
        <AiFillGithub classname="link-logo" name="github-logo" />
        <AiFillLinkedin classname="link-logo" name="linkedin-logo" />
        <MdEmail classname="link-logo" name="email-logo" />
        <AiFillInstagram classname="link-logo" name="instagram-logo" />
      </div>

      {/* Here will be the buttons to my github, linkedin, email, and instagram */}
    </div>
  );
}

export default App;
