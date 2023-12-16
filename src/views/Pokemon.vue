<template>
  <div class="mx-auto max-w-2xl px-4 py-18 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-4 gap-x-8 gap-y-8"  >
          <a v-for="row in pokemons" :key="row.id" class="bg-champagne hover:bg-macaroni shadow-xl" :href="row.id">
              <div class="mx-auto relative">
                  <div class="w-full">
                      <img :src="imageUrl+row.id+'.png'" class="mx-auto" alt="">
                  </div>
                  
                  <div class="text-center capitalize font-bold">{{ row.name }}</div>
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
            .get('https://pokeapi.co/api/v2/pokemon?limit=20')
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
