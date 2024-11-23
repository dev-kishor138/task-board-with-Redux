import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";


const AddTasksModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const onCancel = () => {
        reset();
        setIsOpen(false);
    }

    const onSubmit = (data) => {
        dispatch(addTask(data));
        onCancel();
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Tasks" >
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                <div className="flex flex-col gap-3">
                    <label htmlFor="title">Tittle</label>
                    <input className="w-full rounded-md" type="text" id="title" {...register('title')} />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="descripion">Description</label>
                    <input className="w-full rounded-md" type="text" id="descripion" {...register('descripion')} />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="deadline">Deadline</label>
                    <input className="w-full rounded-md" type="date" id="deadline" {...register('deadline')} />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="assign">Assign to</label>
                    <select className="w-full rounded-md" id="assign" {...register('assign')}>
                        <option value="kishor">Kishor</option>
                        <option value="mamud">Mahmud</option>
                        <option value="rakib">Rakib</option>
                    </select>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="priority">Priority</label>
                    <select className="w-full rounded-md" id="priority" {...register('priority')}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                <div className="flex text-end gap-3 mt-4">
                    <button type="submit" className="bg-blue-500 px-5 py-2 rounded-md text-white">Save Task</button>
                    <button onClick={() => onCancel()} className="bg-red-500 px-5 py-2 rounded-md text-white">Cancel</button>
                </div>

            </form>
        </Modal>
    );
};

export default AddTasksModal;