<template>
  <div class="bg-n-golden py-3 bottom-0">
    <p
      class="text-xs md:text-base flex text-center justify-center items-center"
    >
      Copyright <span class="mx-1"> <i class="fa fa-copyright"></i></span>

      2022 |
      <span class="mx-1">
        <a href="https://emmanuelojo.github.io/" target="_blank"
          >Emmanuel Ojo</a
        ></span
      >
      | All Rights Reserved.
    </p>

    <div class="relative">
      <transition name="fade">
        <div
          id="pagetop"
          class="absolute right-2 md:right-4 bottom-16 bg-n-golden/[0.4] hover:bg-n-golden/[0.7] rounded-lg px-3 pt-1 pb-1.5 cursor-pointer"
          @click="toTop"
        >
          <i
            class="text-3xl flex justify-center items-center text-white fa fa-angle-up"
          ></i>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",

  setup() {
    const toTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return { toTop };
  },
});
</script>
