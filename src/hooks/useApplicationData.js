import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  //Combine the states into a single object
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState((previous) => ({ ...previous, day }));

  function updateSpotsRemaining(newAppointments) {
    return state.days.map((eachDayObj) => {
      let emptySpots = 0;

      for(const apptId of eachDayObj.appointments){
        if(!newAppointments[apptId].interview){
          emptySpots++;
        }
      }
      
     return { ...eachDayObj, spots: emptySpots }

    })
  }
  
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id], //spread existing keys.
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = updateSpotsRemaining(appointments)
    
    //Update the bookInterview function to call setState with new state object
    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      setState({
        ...state,
        appointments,
        days
      });
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = updateSpotsRemaining(appointments)
    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({
        ...state,
        appointments,
        days
      });
    });
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
