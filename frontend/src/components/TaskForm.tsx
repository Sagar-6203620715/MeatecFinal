import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAppDispatch } from '../hooks/redux';
import { createTask, updateTask } from '../store/slices/tasksSlice';
import { Task, CreateTaskDto } from '../types/task';

const taskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  status: z.enum(['pending', 'completed', 'in-progress']).optional(),
});

type TaskFormData = z.infer<typeof taskSchema>;

interface TaskFormProps {
  task?: Task;
  onCancel?: () => void;
  onSuccess?: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onCancel, onSuccess }) => {
  const dispatch = useAppDispatch();
  const isEditing = !!task;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: task
      ? {
          title: task.title,
          description: task.description || '',
          status: task.status,
        }
      : {
          status: 'pending',
        },
  });

  const onSubmit = async (data: TaskFormData) => {
    if (isEditing && task) {
      await dispatch(updateTask({ id: task.id, data }));
    } else {
      await dispatch(createTask(data as CreateTaskDto));
      reset();
    }
    onSuccess?.();
  };

  return (
    <div
      className="
        bg-white p-6 rounded-xl shadow-lg border border-gray-200
        transition-all duration-300
      "
    >
      <h3 className="text-xl font-semibold mb-5 text-gray-900">
        {isEditing ? 'Edit Task' : 'Create New Task'}
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        {/* TITLE */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
          <input
            {...register('title')}
            type="text"
            className="
              w-full px-4 py-2.5 rounded-lg border border-gray-300 shadow-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500
              focus:border-blue-500 transition-all
            "
            placeholder="Enter task title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        {/* DESCRIPTION */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            {...register('description')}
            rows={3}
            className="
              w-full px-4 py-2.5 rounded-lg border border-gray-300 shadow-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500
              focus:border-blue-500 transition-all
            "
            placeholder="Enter description"
          />
        </div>

        {/* STATUS */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            {...register('status')}
            className="
              w-full px-4 py-2.5 rounded-lg border border-gray-300 shadow-sm
              bg-white focus:outline-none focus:ring-2 
              focus:ring-blue-500 focus:border-blue-500 transition-all
            "
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="
              flex-1 py-2.5 px-4 rounded-lg text-white font-medium
              bg-blue-600 hover:bg-blue-700 transition-all shadow-md
              hover:shadow-lg focus:outline-none focus:ring-2 
              focus:ring-blue-500
            "
          >
            {isEditing ? 'Update Task' : 'Create Task'}
          </button>

          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="
                py-2.5 px-4 rounded-lg text-gray-700 font-medium
                bg-gray-200 hover:bg-gray-300 transition-all shadow-sm
                focus:outline-none focus:ring-2 focus:ring-gray-400
              "
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
