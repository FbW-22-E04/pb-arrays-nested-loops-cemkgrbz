//1

for(let i = 1; i<=4; i++){
    let star = ""
    for(let y = 1; y<=i; y++){
        star += "* "
    }
    console.log(star)
}



//2

const ARR = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(let i = 0; i < ARR.length; i++){
    console.log(`Row ${i}`)
    for(let j = 0; j<ARR[i].length; j++){
        console.log(`${ARR[i][j]}`)
    }
}

// for of and for in 
console.log("----------------")

for (let i in ARR) {
    console.log(`Row ${i}`)
    for(let j = 0; j<ARR[i].length; j++){
        console.log(`${ARR[i][j]}`)
    }
}
console.log("----------------")
for (let i in ARR) {
    console.log(`Row ${i}`)
    for(let j of ARR[i]){
        console.log(`${j}`)
    }
}

console.log("----------------")

//3

let array3 = [];
for(let i = 1; i<=4; i++) {
    for(let y = 1; y<=3; y++)  {
        array3.push(i)
    }
}
console.log(array3.join(" "));//1 1 1 2 2 2 3 3 3 4 4 4
console.log("----------------")

//3b

let array3a = [];
for(let i = 1; i<=3; i++) {
    for(let y = 0; y<=4; y++)  {
        array3a.push(y)
    }
}
console.log(array3a.join(" "));
console.log("----------------")

//bonus

let arr1 = []
let arr2 = []

for(let i = 1; i<=4; i++) {
    if(i>0){
        for(let y = 1; y<=3; y++)  {
            arr1.push(i)
        }
    } if(i<4)
    for(let j = 0; j<=4; j++)  {
        arr2.push(j)
    }
} 

console.log(arr1.join(" "));
console.log(arr2.join(" "));
