
function mytask(){


    var todo=document.getElementById("taskname").value
    var mylist=document.getElementById("mytodo")

    var divv=document.createElement('div')

    var todoname=document.createElement('li')
    todoname.innerHTML=todo;
    var deleteicon=document.createElement('i')
    deleteicon.classList.add('far')
    deleteicon.classList.add('fa-trash-alt')

    divv.appendChild(todoname)
    divv.appendChild(deleteicon)

    mylist.appendChild(divv)
}
 var todo=document.getElementById("mytodo")
 todo.addEventListener('click',deleteitem)

 function deleteitem(e){
      var task=e.target;
      if(task.classList[0]=='far')
       {
          task.parentElement.remove()
       }
 }