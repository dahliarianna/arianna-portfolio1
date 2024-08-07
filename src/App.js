import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import all from "./assets/all.jpg";
import lavang from "./assets/lavangphoto.jpeg";
import serenedemo from "./assets/signupdemo.gif";
import tat from "./assets/tat.png";
import tat2 from "./assets/tat.gif";
import cnctn from "./assets/cnctn.png";
import cnctn2 from "./assets/cnctn.gif";
import book from "./assets/book.png";
import book2 from "./assets/book.gif";
import profile from "./assets/profile.jpeg";

function App() {
  const [switchSide, setSwitchSide] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [aboutView, setAboutView] = useState(false);
  const [contactView, setContactView] = useState(false);
  const [experienceView, setExperienceView] = useState(false);
  const [projectView, setProjectView] = useState(false);

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.12,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.2,
  });
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.2,
  });
  const { ref: projectRef, inView: projectInView } = useInView({
    threshold: 0.2,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView1) {
      setSwitchSide(true);
    } else if (inView2) {
      setSwitchSide(false);
    }
  }, [inView1, inView2]);

  useEffect(() => {
    if (aboutInView) {
      setAboutView(true);
    }
    if (experienceInView || projectInView || contactInView) {
      setAboutView(false);
    }
  }, [aboutInView, experienceInView, projectInView, contactInView]);

  useEffect(() => {
    if (experienceInView) {
      setExperienceView(true);
    }
    if (aboutInView || projectInView || aboutInView) {
      setExperienceView(false);
    }
  }, [aboutInView, experienceInView, projectInView, contactInView]);

  useEffect(() => {
    if (projectInView) {
      setProjectView(true);
    }
    if (aboutInView || experienceInView || contactInView) {
      setProjectView(false);
    }
  }, [aboutInView, experienceInView, projectInView, contactInView]);

  useEffect(() => {
    if (contactInView) {
      setContactView(true);
    }
    if (experienceInView || projectInView || aboutInView) {
      setContactView(false);
    }
  }, [aboutInView, experienceInView, projectInView, contactInView]);

  return (
    <div className="App">
      <div className="landing" ref={ref2}>
        <div className="header" id='landing'>
          <a className={`mainLogo ${switchSide ? "fixed" : ""}`} href='#landing'>
            A R I A N N A
          </a>
        </div>
        <div className={`landingNav ${switchSide ? "moveToSide" : ""}`}>
          <a id={`${aboutView ? "aboutUnderline" : ""}`} href="#about">
            about
          </a>
          <a
            id={`${experienceView ? "experienceUnderline" : ""}`}
            href="#experience"
          >
            experience
          </a>
          <a id={`${projectView ? "projectUnderline" : ""}`} href="#projects">
            projects
          </a>
          <a id={`${contactView ? "contactUnderline" : ""}`} href="#contacts">
            contact
          </a>
        </div>

        <div className="landingIntro">
          A passionate software engineer with expertise in full-stack JavaScript
          development, skillfully blending art and code to create beautiful &
          functional applications.
        </div>
      </div>
      <div className="body" ref={ref1}>
        {console.log(`body inside viewport ${inView1}.`)}
        <div className="about" id="about" ref={aboutRef}>
          <h1>A B O U T</h1>
          <p>
            {" "}
            I'm Arianna, a full stack software engineer located in Houston, TX,
            specializing in React and Node. Before programming, I have always
            found my creative side in traditional arts such as painting and
            drawing, but little did I know that transitioning into coding would
            be an extension of that creativity. I realized that behind every
            line of code lies an opportunity for artistic expression — a chance
            to combine my creative thinking with logical problem-solving skills
            to create something not just visually appealing, but also practical
            and functional.
          </p>
        </div>
        <div className="experience" id="experience" ref={experienceRef}>
          <h1>E X P E R I E N C E</h1>
          <div className="timeline">
            <div className="timelineLeft">
              <div className="experience1">
                <img src={lavang} alt="experience" />
                <p> UI DESIGNER</p>
                <p>
                  Volunteer to design and enhance the UI, resulting in a website
                  with an average of 10,000 monthly visitors. HTML, CSS,
                  JavaScript
                </p>
                <p>Skills: HTML, CSS, JavaScript</p>
              </div>
              <div className="emptyDiv">
                <h2>2023 - Serene</h2>
              </div>
              <div className="experience1">
                <img src={all} alt="experience" />
                <p>FRONTEND/WEB DEVELOPER</p>
                <p>
                  Hands-on with the development and maintenance of the
                  e-commerce website, ensuring its functionality and performance
                </p>
                <p>Skills: HTML, CSS, WordPress, Adobe</p>
              </div>
            </div>

            <div className="timelineMid"></div>
            <div className="timelineRight">
              <div className="emptyDiv">
                <h2>2024 - Our Lady of LV</h2>
              </div>
              <div className="experience1">
                <img src={serenedemo} alt="experience" />
                <p>SOFTWARE ENGINEER</p>
                <p>
                  Responsible for developing Serene, an open-source application
                  designed for visualizing metrics and preventing Lambda cold
                  starts
                </p>
                <p>
                  Skills: React.js, Node.js, JavaScript, TypeScript, noSQL, AWS,
                  HTML, CSS
                </p>
              </div>
              <div className="emptyDiv">
                <h2>2021 - Bari Dakmil</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="projects" id="projects" ref={projectRef}>
          <h1>P R O J E C T S</h1>
          <div className="project project1">
            <img
              src={isHovered ? cnctn2 : cnctn}
              alt="cnctn"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            ></img>
            <div className="projectDesc">
              <a
                href="https://cnctn-app-81c9361a875e.herokuapp.com/"
                target="blank"
              >
                Social Media
              </a>
              <p className="vision">
                Vision: A web application that replicates the core
                functionalities of a typical social media platform, including
                image and status uploads, and friends connection.{" "}
              </p>
              <p>
                Why I Built This Project: Recognizing the pivotal role of social
                media in modern communication, I built this application to offer
                a robust platform for users to share images and statuses, and
                connect with friends. The focus was on creating an intuitive and
                engaging user experience, ensuring easy navigation and
                interaction. By implementing these core features, the project
                aimed to provide a space for users to express themselves and
                maintain meaningful connections online.
              </p>
              <p>
                Technology Used: React, Node, AWS, PostgreSQL, HTML, CSS, JavaScript,
                TypeScript, Socket.io
              </p>
            </div>
          </div>
          <div className="project project2">
            <img
              src={isHovered1 ? tat2 : tat}
              alt="tat"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            ></img>
            <div className="projectDesc">
              <a
                href="https://dahliarianna.github.io/tat-ramen/"
                target="blank"
              >
                Ramen Bar
              </a>
              <p className="vision">
                Vision: A clean and visually pleasing website for a local ramen
                bar, with simple and easy navigation.
              </p>
              <p>
                Why I Built This Project: The local ramen bar, known for its
                authentic and delicious dishes, lacked an online presence that
                matched the quality of its offerings. I envisioned creating a
                clean and visually pleasing website to reflect the bar's
                aesthetic and culinary excellence. My goal was to design a
                platform that would not only attract new customers but also
                provide a seamless and enjoyable user experience. By
                implementing simple and easy navigation, I ensured that visitors
                could effortlessly explore the menu, learn about the bar's
                history, and make reservations. This project aimed to bridge the
                gap between the ramen bar’s traditional charm and modern digital
                expectations, ultimately enhancing its brand and customer
                engagement.
              </p>
              <p>Technology Used: HTML, CSS, JavaScript</p>
            </div>
          </div>
          <div className="project project3">
            <img
              src={isHovered2 ? book2 : book}
              alt="book"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            ></img>
            <div className="projectDesc">
              <a
                href="https://dahliarianna.github.io/tat-ramen/"
                target="blank"
              >
                Book Portfolio
              </a>
              <p className="vision">
                Vision: A personal portfolio application beautifully displayed
                as a 3D book, inviting users to interact and explore the
                showcased work in an engaging and immersive way.
              </p>
              <p>
                Why I Built This Project: In the competitive world of digital
                portfolios, I wanted to create something truly unique and
                captivating. This application transforms the traditional
                portfolio into a visually stunning 3D book, making the user's
                work stand out. The goal was to provide an interactive
                experience where visitors can "flip" through pages, discovering
                projects in a more engaging and memorable format. By merging
                functionality with artistic presentation, the project aims to
                showcase work in a way that is both professional and visually
                appealing, encouraging users to spend more time exploring and
                interacting with the content.
              </p>
              <p>Technology Used: React, HTML, CSS, JavaScript</p>
            </div>
          </div>
        </div>
        <div className="contacts" id="contacts" ref={contactRef}>
          <h1> C O N T A C T</h1>
          {console.log(`contact is in view, ${contactView}`)}
          <p>
            Thank you for taking the time to explore my portfolio and checking
            the works I’ve dedicated myself to. If you have any questions, would
            like to discuss potential collaborations, or just want to connect,
            please feel free to reach out to me via:
          </p>
          <div className="socials">
            <p>dahliarianna@gmail.com</p>
            <a href="https://www.linkedin.com/in/ariannanguyen/" target="blank">
              linkedin
            </a>
          </div>
          <img src={profile} alt="profile" />
          <p id="patent">© 2024 design and build by Arianna</p>
        </div>
      </div>
    </div>
  );
}

export default App;
