import { useSelector } from "react-redux";
import Modal from "../ui/Modal";


const TaskDeatilModal = ({ isOpen, setIsOpen, taskId }) => {
    const { tasks } = useSelector((state) => state.tasks);

    const task = tasks.find(item => item.id === taskId);

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title} >
           <p>{task?.descripion}</p>
        </Modal>
    );
};

export default TaskDeatilModal;