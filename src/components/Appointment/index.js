import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";
import Error from "./Error";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const DELETE = "DELETE";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

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
    props
      .bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch(() => 
        transition(ERROR_SAVE, true)
      );
  }

  function confirmDelete() {
    transition(CONFIRM);
  }

  function handleDelete() {
    transition(DELETE);
    props
      .cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
      })
      .catch(() => 
        transition(ERROR_DELETE, true)
      );
  }

  function onEdit() {
    transition(EDIT);
  }
  return (
    //conditionally render components
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={confirmDelete}
          onEdit={onEdit}
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
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you want to delete?"
          onCancel={back}
          onConfirm={() => handleDelete(props.id)}
        />
      )}
      {mode === EDIT && (
        <Form
          interviewers={props.interviewers}
          interviewer={props.interview.interviewer}
          student={props.interview.student}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === ERROR_SAVE &&
        <Error  
        message="Could not update appointment" 
        onClose={back}
        />}
      {mode === ERROR_DELETE &&
        <Error 
        message="Could not delete appointment" 
        onClose={back}
        />}
    </article>
  );
}
