import Observer from "./observer.js";
import Watcher from "./watcher.js";


let testA = {a:'1',b:'2'}
new Watcher(testA,'a',(oldVal,newVal)=>{
    console.log(oldVal,newVal);
})

new Observer(testA)

// console.log(testA.a);

testA.a='a'
// console.log(testA.a);

testA.a='b'
testA.a='c'