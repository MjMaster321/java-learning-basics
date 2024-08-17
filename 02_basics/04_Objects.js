const tinderUser = {}
 
tinderUser.id = "123abc", 
tinderUser.name = "Mayank"
tinderUser.isLoggedIn = false

console.log(tinderUser); // { id: '123abc', name: 'Mayank', isLoggedIn: false }


const regularUser = {
    email: "mayank@gmail.com",
    fullName: {
        userFullName: {
            firstName: "mayank", 
            lastName: "Jain"
        }
    }
}
console.log(regularUser.lastName); // will show undefined 
console.log(regularUser.fullName.userFullName.lastName); // jain


const Obj1 = {1: "a", 2: "b"}
const Obj2 = {3: "a", 4:"b"}

const Obj = Object.assign(Obj1, Obj2); 
console.log(Obj);           //     { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj = {...Obj1, ...Obj2}
console.log(Obj);           // will give the same result as above 
                            // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


console.log(Object.keys(tinderUser)); //    [ 'id', 'name', 'isLoggedIn' ]  ---- **** ---- IMPORTANT
console.log(Object.values(tinderUser)); //   [ '123abc', 'Mayank', false ]

