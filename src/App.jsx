import Genai from "./components/genai/genai"
import './App.css'
import SecondInstance from "./components/2ndInstance/2ndinstance.jsx"
import Newstack from './components/createNewStack/createStack.jsx'
import Popup from './components/pop-up-box/pop-up.jsx'
import { useState } from "react"
function App() {
      const [flag,flagSetter] = useState(false)
      function play(){
            flagSetter(!flag)
            return <SecondInstance/>
            
      }
return (
        <div className="parent">
           <Genai />
           <div className ="sub_header">
                 <p className="myStacks">My Stacks</p>
                 <Newstack play={play}/>
           </div>
           <hr />
        </div>
        
      )
}

export default App


