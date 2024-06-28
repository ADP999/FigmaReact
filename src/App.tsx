import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import JobPage from './layout/JobPage'

function App() {

  //this is used for page routing by using we can navigate one page to another
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<JobPage />}>
        <Route index element={""} />
        <Route path='/jobs' element={""} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
