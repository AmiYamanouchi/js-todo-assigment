let input = prompt('What would you like to do?');

//optional to add dummy data inside todos
const todo = ['Collect Chicken Eggs','Clean Litter Box'];

//start with a while loop that checks for quit input
while(input !== 'quit' ){

    //if else conditions
    if(input.toLowerCase() === "new"){
        const addList = prompt('what do you want to add');
        todo.push(addList);
        
    } else if(input.toLowerCase() === "list"){
        console.log(todo)
    } else if(input.toLowerCase() === "delete"){
        todo.forEach((item, index) => {
            console.log(`${index+1}: ${item}`)
        })
        const deleteWord = parseInt(prompt('which one do you want to delete?'))
        todo.splice(deleteWord-1,1);
        
    } else if(input.toLowerCase() === "quit"){
        break;
    } else{
        console.log('try again')
    }
    
    input = prompt('what would you like to do, Ayumi?')
}

console.log('OK QUIT THE APP');