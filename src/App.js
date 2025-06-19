import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import {AdminDashBoard} from './components/admin-dashboard';
import { AdminLogin } from './components/admin-login';
import { VideoHome } from './components/video-home';
import { UserLogin } from './components/user-login';
import { UserRegister } from './components/user-register';
import { UserDashBoard } from './components/user-dashboard';
import { AdminAddVideo} from './components/admin-add-video';
import { AdminDeleteVideo } from './components/admin-delete-video';
import { AdminEditVideo } from './components/admin-edit-video';

function App() {
  return (
    <div className='body-background'>
      <div className='bg-shade'>
        <h1 className='text-center text-white pt-4'>Technologies Video Library</h1>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<VideoHome/>}></Route>
  
            <Route path='admin-dash' element={<AdminDashBoard/>} ></Route>
            <Route path='admin-login' element={<AdminLogin/>}></Route>
            <Route path='user-login' element={<UserLogin/>}></Route>
            <Route path='user-register' element={<UserRegister/>}></Route>
            <Route path='user-dash' element={<UserDashBoard/>}></Route>
            <Route path='add-video' element={<AdminAddVideo/>}></Route>
            <Route path='delete-video/:id' element={<AdminDeleteVideo/>}></Route>
            <Route path='edit-video/:id' element={<AdminEditVideo/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
