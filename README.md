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

**For MongoDB Atlas (Cloud):**
If you're using MongoDB Atlas, your connection string should include the database name:
```env
DATABASE_URL="mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/taskmanagement?retryWrites=true&w=majority"
```

**Note:** 
- Replace `username` and `password` with your MongoDB Atlas credentials
- Replace `cluster0.xxxxx.mongodb.net` with your actual cluster URL
- The database name (`taskmanagement`) must be included in the connection string
- Replace `your-secret-key-change-this-in-production` with a strong, random secret key for production use

4. Generate Prisma Client and push schema to MongoDB:
```bash
npm run prisma:generate
npm run prisma:push
```

**Note:** MongoDB doesn't use traditional migrations. `prisma db push` syncs your Prisma schema directly to the database.

5. Start the backend server:
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



## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Author

Sagar-6203620715

## GitHub Repository

https://github.com/Sagar-6203620715/MeatecFinal

