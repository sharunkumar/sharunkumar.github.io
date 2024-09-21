import React from "react";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {illustration, techStack} from "../../portfolio";
import "./Progress.scss";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <div className="skills-container">
        <div className="skills-bar">
          <h1 className="skills-heading">Proficiency</h1>
          {techStack.experience.map((exp, i) => {
            const progressStyle = {
              width: exp.progressPercentage
            };
            return (
              <div key={i} className="skill">
                <p>{exp.Stack}</p>
                <div className="meter">
                  <span style={progressStyle}></span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-image">
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img alt="Skills" src={require("../../assets/images/skill.svg")} />
          )}
        </div>
      </div>
    );
  }
  return null;
}
