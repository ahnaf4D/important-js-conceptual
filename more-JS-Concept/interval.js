console.log(1);
console.log(2);
// setTimeout(() => {
//     console.log(3);
// })
// setTimeout(() => {
//     console.log('Lazy coder');
// }, 4000);
// setTimeout(())
console.log(4);
console.log(5);
console.log(6);

let num = 0;
const clockId  =  setInterval( ()=>{
    num++;
    console.log(num,clockId);
    if(num === 200){
        clearInterval(clockId);
    }
})