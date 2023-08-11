const inputEl = document.querySelector("#input");
const buttonEl = document.querySelector("#delete");
const outputEl = document.querySelector("#list-container");
const form = document.querySelector("form");
const alertForm = document.getElementById("alert")


const removeTitle = id =>{
  let users

  if(localStorage.getItem("users") === null){
    users = []
  }else{
    users = JSON.parse(localStorage.getItem("users", users))
  }

  users = users.filter( user =>{
    return user.id !== +id
  })

  localStorage.setItem("users", JSON.stringify(users))

  showTitle()
}


const showTitle = () =>{
  let users
  if(localStorage.getItem("users") === null){
    users = []
  }else{
    users = JSON.parse(localStorage.getItem("users"))
  }

  let output
  const allTitle = users.map(user=>{
    return `
    <li id="item">
    <span>${user.title}</span>
    <button onclick="removeTitle(${user.id})" id="delete">X</button>
  </li>
    `
  })

  output = allTitle.join("")
  outputEl.innerHTML = output
}
showTitle()


const addTask = form.addEventListener('submit', (e)=>{
  e.preventDefault()
  if(inputEl.value === ""){
    alertForm.style.display = "block"
  }
  // get Item
  const value = inputEl.value
  if(value){
    let users;
    if(localStorage.getItem("users") === null){
      users = []
    }else{
      users = JSON.parse(localStorage.getItem("users"))
    }

    users.push({
      id:Date.now(),
      title:value
    })

    localStorage.setItem("users", JSON.stringify(users))
  }
  showTitle()

})

