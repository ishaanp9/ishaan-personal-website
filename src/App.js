import './App.css';
import WebFont from 'webfontloader';
import React, { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins'],
      },
    });
  }, []);

  return (
    <div className="App">
      <p className="title">
        Hi, I'm <span className="name-text">Ishaan Puri </span> 👋
      </p>
      <p className="subtitle">
        I'm an entrepenuer, software developer, and researcher studying{' '}
        <span style={{ color: '#706fd3' }}>computer science </span> at the{' '}
        <span style={{ color: '#4B2E83' }}>University of Washington 🐺</span>.
      </p>
      <div className="update-box-container">
        <p className="update-box-text">
          🚀 <span style={{ fontWeight: 'bold' }}>Currently,</span> working on
          Project Sidewalk through the Makeability Lab at at UW. Also learning
          about Blockchain + Web3 and it's applications in the real world. Oh
          yeah, start-up idea coming soon. Loading...
        </p>
      </div>
      <div className="links-container">
        <p
          onClick={() => {
            window.open('mailto:ishaanp9@uw.edu');
          }}
          className="link-item label-orange hover"
        >
          email
        </p>
        <a className="link-item label-yellow">resume</a>
        <a
          href="https://github.com/ishaanp9"
          target="_blank"
          className="link-item label-red"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/ishaanpuri/"
          target="_blank"
          className="link-item label-darkblue"
        >
          linkedin
        </a>
        <a
          href="https://twitter.com/ishaanp9"
          target="_blank"
          className="link-item label-lightblue"
        >
          twitter
        </a>
        <a
          href="http://open.spotify.com/user/31hbehwc4yh2h5xvpp4ep4meu52u"
          target="_blank"
          className="link-item label-green"
        >
          spotify
        </a>
      </div>
      <hr className="component-divider" />
      {/* divider */}
      <p style={{ display: 'flex', alignItems: 'center' }}>
        <span className="component-header">
          Welcome to <span style={{ color: ' #A7226E ' }}>me</span>.
        </span>{' '}
        🔥
      </p>
      <p className="component-text-general">
        I'm a 19 y/o college student with a passion for amazing products and new
        technologies. In my free time, I love to code, work out, listen to
        podcasts, read, and keep up with the Seattle Seahawks and Seattle
        Mariners ⚾
        <br />
        <br />
        Overall, I am interested in product development, user interface design,
        blockchain, web3, and artificial intellegence (to name a few) ⚙️
      </p>
      <hr className="component-divider" />
      {/* divider */}
      <p style={{ display: 'flex', alignItems: 'center' }}>
        <span className="component-header">
          Keeping <span style={{ color: ' #2F9599 ' }}>myself busy.</span>
        </span>{' '}
        🏃
      </p>
      <p className="component-text-general">What I am working on now:</p>
      <ul className="arrow-list">
        <li className="li-item">
          Conducting reserach at the University of Washington's{' '}
          <a
            href="https://makeabilitylab.cs.washington.edu/"
            className="label-red link"
          >
            Makeability Lab
          </a>
          , using computer vision, crowdsoucing, and online map imagery with the
          goal to transform the ways in which accessibility information is
          collected and visualized for every sidewalk, street, and building
          facade across the globe.
        </li>
        <li>
          Creating a <span className="label-green">machine learning model</span>
          to predict baseball game outcomes and individual stats for each
          player.
        </li>
        <li>
          Learning blockchain and web3 development. Specifically
          <span className="label-orange">solidity</span> development!
        </li>
      </ul>
      <p className="component-text-general">What I have done in the past:</p>
      <ul className="arrow-list">
        <li className="li-item">
          Co-founded{' '}
          <a href="https://spogo.us/" className="label-green link">
            Spogo
          </a>
          , a platform to connect college athletes to monetizable opportunities.
          <ul className="arrow-list">
            <li className="li-item">
              Generated <span className="label-lightblue">Pre-Seed</span>{' '}
              investor interest.
            </li>
            <li className="li-item">
              Top 10% (out of 15,000 apps worldwide) of all{' '}
              <a
                href="https://www.ycombinator.com/"
                className="label-orange link"
              >
                Y-Combinator
              </a>
              applications for the W22 batch.
            </li>
            <li className="li-item">
              Mentored by two{' '}
              <span className="label-darkblue">successful entrepenuers</span>{' '}
              (one recently sold his company to Microsoft 🤯)
            </li>
            <li className="li-item">
              Learned a <span className="label-grey">ton!</span>
            </li>
            <li className="li-item">
              Although, I have stopped working on Spogo, I'm excited about my
              future in the <span className="label-green">start-up</span> world
              🌎!
            </li>
          </ul>
        </li>
      </ul>
      <ul className="arrow-list">
        <li className="li-item">
          Interned at{' '}
          <a href="https://e24tech.com/" className="label-darkblue link">
            e24 Technolgies
          </a>
          .
          <ul className="arrow-list">
            <li className="li-item">
              Used Python and the{' '}
              <span className="label-red">NLTK Toolkit</span> to transcribe
              phone conversations to a short summary with key points and
              insights.
            </li>
          </ul>
        </li>
      </ul>
      <ul className="arrow-list">
        <li className="li-item">
          <span className="label-yellow">
            Founded Technolgy Student Association Chapter
          </span>{' '}
          at Woodinville High School.
        </li>
        <li className="li-item">
          Placed 3rd in State FBLA{' '}
          <span className="label-lightblue">
            Mobile Application Development
          </span>{' '}
          Competition.
        </li>
      </ul>
      <hr className="component-divider" />
      {/* divider */}
      <p style={{ display: 'flex', alignItems: 'center' }}>
        <span className="component-header">
          A peek into <span style={{ color: '#594F4F' }}>my life.</span>
        </span>{' '}
        👀
      </p>
      {/* <p className="component-text-general">This the real me.</p> */}
      <div className="first-three">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="component-header">Watching...</p>
          <p className="list-component-container">
            Ted Lasso
            <br />
            The Morning Show
            <br />
            Ballers
            <br />
            Attack on Titan
            <br />
            The Daily Show
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="component-header">Listening to...</p>
          <p className="list-component-container">
            J. Cole
            <br />
            Ye
            <br />
            Cordae
            <br />
            Kay Flock
            <br />
            Silk Sonic
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="component-header">Inspired by...</p>
          <p className="list-component-container">
            Justin Kan
            <br />
            Garry Tan
            <br />
            Sundar Pichai
            <br />
            Russell Wilson
            <br />
            J. Cole
          </p>
        </div>
      </div>
      <div className="last-two">
        <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
          <p className="component-header">Reading...</p>
          <p className="list-component-container">
            <div className="list-component-item">
              <span className="label-orange">Etherum</span> by Henning Dedrich
            </div>
            <br />
            <div className="list-component-item">
              <span className="label-red">A Random Walk down Wall Street</span>{' '}
              by Burton G. Malkiel
            </div>
            <br />
            <div className="list-component-item">
              <span className="label-darkblue">The Start-up of You</span> by
              Reid Hoffman
            </div>
            <br />
            <div className="list-component-item">
              <span className="label-lightblue">Zero to One</span> by Peter
              Thiel
            </div>
            <br />
            <div className="list-component-item">
              <span className="label-green">Cracking the Coding Interview</span>{' '}
              by Gayle Laakmann McDowell
            </div>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
          <p className="component-header">Browsing...</p>
          <p className="list-component-container">
            Tech Crunch
            <br />
            HackerNews
            <br />
            Reddit (r/mariners, r/seahawks, r/csMajors)
            <br />
            Twitter
            <br />
            Spotify
          </p>
        </div>
      </div>
      <hr className="component-divider" />
      {/* divider */}

      <p>Made with ❤️ by Ishaan Puri</p>
      <p>Credit to Varun Shenoy for design</p>
      <p>Updated December 2021</p>
    </div>
  );
}

export default App;
