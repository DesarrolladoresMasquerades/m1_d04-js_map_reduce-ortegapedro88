// Class code examples
const names =  ["Marco", "Carlos", "Carol"]

const capitalise = (string)=>{
    return string.toUpperCase()
}

const allCaps = names.map(capitalise) //  ["Marco", "Carlos", "Carol"].map()

console.log(
    names,
    allCaps
)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const doouble = numbers.map((element)=>{return element * 2})
console.log(doouble)

const students = [
    {name: 'Rafa', color: 'Blue', age: 12},
    {name: 'Elise', color: 'Pink', age: 21},
    {name: 'Bodei', color: 'Yellow', age: 31},
    {name: 'Jorge', color: 'Red', age: 11}
    ]

const greetings = students.map((alumno)=> {
    return `Hello ${alumno.name}, ypu are ${alumno.age} years old and fav col ${alumno.color}`
})

//console.log(greetings)

//greetings.forEach(console.log)
// greetings.forEach( (el)=>console.log(el) )

console.log(numbers
    .map( (arr)=>{return arr * 2} )
    .filter ( (capuccino)=>{ return 13<capuccino && capuccino < 25})
    .sort( (a,b)=>{return a - b}))

