import './App.css';
import './style.scss'
import './media-query.css'
import {Routes,Route, Navigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home';
import About from './pages/About'
import AddEdit from './pages/AddEdit'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import Header from './components/Header';
import Auth from './pages/Auth'
import { useEffect, useState } from 'react';
import { auth } from './firebase';
function App() {
  const [active, setActive] = useState("home")
  const [user, setUser] = useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if (authUser){
      setUser(authUser)  
    }else{
      setUser(null)
    }
  })
  })

  return (
    <div className="App">
      <Header  active={active} setActive={setActive} user={user} setUser={setUser}/>
      <ToastContainer position='top-center'/>
     
     
   <Routes>
    <Route path='/' element={<Home setActive={setActive}/>} />
    <Route path='/about' element={<About />} />
    <Route path='/detail/:id' element={<Details />} />
    <Route path='/update/:id' element={user?.uid?<AddEdit user={user} />:<Navigate to="/" />} />
    <Route path='/create' element={user?.uid?<AddEdit user={user} />:<Navigate to="/" />} />
    <Route path='/auth' element={<Auth active={active} setActive={setActive}/>} />
    <Route path='*' element={<NotFound />} />
   </Routes>

   
    </div>
  );
}

export default App;
