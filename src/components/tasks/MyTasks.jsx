import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask, userTask } from '../../redux/features/tasks/taskSlice';
import TaskDeatilModal from './TaskDeatilModal';

const MyTasks = () => {
  const { tasks, userSpecificTask } = useSelector((state) => state.tasks);
  const { name: userName } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(0);

  const handleDetails = (id) => {
    setTaskId(id);
    setIsOpen(!isOpen);
  }


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userTask(userName))
  }, [userName, dispatch, tasks])

  return (
    <div>
      <TaskDeatilModal isOpen={isOpen} setIsOpen={setIsOpen} taskId={taskId} />
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTask.map(item => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button onClick={() => handleDetails(item.id)} className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button onClick={() => dispatch(updateTask({ id: item.id, status: 'done' }))} className="grid place-content-center" title="Done">
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
