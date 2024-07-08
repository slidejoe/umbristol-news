<script setup>
defineProps(['img', 'name', 'caption'])
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
</script>

<style scoped>
img.person {
  max-width: 160px;
  margin: auto;
  border-radius: 50%;

  margin-bottom: 1em;
}

h2 {
  font-size: 1em;
  font-weight: 600;
}

p {
  margin: 0;
}
</style>

<template>
  <div>
    <img :src="baseUrl + img" :alt="name" class="person" />
    <h2>{{ name }}</h2>
    <p v-if="caption">{{ caption }}</p>
  </div>
</template>