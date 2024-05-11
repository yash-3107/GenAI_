import { Link } from 'react-router-dom';
import './createStack.css'
function createStacki({play}){
    
return(
         <div className = "New_Stack" onClick={()=>play()}>
             <p className="text">+ New Stack</p>
         </div>    
)
}
export default createStacki;