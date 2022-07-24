<template>
  <div class="h-[93vh] flex items-center">
    <section class="w-[80%] md:w-[40%] h-[80%] m-auto">
      <div class="bg-white h-[90%] p-8">
        <h1 class="text-center text-dark-green uppercase">{{ day }}</h1>
        <form
          id="log-form"
          method="POST"
          class="flex flex-col gap-4 mt-4"
          @submit.prevent="handlePost"
        >
          <label class="border-b-2 border-brown text-brown" for="meals"
            >REPAS</label
          >
          <textarea
            id="meals"
            v-model="foodlog.meals"
            name="meals"
            class="bg-gray-100"
            rows="4"
            required
          />
          <label class="border-b-2 border-brown text-brown" for="symptoms"
            >SYMPTOMES</label
          >
          <textarea
            id="symptoms"
            v-model="foodlog.symptoms"
            name="symptoms"
            class="bg-gray-100"
            rows="4"
          />
          <input id="date" v-model="foodlog.createdAt" type="date" />
          <div class="bg-dark-green h-[10%] flex items-center justify-center">
            <button
              class="text-white inline w-full cursor-pointer"
              type="submit"
              form="log-form"
            >
              AJOUTER
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

const weekday = [
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
]
const d = new Date()
const day = weekday[d.getDay()]

export default {
  name: 'IndexPage',
  data() {
    return {
      day,
      foodlog: { meals: '', symptoms: '', createdAt: new Date() },
    }
  },
  methods: {
    handlePost() {
      axios.post('/api/foodlog', this.foodlog).catch(console.error)
      this.foodlog = ''
    },
  },
}
</script>
