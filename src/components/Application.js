import React, { useState, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from "./DayList"
import InterviewerList from "./InterviewerList";
import Appointment from "./Appointment";

// const appointments = {
//   "1": {
//     id: 1,
//     time: "12pm",
//   },
//   "2": {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer:{
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   "3": {
//     id: 3,
//     time: "2pm",
//   },
//   "4": {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer:{
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       }
//     }
//   },
//   "5": {
//     id: 5,
//     time: "4pm",
//   }
// };

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

export default function Application(props) {
// const [day, setDay] = useState("Monday");
// const [days, setDays] = useState([]);
// const [currentInterviewerID, setCurrentInterviewerID] = useState(null);

//Combine the states into a single object
const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {}
});

const dailyAppointments = [];

const appointmentsArray = dailyAppointments.map(appointment => {
  return (
    <Appointment key={appointment.id}  {...appointment} />
    )
  })

  const setDay = day => setState({ ...state, day });
  const setDays = days => setState(prev => ({ ...prev, days }));
  
useEffect(() => {
  Promise.all([
    axios.get('/api/days'),
    axios.get('/api/appointments')
  ]).then(all => {
    console.log("all", all)
    console.log(all[0].data);
    console.log(all[1].data);
    setDays([...all[0].data]);
    setState(prev => ({...prev, days: all[0].data, appointments: all[1].data}))
 });
}, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      {/* <section className="schedule">
        <InterviewerList
          interviewers={interviewers}
          interviewer = {currentInterviewerID}
          setInterviewer = {setCurrentInterviewerID}
        />
      </section> */}
      <section className="schedule">
        {appointmentsArray}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
