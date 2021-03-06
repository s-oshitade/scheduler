export function getAppointmentsForDay(state, day) {
  const appointmentsArr = [];
  for (const obj of state.days) {
    if (obj.name === day) {
      for (let appointmentNo of obj.appointments) {
        appointmentsArr.push(state.appointments[appointmentNo]);
      }
    }
  }
  return appointmentsArr;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const id = interview.interviewer;
  const interviewWithData = {
    student: interview.student,
    interviewer: {
      id: id,
      name: state.interviewers[id].name,
      avatar: state.interviewers[id].avatar,
    }
  }
  return interviewWithData;
}

export function getInterviewersForDay(state, day) {
  const result = [];
  for (const obj of state.days) {
    if (obj.name === day) {
      for (let interviewerNo of obj.interviewers) {
        result.push(state.interviewers[interviewerNo]);
      }
    }
  }
  return result;
}
