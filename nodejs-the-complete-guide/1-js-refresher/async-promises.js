const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done');
    }, 1500);
  });
  return promise;
};

// asynchronous - does not execute right away - prints second
setTimeout(() => {
  console.log('Timer is Done');
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

// synchronous - prints first
console.log('hello');
console.log('hi');
