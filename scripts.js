//-------   GET VALUES -------
var btn = document.getElementById('submit');
btn.addEventListener('click', func);

function func() {
  console.log(document.getElementById("input-name").value)
  console.log(document.getElementById("input-email").value)
}


//-------   CLOSE BUTTON -------
const Modal = {
    close(){
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')
    }
}

//-------   SHOW POP-UP -------
setTimeout(function(){ 
  document.querySelector('.modal-overlay')
  .classList
  .add('active') 
}, 3000);
