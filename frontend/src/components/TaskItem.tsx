import { useState } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { updateTask } from '../store/slices/tasksSlice';
import { Task } from '../types/task';
import TaskForm from './TaskForm';

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleStatusChange = async (
    newStatus: 'pending' | 'completed' | 'in-progress'
  ) => {
    await dispatch(updateTask({ id: task.id, data: { status: newStatus } }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-200 text-green-800 border border-green-300';
      case 'in-progress':
        return 'bg-yellow-200 text-yellow-800 border border-yellow-300';
      default:
        return 'bg-gray-200 text-gray-800 border border-gray-300';
    }
  };

  if (isEditing) {
    return (
      <TaskForm
        task={task}
        onCancel={() => setIsEditing(false)}
        onSuccess={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div className="
      bg-white p-5 rounded-xl shadow-md border border-gray-200
      hover:shadow-xl hover:-translate-y-1 transition-all duration-300
    ">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
          {task.description && (
            <p className="text-gray-600 mt-1 leading-relaxed">{task.description}</p>
          )}
        </div>

        <span
          className={`
            px-3 py-1 rounded-full text-xs font-semibold capitalize
            ${getStatusColor(task.status)}
          `}
        >
          {task.status}
        </span>
      </div>

      <div className="flex items-center justify-between mt-4">
        <select
          value={task.status}
          onChange={(e) => handleStatusChange(e.target.value as any)}
          className="
            px-3 py-2 rounded-lg border border-gray-300 text-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500
            hover:border-gray-400 transition
          "
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="
              px-4 py-2 rounded-lg text-sm font-medium
              bg-blue-600 text-white shadow-sm
              hover:bg-blue-700 hover:shadow-md
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="
              px-4 py-2 rounded-lg text-sm font-medium
              bg-red-600 text-white shadow-sm
              hover:bg-red-700 hover:shadow-md
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-red-500
            "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
