import './App.css';
import ListPosts from './component/api-post/ApiPost';
import Counter from './component/counter/Counter';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchList from './component/search-list/SearchList';

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
      element: <Home />
    },
    {
      path: '/counter',
      element: <Counter />
    },
    {
      path: '/posts',
      element: <ListPosts />
    },
    {
      path: '/search',
      element: <SearchList />
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
