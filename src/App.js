import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import duck01 from './assets/duck01.svg';
import duck03 from './assets/duck03.svg';


const MyPortfolio = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true
  });
  return (
    <div className="resume">
      <div className="user-profile">
        <h2 className="user-name">Rahul Khakse</h2>
        <p className="grey">Full Stack Developer</p>
        <p className="grey">rahul.khakse@gmail.com</p>
      </div>

      <div className="skill">
        <h2 className="user-name">Skill Highlights</h2>
        <div className="inner-skill">
          <ul>
            <li>Agile / Scrum methodology</li>
            <li>Angular</li>
            <li>React, React Native</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div className="inner-skill">
          <ul>
            <li>Ionic 1, 5</li>
            <li>API design</li>
            <li>Codeigniter , PHP , MySQL</li>
            <li>HTML , CSS, JavaScript</li>
          </ul>
        </div>
      </div>

      <div className="exp">
        <h2>Experience : 5+yr</h2>
        <div>
          <h4 className="company-name">AIRVision Infinity ( Ionic 1-5 , React Native )</h4>
          <p className="position">Software Engineer - 01/2020 to Till Date</p>
        </div>
        <div>
          <h4 className="company-name">All India Reporter ( Codeigniter, Ionic 1-5 , MySQL, React Native )</h4>
          <p className="position">Software Engineer - 04/2016 to 12/2019</p>
        </div>

        <div>
          <h4 className="company-name">Mirackle Solutions ( PHP, Codeigniter, MySQL, Ionic 1 )</h4>
          <p className="position">Software Engineer - 06/2015 to 03/2016</p>
        </div>
      </div>

      <div className="education">
        <h2>Education</h2>
        <div>
          <p className="position">Amravati University (SGBAU) , Amravati Bachelor of Engineering (CSE)</p>
          <p className="position">Government Polytechnic , Amravati Diploma In Information Technology</p>
        </div>
      </div>

      {/* <div>
        <a href="#" className="mbtn-grad">Download PDF</a>
      </div> */}
    </div>
  )
}

function App() {
  const [menu, setMenu] = useState(0);

  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translateX(0px)" },
    to: { transform: "translateX(800px)" },
    config: { duration: 5000 },
    reset: true,
    reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    }
  });
  return (
    <div className="contain">
      <div className="menu">
        <div className="icon-bar">
          <a className="mbtn-grad" href="#" onClick={() => setMenu(0)}>Home</a>
          <a className="mbtn-grad" href="#" onClick={() => setMenu(1)}>My Portfolio</a>
          <a className="mbtn-grad" href="https://github.com/rahuldmk">My Open Source Project</a>
          {/* <a className="btn-grad" href="#">Hire Me</a> */}
        </div>
      </div>
      <div className="slider">
        {menu == 1 ? <MyPortfolio /> : null}
      </div>
      <div className="duckmove">
        <div className="duckinner">
          <animated.div style={scrolling}>
            <img className={key % 2 === 0 ? "flip-image" : ""} src={duck03} width="50" height="50" />
            <img className={key % 2 === 0 ? "flip-image" : ""} src={duck01} width="45" height="45" />
          </animated.div>
        </div>
      </div>

      <div className="portfolio">
        Clone Portfolio : <a href="https://github.com/rahuldmk/portfolio">https://github.com/rahuldmk/portfolio</a>
      </div>
    </div>
  );
}

export default App;
