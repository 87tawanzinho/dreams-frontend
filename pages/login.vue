<template>
  <TopBannerForLogin>
    <div class="flex flex-col items-center justify-center">
      <img src="/logo.png" alt="" />
      <a href="/auth/google" class="mt-12">
        <button
          class="bg-white text-black rounded-lg px-8 py-2 hover:opacity-60 transition-all flex justify-center items-center gap-2 secundary"
        >
          <Icon name="mdi:google" />
          Login com o Google
        </button>
      </a>
      <p class="mt-4">Ou</p>
      <button
        class="mt-4 bg-white text-black rounded-lg px-8 py-2 hover:opacity-60 transition-all flex justify-center items-center gap-2 secundary"
      >
        <Icon name="mdi:email" />
        Login com o E-mail
      </button>
    </div>
  </TopBannerForLogin>
</template>

<style></style>

<script setup>
import TopBannerForLogin from "~/layouts/topBannerForLogin.vue";

definePageMeta({
  layout: "footer-login",
});
</script>
