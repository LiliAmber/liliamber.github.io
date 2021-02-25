let list = [
    ["Steam","Miracle","123456789"],
    ["Facebook","amir@google.com","987654321"],
    ["Twitter","amir98","122222"]
  ]

  const idList = document.querySelector(".tabel-user");
  function render() {
    // ambil id pass dari array
    for (let i = 0; i < list.length; i++) {
      // create div buat box
      const userBox = document.createElement("div");
      userBox.classList.add("card");
      userBox.classList.add("border-primary");
      userBox.classList.add("mb-3");
      
    
      // create div buat situs
      const situs = document.createElement("div");
      situs.classList.add("card-header");
      situs.innerText = `${list[i][0]}`;
      userBox.appendChild(situs);
      // create div dan isinya buat user dan pw
      const userPW = document.createElement("div");
      userPW.classList.add("card-body");
      const user = document.createElement("p");
      user.classList.add("card-text")
      user.innerHTML = `Username : ${list[i][1]}`
      const PW = document.createElement("input");
      PW.classList.add("card-text")
      PW.setAttribute("type","password")
      PW.setAttribute("value",`${list[i][2]}`)
      PW.innerHTML = `Password : ${list[i][2]}`
      //buat tombol show dan delete
      const showButton = document.createElement("button");
      showButton.innerHTML = "Show";
      showButton.classList.add("show-btn");
      showButton.setAttribute("type", "submit")
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.classList.add("delete-btn");
      deleteButton.setAttribute("type", "submit")

      


      //append delete user dan pw
      userPW.appendChild(user)
      userPW.appendChild(PW)
      userPW.appendChild(showButton)
      userPW.appendChild(deleteButton);
      userBox.appendChild(userPW)
      // append id pw 
      idList.appendChild(userBox);

    //   situs.innerText = `${list[i][0]} -- ${list[i][1]}`;
    //   situs.classList.add("todo-item");
    
    //   // create completed button
    //   // append to todoList
    }
  }
  render()