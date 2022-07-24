<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <nav class="bg-dark-green py-4 text-white">
      <ul class="flex justify-end gap-6 mr-9">
        <li><NuxtLink to="/" class="cursor-pointer">Accueil</NuxtLink></li>
        <li><NuxtLink to="/">Journal</NuxtLink></li>
      </ul>
    </nav>
    <Nuxt />
  </div>
</template>
