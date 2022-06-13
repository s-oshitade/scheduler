import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots
  });

  const formatSpots = (spots) => {
    if(!spots) {
      return "no spots remaining"
    } 
    if(spots === 1) {
      return "1 spot remaining"
    } else return `${spots} spots remaining`
  }

const handleClick = () => {
  props.setDay(props.name)
}

  return (
    <li className={dayClass} onClick={handleClick} data-testid="day">
      <h2 className="text--regular" >{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}