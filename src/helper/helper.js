function helper(setshowModal) {
    let inputName = document.getElementsByClassName("name2");
    let paraContent = document.getElementsByClassName("desc2");

    if (inputName.length > 0 && paraContent.length > 0) {
        let inputNameValue = inputName[0].textContent;
        let paraContentValue = paraContent[0].textContent;

        if (inputNameValue !== undefined) {
            setshowModal(false); 
            let componentsAdd = document.getElementById("components");
            let newdiv = document.createElement('div');
            let newHeading = document.createElement('h3');
            let para = document.createElement('p');
            let button1 = document.createElement('button');
            button1.setAttribute('id',"push")
            newHeading.textContent = inputNameValue;
            para.textContent = paraContentValue;
            button1.textContent = "Edit Stack";
            newdiv.appendChild(newHeading);
            newdiv.appendChild(para);
            newdiv.appendChild(button1);
            componentsAdd.appendChild(newdiv);
        }
    }
}

export default helper