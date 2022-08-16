/*** What wil be the Output ***/
for (let i = 0; i < 3; i++) {
 const log = () => {
  console.log(i)
 }
 setTimeout(log, 100)
}


/*** What will be the output ****/
function abc() {
 if (1) {
  var a = 5;
  let b = 10;
  const c = 15;
 }
 console.log(a)
 console.log(b)
 console.log(c)
}

abc()
