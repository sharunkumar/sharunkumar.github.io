import React, {useContext} from "react";
import TalkCard from "../../components/talkCard/TalkCard";
import StyleContext from "../../contexts/StyleContext";
import {talkSection} from "../../portfolio";
import "./Talks.scss";

export default function Talks() {
  const {isDark} = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <div className="main" id="talks">
      <div className="talk-header">
        <h1 className="talk-header-title">{talkSection.title}</h1>
        <p
          className={
            isDark
              ? "dark-mode talk-header-subtitle"
              : "subTitle talk-header-subtitle"
          }
        >
          {talkSection.subtitle}
        </p>
        {talkSection.talks.map((talk, i) => {
          return (
            <TalkCard
              key={i}
              talkDetails={{
                title: talk.title,
                subtitle: talk.subtitle,
                slides_url: talk.slides_url,
                event_url: talk.event_url,
                image: talk.image,
                isDark
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
