import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { logout } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const TasksPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      
      {/* NAVBAR */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Task Manager
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">
                👋 Welcome, <span className="font-semibold">{user?.username}</span>
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md 
                           hover:bg-red-700 active:scale-95 transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* HEADER + CREATE BUTTON */}
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Your Tasks</h2>
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium
                       hover:bg-blue-700 shadow-md active:scale-95 transition-all"
          >
            {showCreateForm ? 'Cancel' : '➕ Create Task'}
          </button>
        </div>

        {/* CREATE FORM CARD */}
        {showCreateForm && (
          <div className="mb-8 p-6 bg-white/80 backdrop-blur-md border border-gray-200 
                          rounded-2xl shadow-xl animate-fadeIn">
            <TaskForm
              onSuccess={() => setShowCreateForm(false)}
              onCancel={() => setShowCreateForm(false)}
            />
          </div>
        )}

        {/* TASK LIST */}
        <div
          className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl 
                     border border-gray-200 animate-fadeIn"
        >
          <TaskList />
        </div>

      </main>
    </div>
  );
};

export default TasksPage;
