
for (let num = 100; num <= 200; num++) {
  if (num % 3 === 0 && num % 4 === 0)  {
    console.log('LoopyLighthouse');
  } else if (num % 3 === 0) {
    console.log('Loopy');
  } else if (num % 4 === 0) {
    console.log('Lighthouse');
  } else {
    console.log(num)
  }
}


// var start = 100;
// var end = 200;
// for (var i = start; i < end + 1; i++) {
//   if ((i % 3 === 0) && (i % 4 === 0)) {
//     console.log("LoopyLighthouse");
//   } else if (i % 3 === 0) {
//     console.log("Loopy");
//   } else if (i % 4 === 0){
//     console.log("Lighthouse");
//   } else {
//     console.log(i);
//   }
// }