import './design.css'
import helper from "../../helper/helper.js";
function secondInstance({play,forCancelButton,closed}){
   return (
    
            <div className='parentofSecondInstance'>
              <div className='headOfpopup'>
                <h4 className='headingOfpopup'>Create New Stack</h4>
                <button  onClick={closed} style={{backgroundColor:'white',marginRight:'10px',border:'none'}}>X</button>
              </div>

              <p className='name1'>Name :</p>
              <input className="name2" type="text" maxLength={30} id="name"/>

              <p className='desc1'>Description:</p>
              <input className='desc2' type="text" maxLength={200} id="description" style={{textAlign: 'left'}}/>

              <div className='forButtons'>
                  <button id="one" onClick={forCancelButton} >Cancel</button>
                  <button id ="two" onClick={play}>Create</button>
              </div>
          </div>
  
        
   )
}
export default secondInstance