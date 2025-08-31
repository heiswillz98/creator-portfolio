import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "socialmedia")
    return (
      <img
        src={require("../../assets/images/socialmedia.jpg")}
        alt="Social Media Management"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "550px",
          objectFit: "cover",
        }}
      />
    );
  else if (props.fileName === "contentcreator")
    return (
      <img
        src={require("../../assets/images/contentcreator.jpg")}
        alt="Content Creation"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "550px",
          objectFit: "cover",
        }}
      />
    );
  else if (props.fileName === "ugc")
    return (
      <img
        src={require("../../assets/images/ugc.JPG")}
        alt="UGC & Brand Collaboration"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "550px",
          objectFit: "cover",
        }}
      />
    );
  else if (props.fileName === "digitalmarketer")
    return (
      <img
        src={require("../../assets/images/experience.JPG")}
        alt="Digital Marketing"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "550px",
          objectFit: "cover",
        }}
      />
    );
  else if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assets/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div" style={{ marginTop: "50px" }}>
                <Fade right duration={1000}>
                  <h1
                    className="skills-heading"
                    style={{ color: theme.text, fontSize: "40px" }}
                  >
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
