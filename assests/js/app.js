function addPlan() {

    var entry = document.getElementById('entry').value;

if(entry.length == 0){
    alert('Basim Nese Qoy Dana Ora');
}
else{
    var div = document.createElement('div');
    div.setAttribute('class' , 'd-flex justify-content-between align-items-center mt-3 p-3 bg-dark rounded-3 text-light')
    var h2 = document.createElement('h2');
    var icon = document.createElement('i');
    icon.setAttribute('class','fa-solid fa-minus remove bg-danger rounded p-1')

    h2.innerHTML = entry;


   div.appendChild(h2);
   div.appendChild(icon);
 
   document.getElementById('bottom').appendChild(div);

    var remover = document.querySelectorAll('.remove')
    for(var i=0 ; i<remover.length ; i++){
        remover[i].onclick = function (){
            this.parentElement.remove()
        } 
    }

}
}