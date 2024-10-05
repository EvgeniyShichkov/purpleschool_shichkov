const race = async () => {
    try {
    const res = await Promise.race([
      getRole(1),
      getRoleError(4)
    ]);
    return res
    } catch (error) {
        console.error(error)
    }
};

const getRole = async (id) => {
  try {
    const res = await fetch('https://dummyjson.com/products/' + id);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getRoleError = async (id) => {
    const res = await fetch('https://dummyjsons.com/products/' + id);
    return res.json()
};

// race()
