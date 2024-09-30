const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
 }


const handleObject = (obj, key, action) => {
    if (action === 'get') {

     return obj[key]

    } else if (action === 'add') {
     const newObject = {...obj}
     newObject[key] = ""

     return newObject

    } else if (action === 'delete') {
     const object = {...obj}
     delete object[key]

     return object

    } else {
     return obj
    }
}
const result = handleObject(student, 'name', '\aaa');
console.log('result', result);
