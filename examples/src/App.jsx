import './App.css';
import Counter from './component/counter/Counter';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const App = () => {

  const Home = () => {
    return (
      <div>
        Home screen
      </div>
    )
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      children: [
        {
          path: '/counter',
          element: <Counter/>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
