import React from "react";
import DayListItem from "./DayListItem";

export default function DayList({ days, value, onChange }) {
  
  const dayList = days.map(({ id, name, spots }) => (
      <DayListItem
      key={id}
      name={name}
      spots={spots} 
      selected={name === value}
      setDay={onChange}
      />
  ))

  return (
    <ul>
      {dayList}
    </ul>
  );
}