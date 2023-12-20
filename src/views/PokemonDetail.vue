<template>
    <div class="mx-auto max-w-2xl px-4 py-18 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <div class="">
            <div class="grid sm:grid-cols-3 gap-4">
                <div class="col-span-1 bg-champagne rounded sm:p-4 w-full h-min	pb-4">
                    <h1 class="text-center uppercase font-bold">{{ species }}</h1>
                    <div class="w-full">
                        <img :src="imageUrl+pokemonId+'.png'" alt="" class="mx-auto w-80" srcset="">
                    </div>
                    <div class="grid grid-cols-3 gap-2">
                        <button @click="redirectToHome" class="text-center rounded-lg font-bold py-2 px-4 bg-red-700 hover:bg-red-400 text-red-50 hover:text-black">Back to Home</button>
                        <button v-on:click="catchMyPokemon(species,pokemonId)" class="text-center rounded-lg font-bold py-2 px-4 bg-green-700 hover:bg-green-400 text-green-50 hover:text-black">Catch</button>
                        <button @click="showModal"  class="text-center rounded-lg font-bold py-2 px-4 bg-blue-700 hover:bg-blue-400 text-green-50 hover:text-black">My Pokemon</button>
                    </div>
                </div>
                <div class="col-span-2 bg-champagne rounded sm:p-4">
                    <div>
                        <div class="divide-y divide-dashed">
                            <div>
                                <div class="font-bold">Species</div>
                                <div class="capitalize">{{ species }}</div>
                            </div>
                            <div>
                                <div class="font-bold">Height</div>
                                <div>{{ height / 100 }} m</div>
                            </div>
                            <div>
                                <div class="font-bold">Weight</div>
                                <div>{{ weight }} gram</div>
                            </div>
                            <div>
                                <div class="font-bold">Experience</div>
                                <div>{{ experience }} XP</div>
                            </div>                          
                            <div >
                                <h3 class="font-bold mb-2">Abilities</h3>
                                <div v-for="(ability, index) in abilities" class="flex flex-row gap-x-2">
                                    <div v-for="(row, i) in ability" class="rounded ">
                                        <div class="" :class="{'font-bold text-green-700': ability[i].is_hidden, 'text-red-700': ability[i].is_hidden == false}">{{ row.ability.name }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2">
                                <h3 class="font-bold mb-2">Types</h3>
                                <div class="flex flex-row gap-x-2" v-for="(type, index) in types">
                                    <div v-for="(row) in type" class="rounded outline outline-offset-2 outline-blue-500">
                                        {{ row.type.name }}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">Moves</div>
                                
                                <div class="flex flex-wrap gap-y-4 gap-x-4 mt-2 mb-4" v-for="move in moves">
                                    <div class="outline outline-2 outline-offset-2 rounded" v-for="row in move">
                                        {{ row.move.name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Modal 
        v-show="isModalVisible"
        @close="closeModal">
        <template v-slot:header>
            My Pokemon
        </template>

        <template v-slot:body>
            <div v-for="data in myPokemon ">
                <div v-for="(row, index) in data">
                    {{ row.generate_name}}
                </div>
            </div>
        </template>

        <template v-slot:footer>
            Close
        </template>    
    </Modal>
</template>

<script>
import { useToast } from "vue-toastification";
import axios from "axios";
import Modal from "@/components/modal.vue"

export default {
    setup() {
      const toast = useToast();
      return { toast }
    },
    components: {
      Modal,
    },
    data() {
        return {
            abilities: [],
            types: [],
            moves: [],
            species: '',
            weight: 0,
            height: 0,
            experience: '',
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
            pokemonId: window.location.href.split('/')[3],
            apiUrl: 'https://pokeapi.co/api/v2/pokemon/',
            isModalVisible: false,
            myPokemon: []
        }
    },
    mounted() {
        axios
            .get(this.apiUrl+this.pokemonId)
            .then((response) => {
            let data = response.data
            this.abilities.push(data.abilities)
            this.types.push(data.types)
            this.species    = data.name
            this.weight     = data.weight
            this.height     = data.height
            this.experience = data.base_experience
            this.moves.push(data.moves)
        }),
        axios.get(`http://localhost:8081/api/pokemon/?id=`+this.pokemonId)
        .then((res) => {
            this.myPokemon.push(res.data.data)
        })
    },
    methods: {
        redirectToHome() {
            this.$router.push('/');
        },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        async catchMyPokemon(species, id) {
            try {
                const response = await axios.post(`http://localhost:8081/api/pokemon/catch?id=${id}&species=${species}`,{
                    headers: {
                        "Cache-Control": "no-cache",
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Access-Control-Allow-Origin": "*",
                    },
                })

                this.toast.info(`Horee, ${species} berhasil ditangkap`);
            } catch (error) {
                console.log('error')
            }
        }
    }
}    
    
</script>