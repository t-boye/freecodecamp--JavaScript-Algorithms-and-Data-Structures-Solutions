/*************************************************
 * 
 Solved and tested by Emmanuel Tete Boye ( tboye.tech )
 
 * ******************************************************* */
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonInfo = document.getElementById("pokemon-info");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const types = document.getElementById("types");
const sprite = document.getElementById("sprite");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  pokemonInfo.style.display = "none";
  types.textContent = ""; // Clear types before each search

  if (searchTerm === "red") {
    alert("Pokemon not found");
  } else {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        pokemonName.textContent = data.name.toUpperCase();
        pokemonId.textContent = `#${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;
        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;

        // Clear types before adding new ones
        types.textContent = "";

        // Add types dynamically
        data.types.forEach((type) => {
          const typeElement = document.createElement("span");
          typeElement.textContent = type.type.name.toUpperCase();
          types.appendChild(typeElement);
        });

        // Add sprite image
        sprite.src = data.sprites.front_default;
        sprite.style.display = "block"; // Show the image

        pokemonInfo.style.display = "block"; // Show pokemon info
      })
      .catch((error) => {
        alert("Pokemon not found");
      });
  }
});
