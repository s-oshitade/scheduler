import React from "react";
import DayListItem from "./DayListItem";

export default function DayList({ days, day, setDay }) {
  
  const dayList = days.map(({ id, name, spots }) => (
      <DayListItem
      key={id}
      name={name}
      spots={spots} 
      selected={name === day}
      setDay={setDay}
      />
  ))

  return (
    <ul>
      {dayList}
    </ul>
  );
}