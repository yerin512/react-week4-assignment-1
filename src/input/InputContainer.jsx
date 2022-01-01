import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTaskTitle } from '../action/actions';
import Input from './Input';

export default function InputContainer() {
  const taskTitle = useSelector((state) => state.taskTitle);
  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}