import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './hooks/redux';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TasksPage from './pages/TasksPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { token } = useAppSelector((state) => state.auth);

  return (
    <Routes>
      <Route
        path="/login"
        element={token ? <Navigate to="/tasks" replace /> : <LoginPage />}
      />
      <Route
        path="/register"
        element={token ? <Navigate to="/tasks" replace /> : <RegisterPage />}
      />
      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <TasksPage />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Navigate to="/tasks" replace />} />
    </Routes>
  );
}

export default App;

