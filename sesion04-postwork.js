/*DEEP EQUAL:
Crear una función que reciba dos agumentos y retorne true si son 
el mismo valor o si son objetos con las mismas propiedades.
En caso de ser objetos, los valores de las propiedades deben ser 
comparados con una llamada recursiva de deepEqual*/

// const deepEqual = function deepEq(a, b){
//     if((typeof(a) === typeof(b)) && (typeof(a)==='object')){
//        // deepEq(Object.values(a), Object.values(b))
//        console.log('quiubas')
//     }

//     else if(a === b){
//         return true
//     }
//     else{
//         return false
//     }
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Doe'
// }
// console.log((Object.values(john)))
// console.log('Test 1:', deepEqual(1, 1)) // true
// console.log('Test 2:', deepEqual(1, '1')) // false
// console.log('Test 3:', deepEqual(john, john)) // true
// console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
// console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false

// console.log(typeof(john))


/*FUNCIÓN CHUNK 
Escribir un función que reciba un arreglo y un número entero sizr.
Debe dividir el arreglo en múltiples arreglos del tamaño determinado por size.
*/

const chunk = function ch(array, size){
    const chunks = []
    let numberOfChunks = array.length/size
    let index = 0;
    for(let i = 0; i < numberOfChunks; i++){
        chunks.push([])
    }

    for(let j = 0; j < numberOfChunks; j++){
        for (let k = 0; k < size; k++) {
            if(index < array.length){
                chunks[j].push(array[index])    
                index++
            }
        }
    }
    return chunks   
}

const data = [1, 2, 3, 4, 5, 6, 7, 8]
const data2 = [[1, 2, 3], [4, 5, 6], [7, 8]]

console.log(data2[0])

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]