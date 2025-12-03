export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'pending' | 'completed' | 'in-progress';
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskDto {
  title: string;
  description?: string;
  status?: 'pending' | 'completed' | 'in-progress';
}

export interface UpdateTaskDto {
  title?: string;
  description?: string;
  status?: 'pending' | 'completed' | 'in-progress';
}


