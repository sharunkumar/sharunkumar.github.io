import React from "react";
import "./SoftwareSkill.scss";
import {softwareSkillsV2} from "./software-skills-v2";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {Object.entries(softwareSkillsV2).map(([skillName, Icon]) => (
            <li
              key={skillName}
              className="software-skill-inline"
              name={skillName}
            >
              <Icon />
              <p>{skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
