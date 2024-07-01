import './App.css'
import Todo from './components/Todo'

function App() {


  return (
    <div className=' bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center h-screen' style={{ backgroundImage: "url('/bg.jpg')" }}>
<Todo/>
    </div>
  )
}

export default App
