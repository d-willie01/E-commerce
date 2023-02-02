import './App.css';
import  {StateProvider} from './StateProvider';
import reducer, { initialState } from './reducer';
import Header from './Header';
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';

function App() {
  
  
  
  const router = createBrowserRouter([

    {
      path:"/",
      element: (
        <div>
        <Header/>
        <Home/>
        </div>
      )
    },

    {
      path:"/checkout",
      element: (
        <div>
          <Header/>
          <Checkout/>
        </div>
      )
    },

    {
      path:"/signin",
      element:(
        <div>
          <Login/>
        </div>
      )
    },

    {
      path:"/payment",
      element:(
        <div>
          <Payment/>
        </div>
      )
    }








  ])


  
  
  
  return (
    
    <StateProvider initialState={initialState} reducer={reducer}>
    
    <RouterProvider router = {router}/>

    </StateProvider>




  );
}

export default App;
