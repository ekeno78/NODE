// serveur backend Pokedex

console.log("Salut");

const fs = require('fs')

// définir l'emplacement des fichiers de bdd
const POKEDEX_SRC = "./DATA/pokedex.json";

// définir emplacement des images
const image_src = "./FILES/images";

// définir un port
const port = 5001;

// lancer un serveur express sur un port défini
const express = require('express');
const app = express();

// lancement du serveur et attendre
app.listen(port,
    '127.0.0.1',
    () => {
        console.log('Le serveur pokedex est en écoute sur le port :' + port);
    }
)

// Crée la route qui renvoie tout
app.get(
    '/',
    findHasardPokemon
)

//fonction

function findAllPokemon(request, response) {
    // lecture
    let data = fs.readFileSync(POKEDEX_SRC);

    // analyse du JSON
    let pokedex = JSON.parse(data);

    // renvoie tout le Json 
    response.send(pokedex);
}

app.get(
    '/hasard',
    findHasardPokemon
)

function findHasardPokemon(request, response) {

    // lecture
    let data = fs.readFileSync(POKEDEX_SRC);

    // analyse du JSON
    let pokedex = JSON.parse(data);
    
    let idMin = 1;

    let idMax = pokedex.length;

    let hasard = Math.floor(Math.random() * idMax) + 1;

    response.send(pokedex[hasard]);

}