import Genai from "./components/genai/genai"
import './App.css'
import SecondInstance from "./components/2ndInstance/2ndinstance.jsx"
import Newstack from './components/createNewStack/createStack.jsx'
import Popup from './components/pop-up-box/pop-up.jsx'
import { useState } from "react"
function App() {
      const [showModal,setshowModal] = useState(false);
      function updater(){
            setshowModal(!showModal);
            console.log("hello")
      }
return (
        <div className="parent">
           <Genai />
           <div className ="sub_header" onClick={updater}>
                 <p className="myStacks">My Stacks</p>
                 <Newstack/>
           </div>
           <hr />
                 {showModal && (
                  <div className="modal-overlay">
                  <div className="modal-content">
                    <SecondInstance />
                  </div>
                </div>
               )}

        </div>
        
      )
}

export default App


