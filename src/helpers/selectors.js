
export function getAppointmentsForDay(state, day) {
  const appointmentsArr = []
  for(const obj of state.days){
    if(obj.name === day){
      for(let appointmentNo of obj.appointments){
        appointmentsArr.push(state.appointments[appointmentNo])
      }
    }
  }
  return appointmentsArr;
}
