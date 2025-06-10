import "./App.css"
import Chatroom from "./Pages/Chatroom"
import Home from './Pages/Home'
import Tools from './Pages/Tools'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tools' element={<Tools/>} />
        <Route path='/chatrooms' element={<Chatroom/>} />
      </Routes>
    </>
  )
}

export default App
