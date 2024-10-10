const race = async (arg) => {
  if (!Array.isArray(arg)) {
    throw new Error("передайте массив промисов");
  }
  return new Promise((resolve, reject) => {
    arg.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject).catch(reject);
    });
  });
};

const all = (arg) => {
  if (!Array.isArray(arg)) {
    throw new Error("передайте массив промисов");
  }
  const store = [];
  let promisesCompleted = 0;
  return new Promise((resolve, reject) => {
    arg.forEach((promise, idx) => {
      promise
        .then((val) => {
          store[idx] = val;
          promisesCompleted += 1;
          if (promisesCompleted === arg.length) {
            resolve(store);
          }
        })
        .catch(reject);
    });
  });
};

const allSettled = (arg) => {
  if (!Array.isArray(arg)) {
    throw new Error("передайте массив промисов");
  }
 
  const mappedPromises = arg.map((p) => {
      return Promise.resolve(p)
      .then(val => ({status: 'fulfilled', value: val}))
      .catch(err => ({status: 'rejected', reason: err}))
    })
    return Promise.all(mappedPromises);
};

const getRole = async (id) => {
  try {
    const res = await fetch("https://dummyjson.com/products/" + id);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getRoleError = async (id) => {
  const res = await fetch("https://dummyjsons.com/products/" + id);
  return res.json();
};

// race([getRole(1), getRoleError(4), getRole(3)])
// all([getRole(1), getRoleError(4), getRole(3)]).then(console.log);
// allSettled([getRole(1), getRoleError(4), getRole(3)]).then(console.log);
