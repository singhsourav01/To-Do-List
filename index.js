const title = document.querySelector("#myTitle");
const description = document.querySelector("#myDescription");
const button = document.querySelector("#myButton");
const display = document.querySelector("#displayContent");

button.addEventListener("click", () => {
  userInput();
});

// Assigning value.
function userInput() {
  if (
    !(
      ((title.value && description.value) == null) |
      ((title.value && description.value) == "")
    )
  ) {
    const titleValue = title.value;
    const descriptionValue = description.value;
    // Setting value in localStorage
    localStorage.setItem(titleValue, descriptionValue);
  }
}

// For displaying over-all content
function displayTask() {
  for (let index = 0; index < localStorage.length; index++) {
    const outputDescription = document.querySelector("#Description")

    // Creating elements
    const myDiv = document.createElement("div");
    myDiv.setAttribute("id", "displayDiv");
    const myTitle = document.createElement("p");
    const myDescription = document.createElement("p");
    myDescription.setAttribute('id', 'Description')
    const buttonDel = document.createElement("button");
    const updateBtn = document.createElement("button");

    // Initilizing the localStorage Value
    let key = localStorage.key(index);
    let value = localStorage.getItem(key);

    // Code of Delete button
    buttonDel.setAttribute("id", "deleteBtn");
    buttonDel.addEventListener("click", () => {
      localStorage.removeItem(key);
    });

     //Code of Update button
     updateBtn.setAttribute("id", "updateBtn");
     updateBtn.addEventListener("click", () => {
        let updateValue = localStorage.getItem(key)
        const presentValue = document.querySelector('#Description')
        updateValue = presentValue.textContent 
        localStorage.setItem(key, updateValue)
       }
     );

    // const myValue = document.querySelector('#Description')

    // Assigning the value to elements
    myTitle.textContent = key;
    myDescription.textContent = value;
    display.appendChild(myDiv);
    myDiv.appendChild(myTitle);
    myDiv.appendChild(myDescription);
    //Making p editable
    myDescription.contenteditable = "true";
    myDescription.setAttribute("contenteditable", "true");
    buttonDel.textContent = "Delete";
    myDiv.appendChild(buttonDel);
    updateBtn.textContent = "Update";
    myDiv.appendChild(updateBtn);
  }
}
displayTask();