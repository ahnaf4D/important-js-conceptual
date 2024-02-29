function a(){
    console.log('a');
    b();
    console.log('aa');
}
function b(){
    console.log('b');
    d();
    console.log('bb');
}
function d(){
    console.log('d');
    console.log('dd');
}
// Another Example
function x(){
    console.log('x');
    y();
    console.log('xx');
}
function y(){
    console.log('y');
    z();
    console.log('yy');
}
function z(){
    console.log('z');
    console.log('zz');
}

setTimeout(()=>{
    console.log('Time is money');
},2000);


fetch(`https://mocki.io/v1/a36947f0-ef77-4243-afc6-8fa2361c513a`)
.then(res => res.json())
.then(data => console.log(data));
a();
x();
