const getFetch = (url, err) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(
        `Ошибка ${response.status} : ${err}`
      );
    }
    return response.json();
  }).catch((error) => Promise.reject(error))
};

const getPokemonList = () => {
  return getFetch('https://pokeapi.co/api/v2/pokemon/ditto', 'попробуйте перезагрузить страницу')
    .then(({ abilities }) => abilities[0])
    .then(({ ability }) => {
      return getFetch(ability.url, 'Ошибка получения покемона')
        .then(console.log);
    });
};

// getPokemonList()
