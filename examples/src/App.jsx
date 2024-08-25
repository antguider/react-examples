import './App.css';
import ListPosts from './component/api-post/ApiPost';
import Counter from './component/counter/Counter';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchList from './component/search-list/SearchList';
import ShoppingCart from './component/shopping-cart/ShoppingCart'
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {

  const Home = () => {
    return (
      <div>
        Home screen
      </div>
    )
  };
  const StoreProvider = () => {
    return (
      <Provider store={store}>
        <div>
          Test screen
          <ShoppingCart />
        </div>
      </Provider>
    )
  };


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/store',
      element: <StoreProvider />
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
