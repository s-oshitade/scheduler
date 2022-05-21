import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function (props) {
  const interviewerClass = classNames(
    "interviewers__item",
    {"interviewers__item--selected" : props.selected});

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      Sylvia Palmer
    </li>
  )
};