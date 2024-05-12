function helper(setshowModal) {
    let inputName = document.getElementsByClassName("name2");
    let paraContent = document.getElementsByClassName("desc2");

    if (inputName.length > 0 && paraContent.length > 0) {
        let inputNameValue = inputName[0].value.trim(); // Use value property for input elements and trim whitespace
        let paraContentValue = paraContent[0].value.trim(); // Use value property for input elements and trim whitespace

        // Check if input values are not null or empty strings
        if (inputNameValue && paraContentValue) {
            setshowModal(false); 
            let componentsAdd = document.getElementById("components");
            let newdiv = document.createElement('div');
            let newHeading = document.createElement('h3');
            let para = document.createElement('p');
            let anchor = document.createElement('a');
            let button1 = document.createElement('button');
            button1.setAttribute('id',"push");
            newHeading.textContent = inputNameValue;
            para.textContent = paraContentValue;
            button1.textContent = "Edit Stack";
            newdiv.appendChild(newHeading);
            newdiv.appendChild(para);
            anchor.appendChild(button1);
            anchor.setAttribute("href","/src/opener.jsx");
            
            newdiv.appendChild(anchor);
            componentsAdd.appendChild(newdiv);
        }
    }
}
export default helper