// создаем массив фруктов, где 0 это яблоко , а 1 это груша
const fruits = [0,1,0,0,1,0,1,0,2,2]
// считаю длину массива
const lengthFruits = fruits.length 
// смотрю в консоли результат
console.log(lengthFruits)
// фильтрую яблоки от груш

const apple = fruits.filter (a => a===1).length
const grushi = fruits.filter(g => g===0).length
const orange = fruits.filter(o => o===2).length
console.log('кол-во яблок - '+ apple + ", кол-во груш -  " + grushi + " , кол-во апельсинов -  " + orange) 

