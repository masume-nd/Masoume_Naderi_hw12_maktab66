function timeoutPromiseResolve(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("successful");
    }, interval); //setTimeout for set time to execute code.
  });
} //this function return a resolve function of promise object
function timeoutPromiseReject(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject("error");
    }, interval);
  });
} //but here reject function are returned.
//it's called when we have an problem such as 'network conections, down server ...'

function timeTest() {
  //this function is a regular function and not a async function
  timeoutPromiseResolve(5000);
  timeoutPromiseReject(2000); 
  timeoutPromiseResolve(3000); 
}
/************** soloution ***************/

// async function timeTest() {
//   await  timeoutPromiseResolve(5000);
//   await  timeoutPromiseReject(2000);
//   await  timeoutPromiseResolve(3000);
// }

let startTime = Date.now();
timeTest() //and here we can't call (then & catch) methods on a regular function
  // for this reason we have an error
  .then(() => {})
  .catch((e) => {
    console.log(e);
    let finishTime = Date.now();
    let timeTaken = finishTime - startTime;
    alert("Time taken in milliseconds: " + timeTaken);
  });
