const myLoader = () => {
    return new Promise((resolve , reject) => {
        const success = Math.random();
        if(success <= 0.5){
            resolve(success);
        }
        else{
            reject(success);
        }
    }) ;
}
myLoader()
.then(data => console.log('resolved data : ' , data))
.catch(err => console.log("rejected with value " , err));

// Bad approach
fetch('')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));
// good approach
async function loadData(){
    const res = await fetch('');
    const data = res.json();
    console.log(data);  
}
loadData();
const taskLoader = async() => {
    const res = await fetch(' ');
    const data = res.json();
    console.log(data);
}
taskLoader();