import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { register, clearError } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const registerSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useAppSelector((state) => state.auth);

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const onSubmit = async (data: RegisterFormData) => {
    const { confirmPassword, ...registerData } = data;
    const result = await dispatch(register(registerData));
    if (register.fulfilled.match(result)) {
      navigate('/tasks');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-100 px-4">
      <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-md border border-gray-200 
                      rounded-2xl shadow-xl shadow-purple-100 transition-all animate-fadeIn">
        
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 tracking-tight">
          Create Your Account ✨
        </h2>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-300 text-red-700 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Username */}
          <div>
            <label htmlFor="username" className="text-sm font-medium text-gray-700 block mb-1">
              Username
            </label>
            <input
              {...registerField('username')}
              type="text"
              id="username"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-purple-500 
                        focus:border-purple-500 transition-all shadow-sm"
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-1">
              Password
            </label>
            <input
              {...registerField('password')}
              type="password"
              id="password"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-purple-500 
                        focus:border-purple-500 transition-all shadow-sm"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 block mb-1">
              Confirm Password
            </label>
            <input
              {...registerField('confirmPassword')}
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-purple-500 
                        focus:border-purple-500 transition-all shadow-sm"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-purple-600 text-white rounded-lg font-medium
                      hover:bg-purple-700 transition-all shadow-md hover:shadow-lg 
                      active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-purple-600 hover:underline font-medium">
            Login here
          </a>
        </p>
      </div>
    </div>

  );
};

export default RegisterForm;



