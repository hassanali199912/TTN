console.log("this is notepad");

let note_value ='';

let text_area = document.getElementById('text_area');

window.onload = ()=>{

note_value = sessionStorage.getItem('note_session');

text_area.value = note_value;

}


function save_value() {
    note_value = text_area.value;

    sessionStorage.setItem('note_session',note_value);

}
