
export function getAppointmentsForDay(state, day) {
  const daysArr = state.days;
  const appointmentsArr = []
  for(const obj of daysArr){
    if(obj.name === day){
      for(let appointmentNo of obj.appointments){
        appointmentNo = appointmentNo.toString();
        appointmentsArr.push(state.appointments[appointmentNo])
      }
    }
  }
  return appointmentsArr;
}

