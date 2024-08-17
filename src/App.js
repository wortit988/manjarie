import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from './utils/store';
import { Provider } from 'react-redux';
import Main from './components/Main';
import Body from './components/Body';
import Cart from './components/Cart';

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Main />,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/cart",
        element : <Cart />
      },
    ],
  },
]);


function App() {
  return (
    <Provider store = {store}>
    <div>
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
