<template>
  <div class="w-[80%] md:w-[60%] m-auto">
    <h1 class="text-center mt-16 text-3xl text-brown">MON JOURNAL</h1>
    <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div v-for="log in logs" :key="log.id">
        <LogCard :data="log" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import LogCard from '~/components/logCard.vue'

export default {
  name: 'MealLogs',
  components: { LogCard },
  data() {
    return {
      logs: [],
    }
  },
  mounted() {
    this.getAllLogs()
  },
  methods: {
    getAllLogs() {
      axios.get('/api/foodlog').then((res) => {
        this.logs = res.data
      })
    },
  },
}
</script>

<style></style>
