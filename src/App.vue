<template>
  <Navbar />
  <Slider />
  <About />
  <Services />
  <Portfolio />
  <Contact />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Portfolio from "./components/Portfolio.vue";
import Services from "./components/Services.vue";
import Slider from "./components/Slider.vue";

export default defineComponent({
  components: { Contact, Navbar, Slider, About, Footer, Services, Portfolio },
});
</script>

<style>
#app {
  background-color: #000;
}
body {
  margin: 0;
  padding: 0;
}
</style>
