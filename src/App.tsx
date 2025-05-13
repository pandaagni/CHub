import "./App.css"
import Home from './Pages/Home'
import {Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/chatrooms' element={<Home/>} />
        </Routes>
      </main>  

    </>
  )
}

export default App
