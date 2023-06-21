// Good Luck 💪🏾
const makeCapital=(sentance)=>{
    let str = sentance.split(" ")
    for (let i=0; i<str.length; i++){
        str[i]=str[i][0].toUpperCase() + str[i].substring(1)
    }

return str.join(" ")
}

console.log(makeCapital("my name is ali")) //➞ "My Name Is Ali"
console.log(makeCapital("fikrcamp Bootcamp")) //➞ "Fikrcamp Bootamp"
console.log(makeCapital("i live In Paris")) //➞ "I Live In Paris"