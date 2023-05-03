async function fakeNetwork(a) {

  console.log(arguments[0])
  console.log(arguments.length)
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });



  // return new Promise((resolve, reject)=>{
  //     console.log(resolve);
  //     console.log(reject);
  // })
}

// const func =  (a)=>{
//   console.log('a', a);
//   console.log(arguments[0]);
//   return new Promise((res)=>{

//   })
// }


// func(44);

//   function test (resolve, reject){
//     console.log('resolve', resolve);
//     console.log('reject', reject);
//   }

//   test(5);
//   test(5,6);
// fakeNetwork()
// .then(res => {
//     console.log('here');
// })
// .catch(res=>{
//     console.log('res catch', res);
// })


// let a = [4,5,66]
// a.name = 'haha'
// for (let key in a) {
// console.log(typeof key);
// }


  
// var a = ['A', 'B', 'C'];
// a.forEach(function (element, index, array) {
//     // element: 指向当前元素的值
//     // index: 指向当前索引
//     // array: 指向Array对象本身
//     console.log(element + ', index = ' + index);
//     console.log(array);
// });


// const a = 55;
// console.log(window.a);

window.onload = ()=>{
  window.name = 'window';
  var B = {
    name: 'B'
  }
  
  var A = {
    name: 'A',
    sayHello: function(){
       var s = () => console.log(this.name) // 作用域时sayHello，指向的对象为A，所以调用该方程永远返回 'A'
       return s//返回箭头函数s
    }
 }

  console.log('jaa')
  
  A.sayHello()(); // A
  A.sayHello().call(B); // A
  var h = A.sayHello(); 
  h(); // A
}

