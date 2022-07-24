<template>
  <div class="h-[93vh] flex items-center">
    <section class="w-[80%] md:w-[40%] h-[80%] m-auto">
      <div class="bg-white h-[90%] p-8">
        <h1 class="text-center text-dark-green uppercase">{{ day }}</h1>
        <form class="flex flex-col gap-4 mt-4">
          <label class="border-b-2 border-brown text-brown" for="meals"
            >REPAS</label
          >
          <textarea id="meals" name="meals" class="bg-gray-100" rows="4" />
          <label class="border-b-2 border-brown text-brown" for="symptoms"
            >SYMPTOMES</label
          >
          <textarea
            id="symptoms"
            name="symptoms"
            class="bg-gray-100"
            rows="4"
          />
        </form>
      </div>
      <div class="bg-dark-green h-[10%] flex items-center justify-center">
        <button class="text-white">AJOUTER</button>
      </div>
    </section>
  </div>
</template>

<script>
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
    }
  },
}
</script>
