
// la faut fetch 


// Execute la requete vers l'api et retourne la réponse
function appelleAPI(url) {

    return fetch(url)

        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            return response.json();
        })
        .catch(error => {
            //console.error('Erreur :', error);
            throw error;
        });

};

function toutAfficher(){
    let url = "http://127.0.0.1:5001/";
    appelleAPI(url)
    .then(pokemons => {

        // On sélectionne l'endroit ou on va mettre les données
        const tableBody = document.getElementById('pokemonTable');

        // On parcourt le tableau , création de nouvelle ligne pour chaque user
        pokemons.forEach(pokemon => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = pokemon.id;
            row.insertCell(1).textContent = pokemon.name.french;
            row.insertCell(2).textContent = pokemon.name.japanese;
            row.insertCell(3).textContent = pokemon.base.Attack;
            row.insertCell(4).textContent = pokemon.base.Defense;
            row.insertCell(4).textContent = pokemon.type;

            const thumbnailCell = row.insertCell(5);

            const img = document.createElement('img');

            let idPokemonWithZeros = String(pokemon.id).padStart(3, '0');   // Cette ligne va ajouter des zeros devant data.id
            img.src = "http://127.0.0.1:5001/images/" + idPokemonWithZeros + ".png" ;

            thumbnailCell.appendChild(img);


         
            

        });
    });
}

toutAfficher();