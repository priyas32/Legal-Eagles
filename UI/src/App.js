import './App.css';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { useState } from 'react';

function App(){
  const [user, setUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: '/', 
      element: (user === null ? <LoginPage setUser={setUser}/> : <HomePage user={user} setUser={setUser}/>)
    },
    {
      path : '/login', 
      element : <LoginPage setUser={setUser}/>
    },
    {
      path:'/register', 
      element:<RegisterPage setUser={setUser}/>
    }
  ]);

  return(

    <div className='App'>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;