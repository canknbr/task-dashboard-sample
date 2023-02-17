import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/home-page';
import { TasksPage,tasksPageLoader } from '../pages/tasks-page';
import { MainLayout } from '../layouts/main-layout';
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> },
              {
                path: 'tasks',
                element: <TasksPage />,
                loader: tasksPageLoader,

              }        
  ],
  },

]);
