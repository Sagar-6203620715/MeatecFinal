# Task Management Application

A full-stack task management application built with React, NestJS, MongoDB, and JWT authentication. Users can register, log in, and manage their personal tasks with full CRUD operations.

## Technology Stack

### Frontend
- **React** (Vite)
- **TypeScript**
- **TailwindCSS** - Styling
- **Redux Toolkit** - State management
- **Axios** - HTTP client
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **React Router** - Routing

### Backend
- **NestJS** - Node.js framework
- **TypeScript**
- **Prisma ORM** - Database ORM
- **MongoDB** - Database
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **class-validator** - Request validation

## Features

- ✅ User registration and authentication
- ✅ JWT-based secure authentication
- ✅ Protected routes (frontend and backend)
- ✅ Task CRUD operations
- ✅ User-specific task management
- ✅ Form validation (frontend and backend)
- ✅ Modern, responsive UI
- ✅ Real-time task status updates

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

## Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Sagar-6203620715/MeatecFinal.git
cd MeatecFinal
```

### 2. Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `backend` directory:
```env
DATABASE_URL="mongodb://localhost:27017/taskmanagement"
JWT_SECRET="your-secret-key-change-this-in-production"
JWT_EXPIRES_IN="7d"
PORT=3000
```

**Note:** Replace `your-secret-key-change-this-in-production` with a strong, random secret key for production use.

4. Generate Prisma Client:
```bash
npm run prisma:generate
```

5. Run database migrations:
```bash
npm run prisma:migrate
```

6. Start the backend server:
```bash
npm run start:dev
```

The backend server will run on `http://localhost:3000`

### 3. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend application will run on `http://localhost:5173`

## Running the Application

1. **Start MongoDB** (if running locally):
   - Make sure MongoDB is running on `mongodb://localhost:27017`
   - Or update the `DATABASE_URL` in `.env` to point to your MongoDB instance

2. **Start the Backend**:
   ```bash
   cd backend
   npm run start:dev
   ```

3. **Start the Frontend** (in a new terminal):
   ```bash
   cd frontend
   npm run dev
   ```

4. **Access the Application**:
   - Open your browser and navigate to `http://localhost:5173`
   - Register a new account or login with existing credentials

## API Endpoints

### Authentication

#### Register User
- **POST** `/api/auth/register`
- **Body:**
  ```json
  {
    "username": "string (min 3 characters)",
    "password": "string (min 6 characters)"
  }
  ```
- **Response:**
  ```json
  {
    "access_token": "jwt-token",
    "user": {
      "id": "user-id",
      "username": "username"
    }
  }
  ```

#### Login
- **POST** `/api/auth/login`
- **Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "access_token": "jwt-token",
    "user": {
      "id": "user-id",
      "username": "username"
    }
  }
  ```

### Tasks (Protected Routes - Require JWT Token)

All task endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

#### Get All Tasks
- **GET** `/api/tasks`
- **Response:**
  ```json
  [
    {
      "id": "task-id",
      "title": "Task title",
      "description": "Task description",
      "status": "pending",
      "userId": "user-id",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
  ```

#### Get Single Task
- **GET** `/api/tasks/:id`
- **Response:**
  ```json
  {
    "id": "task-id",
    "title": "Task title",
    "description": "Task description",
    "status": "pending",
    "userId": "user-id",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
  ```

#### Create Task
- **POST** `/api/tasks`
- **Body:**
  ```json
  {
    "title": "string (required)",
    "description": "string (optional)",
    "status": "pending | completed | in-progress (optional, default: pending)"
  }
  ```
- **Response:** Created task object

#### Update Task
- **PUT** `/api/tasks/:id`
- **Body:**
  ```json
  {
    "title": "string (optional)",
    "description": "string (optional)",
    "status": "pending | completed | in-progress (optional)"
  }
  ```
- **Response:** Updated task object

#### Delete Task
- **DELETE** `/api/tasks/:id`
- **Response:** Deleted task object

## Testing

### Backend Tests

Run backend tests:
```bash
cd backend
npm test
```

Run tests with coverage:
```bash
npm run test:cov
```

Run end-to-end tests:
```bash
npm run test:e2e
```

### Frontend Tests

Frontend testing setup can be added with Jest and React Testing Library. Currently, the project focuses on functionality.

## Project Structure

```
MeatecFinal/
├── backend/
│   ├── src/
│   │   ├── auth/          # Authentication module
│   │   │   ├── dto/        # Data transfer objects
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.module.ts
│   │   │   ├── jwt.strategy.ts
│   │   │   └── jwt-auth.guard.ts
│   │   ├── tasks/          # Tasks module
│   │   │   ├── dto/        # Data transfer objects
│   │   │   ├── tasks.controller.ts
│   │   │   ├── tasks.service.ts
│   │   │   └── tasks.module.ts
│   │   ├── prisma/         # Prisma service
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── prisma/
│   │   └── schema.prisma   # Database schema
│   ├── package.json
│   └── .env                # Environment variables (create this)
│
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   ├── TaskForm.tsx
│   │   │   ├── TaskList.tsx
│   │   │   ├── TaskItem.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   └── TasksPage.tsx
│   │   ├── store/          # Redux store
│   │   │   ├── slices/
│   │   │   │   ├── authSlice.ts
│   │   │   │   └── tasksSlice.ts
│   │   │   └── store.ts
│   │   ├── types/          # TypeScript types
│   │   ├── hooks/          # Custom hooks
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
│
└── README.md
```

## Database Schema

### User Model
- `id` (ObjectId) - Primary key
- `username` (String, unique) - User's username
- `password` (String) - Hashed password
- `createdAt` (DateTime)
- `updatedAt` (DateTime)
- `tasks` (Relation) - User's tasks

### Task Model
- `id` (ObjectId) - Primary key
- `title` (String) - Task title
- `description` (String, optional) - Task description
- `status` (String) - Task status (pending, completed, in-progress)
- `userId` (ObjectId) - Foreign key to User
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Protected API routes with JWT guards
- User-specific data isolation
- Input validation on both frontend and backend
- CORS configuration for secure cross-origin requests

## Environment Variables

### Backend (.env)
- `DATABASE_URL` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT token signing
- `JWT_EXPIRES_IN` - JWT token expiration time (default: 7d)
- `PORT` - Backend server port (default: 3000)

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check the `DATABASE_URL` in `.env` file
- Verify MongoDB connection string format

### JWT Authentication Issues
- Ensure `JWT_SECRET` is set in `.env`
- Check token expiration settings
- Verify token is being sent in Authorization header

### CORS Issues
- Ensure frontend URL matches CORS configuration in `backend/src/main.ts`
- Default frontend URL: `http://localhost:5173`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

Sagar-6203620715

## GitHub Repository

https://github.com/Sagar-6203620715/MeatecFinal

