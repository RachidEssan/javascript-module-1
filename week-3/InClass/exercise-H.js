const names = ['Daniel', 'James', 'Irina', 'Mozafar', 'Ashleigh']

const NAME_TO_FIND = 'Matthew'

function findName(names) {
    if (names.includes(NAME_TO_FIND)) {
        return 'FOUND ME'
    }
    return "Haven't found me :("

}


console.log(findName(names))