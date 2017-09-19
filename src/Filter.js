const myArray = ['two-one', 'two-two', 'two-three', 'two-four', 'two-five'];

export default {

  const random1 = myArray[Math.floor(Math.random() * myArray.length)];
console.log(random1);

let parsedArray = myArray.filter(
  function (dec) {
    return dec !== random1;
  })
;
console.log(parsedArray);

const random2 = parsedArray[Math.floor(Math.random() * parsedArray.length)];
console.log(random2);
}
