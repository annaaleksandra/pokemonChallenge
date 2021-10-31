let request = new XMLHttpRequest();
request.open(
  "GET",
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
);
request.send();
request.onload = () => {
  if (request.status == 200) {
    var data = JSON.parse(request.response);
    //console.log(data.pokemon[0]);

    for (let i = 0; i < data.pokemon.length; i++) {
      // Create an object that holds all values for each pokemon
      let poke = {};

      // Get the values from JSON file
      let name = data.pokemon[i]["name"];
      let number = data.pokemon[i]["num"];
      let type = data.pokemon[i]["type"];
      let height = data.pokemon[i]["height"];
      let weight = data.pokemon[i]["weight"];
      let weakness = data.pokemon[i]["weaknesses"];
      let nextEvolution = data.pokemon[i]["next_evolution"];

      // Assing the values to the object
      poke.name = name;
      poke.num = number;
      poke.type = type;
      poke.height = height;
      poke.weight = weight;
      poke.weakness = weakness;
      poke.nextEvolution = nextEvolution;

      // Get the pre-created div from HTML file
      const newPoke = document.getElementById("pokemon");

      // Create the elements for a div
      const pokeName = document.createElement("h2");
      pokeName.innerHTML = name;
      const pokeNum = document.createElement("p");
      pokeNum.innerHTML = number;
      const pokeType = document.createElement("p");
      pokeType.innerHTML = "Type: " + type;
      const pokeWeakness = document.createElement("p");
      pokeWeakness.innerHTML = "Weaknesses: " + weakness;

      // Add the differents elements to the div
      newPoke.appendChild(pokeName);
      newPoke.appendChild(pokeNum);
      newPoke.appendChild(pokeType);
      newPoke.appendChild(pokeWeakness);
    }
  }
};
// tunti mennyt 12:11
