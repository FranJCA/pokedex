const listaPokemon = document.querySelector("#listaPokemon")
let URL = "https://pokeapi.co/api/v2/pokemon/"

for (let i=1 ; i <= 151; i++){
fetch(URL + i).then((Response) => response.json())
.then(data => console.log(data))

}


function mostrarPokemon(data){
    const div = document.createElement("div");
    div.classList.add("Pokemon");
    div.innerHTML= `
    
    asdasdasd
    asdas
    das
    da
    sd
    asd
    as
    d
    asd
    as
    d
    asd
    a
    sd
    asd
    
    `
}




// </div><div class="pokemon">
//                     <p class="pokemon-id-back">#25</p>
//                     <div class="pokemon-imagen">
//                         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="pikachu">
//                     </div>
//                     <div class="pokemon-info">
//                         <div class="nombre-contenedor">
//                             <p class="pokemon-id">#25</p>
//                             <h2 class="pokemon-nombre">pikachu</h2>
//                         </div>
//                         <div class="pokemon-tipos">
//                             <p class="electric tipo">ELECTRIC</p>
//                             <p class="fighting tipo">Fighting</p>
//                         </div>
//                         <div class="pokemon-stats">
//                             <p class="stat">4m</p>
//                             <p class="stat">60t</p>
//                         </div>
//                     </div> 
//                 </div>






