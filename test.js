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

const func =  (a)=>{
  console.log('a', a);
  console.log(arguments[0]);
  return new Promise((res)=>{

  })
}


func(44);

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


