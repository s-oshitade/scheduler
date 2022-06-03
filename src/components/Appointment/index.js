import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  console.log("props", props);
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const DELETE = "DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    //call the props.bookInterview function with the appointment id and interview as arguments from within the save function
    transition(SAVING);
    props.bookInterview(props.id, interview).then(() => {
      transition(SHOW);
    }).catch((error)=> console.log(error))
  }
  
  function confirmDelete() {
    transition(CONFIRM);
  }
  
  function handleDelete(id) {
    console.log(id)
    transition(DELETE);
    props.cancelInterview(id).then(() => {
      transition(EMPTY);
    }).catch((error)=> console.log(error))
  }

  return (
    //conditionally render components
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={confirmDelete}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={back}
          //pass the save function to the Form component
          onSave={save}
        />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETE && <Status message="Deleting" />}
      {mode === CONFIRM && <Confirm 
        message="Are you sure you want to delete?"
        onCancel={back}
        onConfirm={() => handleDelete(props.id)}
      />}
    </article>
  );
}
