const name = prompt ("Как вас зовут?")
alert("Привет " + name + "!")
console.log(name)



const arr1 = [ 1, 2, 3, 4, 15 ]
const arr2 = [ 1, 2, 3, 4, 5, 6, 1 ]
console.log(arr1)
console.log(arr2)
if (arr1.length > arr2.length) {
    console.log("arr1 больше")
}
else if (arr1.length < arr2.length) {
    console.log("arr2 больше")
}
else  {
    console.log("Они равны")
}