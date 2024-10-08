function jsonParse(response) {
  try {
    return JSON.parse(response);
  } catch (e) {
    console.error(e);
  }
}

function getPokemon() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
  xhr.send();

  xhr.addEventListener("load", function () {
    const json = jsonParse(this.responseText);
    const { abilities } = json;
    const { ability } = abilities[0];
    getEffect(ability.url);
  });
}

function getEffect(url) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.send();

  xhr.addEventListener("load", function () {
    const { effect_entries } = jsonParse(this.responseText);
    const { effect } = effect_entries.find(
      ({ language }) => language.name === "en"
    );
    console.log(effect);
  });
}

// getPokemon();
