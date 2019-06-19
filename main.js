let modal = document.getElementById('simpleModal');
let modalBtn = document.getElementById('modalBtn');
let closeBtn = document.getElementsByClassName('closeBtn')[0];
let modalCancel = document.getElementById('modalCancel');


modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', clickOutside);

modalCancel.addEventListener('click', closeModal);


function openModal(){
    modal.style.display = 'block';
    modalCancel.focus();
}

 function closeModal (){
    modal.style.display = 'none';
}

function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}