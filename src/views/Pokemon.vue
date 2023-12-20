<template>
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-2"  >
          <a v-for="row in pokemons" :key="row.id" class="bg-champagne rounded hover:bg-macaroni shadow-xl" :href="row.id">
              <div class="mx-auto relative">
                  <div class="w-full">
                      <img :src="imageUrl+row.id+'.png'" class="mx-auto  w-40" alt="">
                  </div>
                  
                  <p class="text-center capitalize font-bold">{{ row.name }}</p>
              </div>
          </a>
      </div>
  </div> 
</template>

<script >
    import axios from "axios";

    export default {
        data() {
            return {
                pokemons: [],
                imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
            }
        },
        mounted() {
            axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then((response) => {
                let data = response.data
                data.results.forEach(pokemon => {
                    pokemon.id = pokemon.url.split('/')
                        .filter(function(part) { return !!part }).pop();
                    this.pokemons.push(pokemon);
                });
            })
        }
    }
</script>
