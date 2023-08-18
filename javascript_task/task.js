let userData = [];

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const mail = document.getElementById("mail");
  const mobile = document.getElementById("mobile");
  const status = document.querySelector('#switch');
  const form_status = document.querySelector('#form_status');

  document.querySelectorAll(".error").forEach((item) => (item.innerText = ""));
  var errorFlag = false;

  if (name && !name.value) {
    errorFlag = true;
    document.querySelector(".error-name").innerText = "Name is required";
  }
  if (mail && !mail.value) {
    errorFlag = true;

    document.querySelector(".error-mail").innerText = "Email is required";
  }
  if (mobile && !mobile.value) {
    errorFlag = true;
    document.querySelector(".error-mobile").innerText =
      "Mobile Number is required";
  }

  if(!errorFlag){
    console.log(status.checked);
    if(form_status.value == ''){
      userData.push({name:name.value,mail:mail.value,mobile:mobile.value,status:(status.checked)?1:0})
    }else{
      userData=userData.map((item,ind) => {
        if(ind == form_status.value){
          return {name:name.value,mail:mail.value,mobile:mobile.value,status:(status.checked)?1:0}
        }else{
          return item;
        }
      })
    }
    renderItems(userData)
    document.getElementById("form").reset()
  }
});



function renderItems(data=[]) {
  const itemBody = document.querySelector('#item-list')
    itemBody.innerHTML = '';
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td>${item.mail}</td>
            <td>${item.mobile}</td>
            <td>${(item.status == 1)?'<span style="color:green">Active</span>':
            '<span style="color:red">Inactive</span>'}</td>

            <td>
                <button onclick="editItem(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal" >Edit</button>
                <button onclick="deleteItem(${index})">Delete</button>
            </td>
        `;
        itemBody.appendChild(row);
    });
}
 
function deleteItem(index) {
  userData=userData.filter((item,ind) => index!=ind)
  renderItems(userData);
}
function editItem(index) {

  const user = userData[index];

  const nameInput = document.getElementById('name');

  const emailInput = document.getElementById('mail');

  const phoneInput = document.getElementById('mobile');

  const statusInput = document.getElementById('switch');
  const form_status = document.querySelector('#form_status');



  nameInput.value = user.name;

  emailInput.value = user.mail;

  phoneInput.value = user.mobile;

  statusInput.checked = user.status;
  form_status.value=index
}


