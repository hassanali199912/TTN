console.log("to do Script");


let sesstion_array = [];
let taskes_field = document.querySelector('.taskes-field')
let add_task_textfild =document.getElementById('add_task_textfild');
let button_addon2 = document.getElementById('button-addon2');


// sessionStorage.setItem("to_do_list",JSON.stringify(arr));
// let sesstion_array = JSON.parse(sessionStorage.getItem('to_do_list'));

window.onload = function () {
 sesstion_array = JSON.parse(sessionStorage.getItem('to_do_list'));
  console.log(sesstion_array);
  if (sesstion_array.length !=0) {
  
    sesstion_array.forEach(element => {
      taskes_field.innerHTML += `
      <div class="col-10 m-auto ">
      <div class="input-group mb-3">
        <div class="input-group-text">
          <input class="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input"  onchange = 'toggle_checked(this)'>
        </div>
        <textarea class="form-control" disabled>${element}</textarea>
        <button class="btn" onclick='delet_task(this)'><img src="../img/trash2.gif" ></button>
      </div>
    </div>
    `;
    });
  }

}

function  add_to_session(value) {
 
    sesstion_array.push(value);
    console.log("added ",sesstion_array);
  sessionStorage.setItem("to_do_list",JSON.stringify(sesstion_array));
}

function delete_from_sesstion(value) {
  
for (let index = 0; index < sesstion_array.length; index++) {
  if (sesstion_array[index] == value) {
    sesstion_array.splice(index,1);
    break;
  }
}
console.log('delete',sesstion_array);
sessionStorage.setItem("to_do_list",JSON.stringify(sesstion_array));
}
function compare(text1,text2) {
 
  if (text1 == text2) {
    return 0;
  }
  return 1;
}
button_addon2.addEventListener('click',()=>{
    if (add_task_textfild.value.length == 0 ) {
        alert('Cannot Add Empty Task, Pleace Add One');
     }else{
         add_task(add_task_textfild.value);
     }
     add_task_textfild.value = ""
});

add_task_textfild.addEventListener('keypress',(event)=>{

    if (event.key == "Enter") {
        add_and_valdate_task();
    }
});

function add_and_valdate_task() {
    if (add_task_textfild.value.length == 0 ) {
        alert('Cannot Add Empty Task, Pleace Add One');
     }else{
         add_task(add_task_textfild.value);
     }
     add_task_textfild.value = ""
}

function add_task(task) {
  add_to_session(task);
    taskes_field.innerHTML += `
    <div class="col-10 m-auto ">
    <div class="input-group mb-3">

      <div class="input-group-text">
        <input class="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input"  onchange = 'toggle_checked(this)'>
      </div>
      <textarea class="form-control" disabled>${task}</textarea>
      <button class="btn" onclick='delet_task(this)'><img src="../img/trash2.gif" ></button>
    </div>
  </div>
  `;

}

function delet_task(e) {
  delete_from_sesstion(e.previousElementSibling.value);
     e.parentElement.parentElement.style.opacity = '0';
    e.parentElement.parentElement.style.animation = '0.5s ease  delet';
    setInterval(() => {
        e.parentElement.parentElement.remove();
    }, 500);
}

function toggle_checked(e){
    if (e.checked) {
        e.parentElement.parentElement.parentElement.classList.toggle("checked");

      } else {
        e.parentElement.parentElement.parentElement.classList.toggle("checked");

      }


}
