let todoItemsContainer = document.getElementById('todoItemsContainer');


// let todoList =[
//     {
//         text:"Learn Css",
//         unq:1
// },
// {
//         text:"Learn JavaScript",
//         unq:2
// },
// {
//         text:"Learn Bootstrap",
//         unq:3
// }
// ];
// if you want to comment above means then for todolist is to declared okay !
// AA Solved 

        // localStorage.setItem("todoMan",JSON.stringify(todoList))

        let btnAdd = document.getElementById('addless');
        btnAdd.onclick=function(){
            localStorage.setItem("todoListDetails",JSON.stringify(todoList));
        }

        function onCall(){
            let stringifiedtodoListFromLocalstorage = localStorage.getItem("todoListDetails");
            let parsetodoList = JSON.parse(stringifiedtodoListFromLocalstorage);
            if(parsetodoList === null){
                return [];
            }
            else{
            //    let todoList1 = parsetodoList;
            return parsetodoList;
            }
        }
       let todoList = onCall();
        // if you want to keep todoList array then just remove let for the todolist it will works

        let todoCount = todoList.length;

        function checked(checkboxId,labelId,todoId){
            let check = document.getElementById(checkboxId);
            let lab = document.getElementById(labelId);
            if(check.checked === true){
                lab.classList.add("strike");
            }
            else{
                lab.classList.remove("strike");
            }

            // lab.classList.toggle("strike") 
            // you can use toggle also !

            let objectIndex = todoList.findIndex(function(eachItem){
                let todoObject = "todo"+eachItem.unq;
                if(todoObject === todoId){
                    return true;
                }
                else{
                    return false;
                }

               
            });
            let todoss = todoList[objectIndex];
            onEdit(todoss);
            if(todoss.isChecked===false){
                todoss.isChecked=true;
                console.log(todoss.isChecked)
                console.log("checked")
                lab.classList.add("strike")
            }
            else{
                todoss.isChecked=false;
                console.log(todoss.isChecked)
                console.log("not checked")
                lab.classList.remove("strike")
            }
            // if(todoss.isChecked===false){
            //     todoss.isChecked=true;
            //     console.log(todoss.isChecked)
            // }
            // else{
            //     todoss.isChecked=false;
            //     console.log(todoss.isChecked)
            // AA solved
            // its also worksss 
            // }
        }
        function onEdit(todoss){
            console.log()
            // console.log(todoss)
            let man = {}
            man = todoss

            console.log(man.text)
            console.log(man.unq)
            
            // if(editMan.isChecked===true){
            //     console.log("true click button")
            // }
        }
        function AppendAndTod(todo){
        let checkboxId = "checkbox"+todo.unq;
        let labelId = "label"+todo.unq;
        let todoId = "todo"+todo.unq;

        let todoE1 = document.createElement('div');
        todoE1.classList.add("todoE1");
        todoE1.id=todoId;

        let checkbox = document.createElement('input');
        checkbox.type="checkbox";
        checkbox.id=checkboxId;
        checkbox.checked=todo.isChecked;
        checkbox.classList.add("checkbox");
       
        // checkbox.onclick=function(){
        //     let a = document.getElementById(checkboxId);
        //     let b = document.getElementById(labelId);
        //     b.classList.toggle("strike");   
        // AA this also works !
        // }

        checkbox.onclick=function(){
            checked(checkboxId,labelId,todoId);
        }

        let labelContainer = document.createElement('div');
        labelContainer.classList.add("label-container");
        labelContainer.id=labelId;

        let labelElement = document.createElement('label');
        labelElement.classList.add("labelless");
        labelElement.setAttribute("for",checkboxId);
        labelElement.textContent=todo.text;
        if(todo.isChecked===true){
            labelElement.classList.add("strike")
            console.log("strike")
        }
        else if(todo.isChecked===false){
            labelElement.classList.remove("strike")
            console.log("strike Remove")

        }
       
        labelContainer.append(labelElement);

        let deleteContainer = document.createElement('div');
        deleteContainer.classList.add("delete");

        {/* <i class="fa-regular fa-trash-can"></i> */}

        let deleteicon =document.createElement('i');
        deleteicon.classList.add("fa-regular","fa-trash-can","checkbox");
        // deleteicon.onclick=function(){
        //     todoItemsContainer.removeChild(todoE1)
        // AA short code 
        // here removeChid is used to remove one by one like the section green color container removed 
        // if you take remove it delete all container eleements 
        // }

        function deleteTodo(todoId){
            let todoE1 = document.getElementById(todoId);
            todoItemsContainer.removeChild(todoE1);
            let deleteIndex = todoList.findIndex(function(eachTodo){
                let deleteIndexItem = "todo"+eachTodo.unq;
                if(deleteIndexItem === todoId){
                    console.log(deleteIndexItem)

                    return true;
                }
                else{
            // console.log(deleteIndexItem) // by matching the ids delete perform the reason is staring we see th id of todo1 like checkbox1 id's so for todoList ther is no id so thats why 
            // we are taking function for deleteIndex to find index if that 
            // index means its id is in deleteIndexItem it refers to the html past we done
            // like todoElement = "todo"+todo.unq
            // similarly here we are going to delete = "todo"+eachTodo.unq;
            // for the todolist it iterates through the objects
            // then if both id matches the return true so the function .splice performs otherwise none

                    return false;
                }

            });
            console.log(todoId)
            // console.log(deleteIndex)
            todoList.splice(deleteIndex,1);
        }
     

        deleteicon.onclick=function(){
            deleteTodo(todoId);
        }
        deleteContainer.appendChild(deleteicon);
        labelContainer.appendChild(deleteContainer)

        todoE1.append(checkbox,labelContainer);
        todoItemsContainer.appendChild(todoE1);
        }

        for(todo of todoList){
            AppendAndTod(todo);
        // why?? // solved
        }
        // for(todo in todoList){
        //     AppendAndTod(todoList[todo]);
            // solved
        // }

        
    //     var Add = document.getElementById('add');
    //     Add.onclick=function(){
    //     var userInput = document.getElementById('userInput');
    //     var userValue = userInput.value;
    //     var text = document.getElementById('text');
    //         if(userValue===""){
    //             text.textContent="This field is required"
    //         }
            
    //          todoCount = todoCount+1;
        
    //         let newTodo ={
    //             text:userValue,
    //             unq:todoCount
    //     }
    //     userInput.value="";
    //     AppendAndTod(newTodo);
    // AA Done in short [Risk]
    // }


        function onAddTodo(){
            let userInput = document.getElementById('userInput');
            let userValue = userInput.value;
            let text = document.getElementById('textless');
                if(userValue===""){
                    text.textContent="This field is required"
                }
                else{
                text.textContent="";    
                todoCount = todoCount+1;
            
                let newTodo ={
                    text:userValue,
                    unq:todoCount,
                    isChecked:false
            }
            
          
            todoList.push(newTodo)
            userInput.value="";
            AppendAndTod(newTodo);
        }
        
        //  Here it's out of the loop so not executed !Cause an error but it visual okay not stored in 

        }
        userInput.addEventListener("keydown",function(event){
            if(event.key==="Enter"){
                onAddTodo()
                console.log("hi")
            }
        })

    var Add = document.getElementById('add');
            Add.onclick=function(){
            onAddTodo();
            }
     