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
      {/* Here we gonna have my name */}
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
          about Blockchain and it's applications in the real world. Oh yeah,
          start-up idea coming soon. Loading...
        </p>
      </div>
      <div className="links-container">
        <a className="link-item label-orange">email</a>
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
        <span className="component-header">Welcome to me.</span> 🔥
      </p>
      <p className="component-text-general">
        I'm a 19 y/o college student with a passion for amazing products and new
        technologies. In my free time, I love to code, work out, listen to
        podcasts, read, and keep up with the Seattle Seahawks and Seattle
        Mariners ⚾
        <br />
        <br />
        Overall, I am interested in product development, user interface design,
        blockchain, and artificial intellegence (to name a few) ⚙️
      </p>
      <hr className="component-divider" />
      {/* divider */}
      <p style={{ display: 'flex', alignItems: 'center' }}>
        <span className="component-header">I like to do stuff.</span> 👨‍💻
      </p>
      <p className="component-text-general">
        {/* Spogo */}
        Currently, Conducting undergraduate research at the Makeability Lab at
        UW.
        <br />
        <br />
        👉 Working on Project Sidewalk, using computer vision, crowdsoucing, and
        online map imagery with the goal to transform the ways in which
        accessibility information is collected and visualized for every
        sidewalk, street, and building facade across the globe.
        <br />
        <br />
        Some other highlights 🎥
        <br />
        <br />
        I co-founded a start-up, Spogo, last summer, a platform to connect
        college athletes to monetizable opportunities.
        <br />
        <br />
        👉 Generated Pre-Seed investor interest.
        <br />
        👉 Top 10% (out of 15,000 apps worldwide) of all Y-Combinator
        applications for the W22 batch.
        <br />
        👉 Mentored by two successful entrepenuers (one recently sold his
        company to Microsoft 🤯)
        <br />
        👉 Learned a ton!
        <br />
        👉 Although, I have stopped working on Spogo, I'm excited about my
        future in the start-up world 🌎.
        <br />
        <br />
        Interned at e24 Technolgies.
        <br />
        <br />
        👉 Used Python and the NLTK Toolkit to transcribe phone conversations to
        a short summary with key points and insights.
        <br />
        <br />
        In High School:
        <br />
        <br />
        Founded Technolgy Student Association Chapter.
        <br />
        Placed 3rd in State FBLA Mobile Application Development Competition.
        <br />
      </p>
      <hr className="component-divider" />
      {/* divider */}
      <p style={{ display: 'flex', alignItems: 'center' }}>
        <span className="component-header">A peek into my life.</span> 👀
      </p>
      {/* <p className="component-text-general">This the real me.</p> */}
      <div className="first-three">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="component-header">Watching...</p>
          <p className="list-component-container">
            Ted Lasson
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

      <p>Copyright Ishaan Puri</p>
      <p>Credit to Varun Shenoy for design</p>
      <p>Updated December 2021</p>
    </div>
  );
}

export default App;
