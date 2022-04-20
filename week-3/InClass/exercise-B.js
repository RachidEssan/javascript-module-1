const ourClass = ['Ahmed', 'Maria', 'Atanas', 'Nahidul', 'Jack'];
const otherClass = ['Daniel', 'Irina', 'Rares'];

const combinedArray = ourClass.concat(otherClass)

console.log(combinedArray.sort())

function inClass(name, array) {
    if (array.includes(name)) {
        return `${name} is in the class with ${array.join(', ')}.`

    } else {
        return `${name} is not in the class with ${array.join(', ')}.`

    }
}

console.log(inClass('Daniel', otherClass))
console.log(inClass('Daniel', ourClass))
