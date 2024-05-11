import Genai from "./components/genai/genai"
import './App.css'
import SecondInstance from "./components/2ndInstance/2ndinstance.jsx"
import Newstack from './components/createNewStack/createStack.jsx'
import Popup from './components/pop-up-box/pop-up.jsx'
import { useState } from "react"
import helper from "./helper/helper.js"

function App() {
    const [showModal, setShowModal] = useState(false);

    function updater() {
        setShowModal(!showModal);
    }

    function handleSubmit() {
        setShowModal(false);
        helper(setShowModal); // Call the helper function to handle form submission
    }
    
    return (
        <div className="parent">
            <Genai />
            <div className ="sub_header">
                <p className="myStacks">My Stacks</p>
                <Newstack play={updater}/>
            </div>
            <hr />
            {showModal && (
                <div className="modal-overlay" onClick={(e)=>{if(e.target === e.currentTarget)
                    setShowModal(!showModal);
                }}>
                    <div className="modal-content">
                        <SecondInstance play={handleSubmit} forCancelButton={updater} close={updater}/>
                    </div>
                </div>
            )}
            <div id="components"></div>
        </div>
    );
}

export default App;
