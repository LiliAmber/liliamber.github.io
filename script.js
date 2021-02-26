
const formInputSite = document.querySelector(".formSite");
const formInputPass = document.querySelector(".formPass");
const formInputId = document.querySelector(".formId");

let list = [
  ["Steam","Miracle","1odfi56789"],
  // ["Facebook","amir@google.com","QpAd4321"],
  // ["Twitter","amir98","12asdaf2222"]
]

const idList = document.querySelector(".tabel-user");
function render() {
  
  // AKSES ID PASS DARI ARRAY
  for (let i = 0; i < list.length; i++) {
    
    // CREATE DIV UNTUK BOX/CARD
    const userBox = document.createElement("div");
    userBox.classList.add("card");
    userBox.classList.add("border-primary");
    userBox.classList.add("mb-3");
    userBox.setAttribute("id",`no${i}`);

    // CREATE DIV UNTUK SITUS/URL
    const situs = document.createElement("div");
    situs.classList.add("card-header");
    situs.innerText = `${list[i][0]}`;
    userBox.appendChild(situs);

    // CREATE DIV, UNTUK USERNAME & PASSWORD
    // USERNAME
    const userPW = document.createElement("div");
    userPW.classList.add("card-body");
    const user = document.createElement("p");
    user.classList.add("card-text");
    user.setAttribute('id', `user${i}`);
    user.innerHTML = `Username : ${list[i][1]}`;

    //PASSWORD
    const PW = document.createElement("input");
    PW.classList.add("card-text");
    PW.setAttribute("type","password");
    PW.setAttribute("value",`${list[i][2]}`);
    PW.innerHTML = `Password : ${list[i][2]}`;
    PW.setAttribute("id",`show${i}`);
    
    //CREATE SHOW BUTTON
    const showButton = document.createElement("button");
    showButton.innerHTML = "Show";
    showButton.classList.add("show-btn");
    showButton.setAttribute("onclick",`show(${i})`);

    //CREATE DELETE BUTTON
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.setAttribute("onclick", `hapus(${i})`);

    //CREATE EDIT BUTTON
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("edit-btn");
    editButton.setAttribute("onclick", `edit(${i})`);
    
    //APPEND DELETE USER & PASSWORD
    userPW.appendChild(user);
    userPW.appendChild(PW);
    userPW.appendChild(showButton);
    userPW.appendChild(deleteButton);
    userPW.appendChild(editButton);
    userBox.appendChild(userPW);
    
    //APPEND ID PASSWORD
    idList.appendChild(userBox);
  }
}
render()

//FUNCTION SHOW PASSWORD
function show(i) {
  let x = document.getElementById(`show${i}`);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//FUNCTION DELETE => HAPUS DIV BOX/CARD
function hapus(i){
  let x = document.getElementById(`no${i}`);
  x.remove();
}

//HAL YANG DILAKUKAN, KETIKA TOMBOL ADD DI KLIK USER
const formButton = document.querySelector(".btn");
formButton.addEventListener("click",addId);

//FUNCTION ADD DATA TO LIST => AMBIL DATA DARI FORM YG DIISI USER
function addId(event) {
  event.preventDefault();
  idList.innerHTML = '';
  list.push(
    [formInputSite.value, formInputId.value,formInputPass.value]
  );
  render();
}

//FUNCTION EDIT USERNAME
function edit(i){
  let x = document.getElementById(`user${i}`);
  let edit = prompt("apakah kamu ingin mengubah username ?" , x[i]);
  let y = "Username:";
  x.innerHTML = '';
  x.innerHTML += y;
  x.innerHTML += edit;
}