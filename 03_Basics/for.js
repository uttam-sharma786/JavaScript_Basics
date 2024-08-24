// for of

// ["","",""]
// [{},{},{}]



const arr = [2,3,4,5]

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "Hello Dear!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
    
    
}

//Maps



const map = new Map()
map.set('IN',"India")
map.set('IN',"India")
map.set('USA',"United states of America")


//console.log(map);

for (const [key,value] of map) {
    //console.log(key,':-',value);
    
}
// for in apply on Map
for (const key in map) {
   //console.log(key);
   
}

// this in not working

// const myObjects = {
//     'game1':'NFS',
//     'game2':'SPiderman'
// }

// for (const [key,value] of myObjects) {
//     console.log(key, value);
    
// }
