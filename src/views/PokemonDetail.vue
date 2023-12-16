<template>
    <div class="mx-auto max-w-2xl px-4 py-18 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <div class="">
            <div class="grid grid-cols-3 gap-4">
                <div class="col-span-1 bg-champagne sm:p-4">
                    <h1 class="text-center uppercase font-bold">{{ species }}</h1>
                    <div class="w-full">
                        <img :src="imageUrl+pokemonId+'.png'" alt="" class="mx-auto" srcset="">
                    </div>
                </div>
                <div class="col-span-2 bg-champagne sm:p-4">
                    <h3 class="font-bold mb-2">Abilities</h3>
                    <div class="flex flex-row gap-x-2">
                        <p class="rounded outline outline-offset-2 outline-blue-500" v-for="(row, index) in abilities">
                        {{ row[index].ability.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios  from "axios";
export default {
    data() {
        return {
            abilities: [],
            type: [],
            species: '',
            weight: 0,
            height: 0,
            experience: '',
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
            pokemonId: window.location.href.split('/')[3],
            apiUrl: 'https://pokeapi.co/api/v2/pokemon/'
        }
    },
    mounted() {
        axios
        .get(this.apiUrl+this.pokemonId)
        .then((response) => {
            let data = response.data
            this.abilities.push(data.abilities)
            this.type.push(data.type)
            this.species    = data.name
            this.weight     = data.weight
            this.height     = data.height
            this.experience = data.experience
            console.log(data)
        })
    }
}    
    
</script>