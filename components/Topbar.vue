<template>
  <div class="border-b p-2 fixed top-0 w-full" v-if="loggedIn">
    <div class="flex justify-end items-center gap-4">
      <RouterLink to="/home">Inicio</RouterLink>
      <img :src="user.urlPhoto" alt="" class="rounded-full h-8 w-8" />
    </div>
  </div>
</template>

<script setup>
const { user, clear, loggedIn } = useUserSession();
</script>
