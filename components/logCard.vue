<template>
  <div class="bg-white p-8">
    <h1 class="text-center text-dark-green uppercase">{{ day }}</h1>
    <section class="flex flex-col gap-4 mt-4">
      <div class="border-b-2 border-brown text-brown">REPAS</div>
      <div id="meals" name="meals">{{ data.meals }}</div>
      <div class="border-b-2 border-brown text-brown">SYMPTOMES</div>
      <div id="meals" name="meals">{{ data.symptoms }}</div>
    </section>
    <button type="buton">Supprimer</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LogCard',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      day: '',
    }
  },
  mounted() {
    this.handleDateFormat()
  },
  methods: {
    handleDateFormat() {
      this.day = new Date(this.data.createdAt).toISOString().slice(0, 10)
      return this.day
    },
    handleDelete() {
      const id = this.data.id
      axios.delete(`/foodlog/${id}`)
    },
  },
}
</script>

<style></style>
