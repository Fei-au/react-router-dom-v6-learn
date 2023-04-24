async function fakeNetwork() {

    return new Promise(res => {
      setTimeout(res, Math.random() * 800);
    });
  
    // return new Promise((resolve, reject)=>{
    //     console.log(resolve);
    //     console.log(reject);
    // })
  }

//   function test (resolve, reject){
//     console.log('resolve', resolve);
//     console.log('reject', reject);
//   }

//   test(5);
//   test(5,6);
fakeNetwork()
.then(res => {
    console.log('here');
})
// .catch(res=>{
//     console.log('res catch', res);
// })


