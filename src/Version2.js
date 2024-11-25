import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./AppV2.css";
import profile from "./assets/profile.png";
import birthday from "./assets/birthday.jpg";
import art8 from "./assets/art8.jpg";
import butterfly from "./assets/butterfly.jpg";
import mushroom from "./assets/mushroom.jpg";
import ramen from "./assets/ramen.jpg";
import field from "./assets/field.jpg";
import sink from "./assets/sink.jpg";
import mockingjay from "./assets/mockingjay.jpg";
import sunset from "./assets/sunset.jpg";
import allwatercolor from "./assets/allwatercolor.jpg";
import FixedHeader from "./FixedHeader";
import paintingprogress from "./assets/paintingprogress.jpg";
import book from "./assets/book.png";
import book2 from "./assets/book.gif";
import tat from "./assets/tat.png";
import tat2 from "./assets/tat.gif";
import cnctn from "./assets/cnctn.png";
import cnctnlogin from "./assets/cnctnlogin.png";
import serenelogin from "./assets/serenelogin.png";
import cnctnsignup from "./assets/cnctnsignup.png";
import serenesignup from "./assets/serenesignup.png";
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
          <h3 className={`mainLogo ${switchSide ? "fixed" : ""}`}>
            A R I A N N A
          </h3>
        </div>

        <div className="landingIntro">
          tl;dr - software developer with a love for arts, blending creativity
          with technical expertise to build solutions that resonate both
          visually and functionally.
        </div>
      </div>
      <div className="body" ref={ref1}>
        {console.log(`body inside viewport ${inView1}.`)}

        {switchSide && <FixedHeader />}
        <div className="aboutV2" id="about" ref={aboutRef}>
          <h1>A B O U T</h1>
          <p>
            {" "}
            My creative journey began with traditional arts like painting and
            drawing, where I found passion in visually expressing emotions and
            ideas. It wasn’t until later that I discovered programming could
            become an extension of that creativity. Now, as a software
            developer, I see each line of code as an opportunity to combine
            creativity with analytical thinking, creating solutions that are
            both aesthetically appealing and purposefully designed to make an
            impact.
          </p>
          <p>
            The purpose of this website is to showcase some of the work I've
            done over the years, reflecting my journey and growth as a creative
            individual. My goal is to invite viewers into an experience that
            transcends mediums, revealing how creativity can be expressed in
            different ways and forms.
          </p>
        </div>
        <div className="showcase">
          <div>
            <h3>w a t e r c o l o r</h3>
            <img id="paintingProgress" src={paintingprogress} alt="arts" />
          </div>
          <div className="waterColor">
            <img src={mockingjay} alt="arts" />
            <img src={allwatercolor} alt="arts" />
            <img src={butterfly} alt="arts" />
          </div>

          <div className="waterColor2">
            <img src={field} alt="arts" />
            <h3>a c r y l i c - p a i n t </h3>
            <img src={sunset} alt="arts" />
          </div>

          <div className="artImage2">
            <img src={ramen} alt="arts" />

            <div className="digitalDescription">
              <h3>d i g i t a l </h3>
              <p>
                The shift from paintbrush and canvas to digital drawing was
                challenging, mainly due to the rigid, unyielding surface of the
                iPad screen. Unlike the textured feel of paper or canvas, the
                smoothness of the glass makes each stroke feel different, and
                the sensation of the pencil gliding, almost scratching, across
                it is something I had to get used to. Yet, muscle memory kicks
                in, and my hand instinctively knows how to move, letting me
                recreate the flow and style of my traditional art. Though it’s
                an adjustment, each line becomes more familiar, blending old
                techniques with new tools.
              </p>
            </div>
          </div>
          <div className="artImage">
            <img src={birthday} alt="arts" />
            <img src={art8} alt="arts" />
          </div>
          <div className="artImage">
            <img src={sink} alt="arts" />
            <img src={mushroom} alt="arts" />
          </div>
          <div className="programming">
            <div className="programTitle">
              <div className="programDesc">
                <h3>p r o g r a m m i n g</h3>
                <p>
                  Through coding, I’ve been able to transform dull applications
                  into visually appealing and intuitive user experiences.
                  Leveraging my passion for design and creativity, I’ve created
                  interfaces that not only captivate users but also make
                  navigation enjoyable. Each project has been an opportunity to
                  merge technical problem-solving with artistic expression,
                  highlighting the impact of thoughtful and innovative
                  development.
                </p>
              </div>

              <img src={book2} alt="arts" id="book" />
            </div>
            <img
              src={tat}
              alt="arts"
              id={isHovered ? "tat2" : "tat"}
              // src={isHovered ? tat2 : tat}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <div className="programBody">
              <img src={serenelogin} alt="arts" />
              <img src={cnctnlogin} alt="arts" />
            </div>
            <div className="programBody">
              <img src={cnctnsignup} alt="arts" />
              <img src={serenesignup} alt="arts" />
            </div>
          </div>
        </div>

        <div className="contacts" id="contacts" ref={contactRef}>
          <h1> C O N T A C T</h1>
          {console.log(`contact is in view, ${contactView}`)}
          <p>
            I'm currently not open to new opportunities, but if you have any
            questions or would like to connect, please don’t hesitate to reach
            out to me at:
          </p>
          <div className="socials">
            <p>dahliarianna@gmail.com</p>
          </div>
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default App;
