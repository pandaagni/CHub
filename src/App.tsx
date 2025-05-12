import "./App.css"
import Home from './Components/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import {Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </main>  

    </>
  )
}

export default App
