import { FaTimes } from "react-icons/fa";

const Task = ({task, onDelete, onToggle}) => {
  return <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
    <h3>{task.text} <FaTimes style={xBtnStyle} onClick={() => onDelete(task.id)} /></h3>
    <p>{task.day}</p>
  </div>;
};

const xBtnStyle = {
  color: 'red',
  cursor: 'pointer'
}

export default Task;
