const listaPokemon = document.querySelector("#listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i=1 ; i <= 151; i++){
fetch(URL + i).then((Response) => Response.json())
.then(data => mostrarPokemon(data))
//.then(data => console.log(data))
}

function mostrarPokemon(poke){
    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');
    console.log(tipos);



    const div = document.createElement("div");
    div.classList.add("Pokemon");
    div.innerHTML= `
</div><div class="pokemon">
                    <p class="pokemon-id-back">#25</p>
                    <div class="pokemon-imagen">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="pikachu">
                    </div>
                    <div class="pokemon-info">
                        <div class="nombre-contenedor">
                            <p class="pokemon-id">#25</p>
                            <h2 class="pokemon-nombre">${poke.name}</h2>
                        </div>
                        <div class="pokemon-tipos">
                            <p class="electric tipo">ELECTRIC</p>
                            <p class="fighting tipo">Fighting</p>
                        </div>
                        <div class="pokemon-stats">
                            <p class="stat">4m</p>
                            <p class="stat">60t</p>
                        </div>
                    </div> 
                </div>
    `;
    listaPokemon.append(div);
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






