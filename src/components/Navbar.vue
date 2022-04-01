<template>
  <section id="#">
    <nav
      class="fixed w-full flex justify-between items-center bg-black px-5 py-1 z-10"
    >
      <div class="w-16 h-16 md:w-20 md:h-20">
        <img :src="LogoImage" alt="logo" class="w-full h-full object-cover" />
      </div>

      <div class="md:hidden text-white" @click="toggleMenu">
        <i v-if="isToggled" class="fa fa-times text-2xl"></i>
        <i v-else class="fa fa-bars text-2xl"></i>
      </div>

      <div class="hidden md:flex md:justify-around">
        <a
          @click="setActive(item.name)"
          v-for="item in navbarItems"
          :key="item.name"
          class="mx-5 px-3 py-1 cursor-pointer text-n-golden hover:bg-white hover:rounded-md hover:transition-duration: 150ms"
          :href="item.link"
          :class="
            activeLink === item.name ? 'bg-white text-n-golden rounded-md' : ''
          "
        >
          {{ item.name }}
        </a>
      </div>
    </nav>

    <div
      v-if="isToggled"
      class="fixed w-full z-10 mt-16 grid place-content-center md:hidden bg-black pt-20 pb-10 text-center"
    >
      <a
        @click="setActive(item.name)"
        v-for="item in navbarItems"
        :key="item.name"
        class="mx-5 my-1 px-3 py-1 cursor-pointer text-n-golden hover:bg-white hover:rounded-md hover:transition-duration: 150ms"
        :href="item.link"
        :class="
          activeLink === item.name ? 'bg-white text-n-golden rounded-md' : ''
        "
      >
        {{ item.name }}
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LogoImage from "../assets/images/logo.jpg";

export default defineComponent({
  name: "Navbar",

  setup() {
    const isToggled = ref(false);

    const navbarItems = [
      {
        name: "Home",
        icon: "home",
        link: "#",
      },
      {
        name: "About",
        icon: "th-large",
        link: "#about",
      },
      {
        name: "Services",
        icon: "briefcase",
        link: "#services",
      },
      {
        name: "Portfolio",
        icon: "Portfolio",
        link: "#portfolio",
      },
      {
        name: "Contact",
        icon: "envelope",
        link: "#contact",
      },
    ];

    const activeLink = ref("Home");

    const setActive = (link: string) => {
      activeLink.value = link;
      isToggled.value = false;
    };

    const toggleMenu = () => {
      isToggled.value = !isToggled.value;
    };

    return {
      LogoImage,
      isToggled,
      navbarItems,
      activeLink,
      setActive,
      toggleMenu,
    };
  },
});
</script>

<style scoped></style>
