let a = 100                                 // global 
if(true){
    let a = 10                              // block scope which are outside "if"
    const b = 20
    console.log("INNER: ", a)
}

console.log(a);                 //     INNER: 10
                                //     100

function one (){
    const username = "Mayank"

    function two(){
        const website = "Youtube"
        console.log(username);                 // it is valid as child can access varibales of parent 
    }
    //console.log(website);                // it will show error because function "one" cant access variable of function "two"

     two()                           // Mayank
}   

one()                                        