<template>
  <swiper
    class="h-60 text-white flex justify-center items-center w-11/12 xl:w-4/12 rounded-2xl my-8"
    :modules="modules"
    :direction="'vertical'"
    :pagination="{
      dynamicBullets: true,
    }"
    :slides-per-view="1"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      >Compartilhe suas experiências de trabalho e ajude outros a encontrar o
      caminho certo.</swiper-slide
    >
    <swiper-slide
      >Divida suas dicas profissionais e faça a diferença na carreira de
      alguém.</swiper-slide
    >
    <swiper-slide
      >A troca de conhecimentos é essencial para crescer no ambiente de
      trabalho.</swiper-slide
    >
    <swiper-slide
      >Inspire-se com as histórias de superação e sucesso de outros
      profissionais.</swiper-slide
    >
    <swiper-slide
      >Estamos juntos nessa jornada profissional, vamos apoiar uns aos
      outros.</swiper-slide
    >
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: white; /* Cor do ícone da navegação */
  background: transparent; /* Fundo transparente */
  width: 20px; /* Largura dos botões */
  height: 50px; /* Altura dos botões */
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: rgb(255, 255, 255); /* Cor ao passar o mouse */
  transform: scale(1.1); /* Efeito de aumento ao passar o mouse */
}

.swiper-pagination-bullet {
  background: gray; /* Cor dos bullets */
}

.swiper-pagination-bullet-active {
  background: rgb(184, 184, 184); /* Cor do bullet ativo */
}

.swiper {
}

.swiper-slide {
  text-align: center;
  font-size: 12px;
  background: #181b19;
  padding: 2px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
