import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import profile from "./assets/profile.png";

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
        <div className="header" id="landing">
          <a
            className={`mainLogo ${switchSide ? "fixed" : ""}`}
            href="#landing"
          >
            A R I A N N A
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

        <div className="contacts" id="contacts" ref={contactRef}>
          <h1> C O N T A C T</h1>
          {console.log(`contact is in view, ${contactView}`)}
          <p>
            I'm currently not seeking for new opportunties, but if you have any
            questions or simply want to connect, please feel free to reach out
            to me via:
          </p>
          <div className="socials">
            <p>dahliarianna@gmail.com</p>
            <a href="https://www.linkedin.com/in/ariannanguyen/" target="blank">
              linkedin
            </a>
          </div>
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default App;
