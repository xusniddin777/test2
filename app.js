let wrapper = document.querySelector(".wrapper")
async function getUsers() {
let fetchUsers = await fetch("https://crmpanel-yle6.onrender.com/groups")
let data = await fetchUsers.json()
console.log("data",data);

let html = ""

data.data.forEach ((item)=>{
    html+=`
    <div class="card">
    <h2>${item.group_name}</h2>
    <h4>${item.group_time}</h4>
      </div>
    `
});
wrapper.innerHTML = html

}
getUsers()