<template>
  <section id="about" data-aos="zoom-in" class="mx-auto mt-10 md:mt-32">
    <p class="text-center text-n-golden text-3xl font-semibold my-10">
      About Me
    </p>
    <div
      class="w-auto md:w-96 h-full mx-5 md:mx-auto bg-white shadow rounded-lg relative p-4"
    >
      <div
        class="bg-black text-white rounded-lg px-2 py-1 absolute top-3 right-3"
      >
        <p class="text-xs flex justify-center items-center">+2 years</p>
      </div>

      <div class="mt-8 grid gap-2 place-content-center justify-center">
        <div class="w-25 h-25 rounded-full">
          <img
            src="../assets/images/profile2.jpg"
            alt="kvng"
            class="w-full h-full object-cover rounded-full"
          />
        </div>
        <div class="grid place-content-center justify-center text-center">
          <p class="text-xl font-semibold">Caleb Ojo</p>
          <p class="text-sm text-n-gray-text font-normal">Founder</p>
        </div>
      </div>

      <div class="my-5 text-center">
        <p class="text-sm">
          I am a creative entrepreneur, with skills in graphics design,
          architecture design and photography.
        </p>

        <p class="text-sm">
          I bring your ideas and briefs to life as beautiful and creative
          designs.
        </p>
      </div>

      <div class="flex justify-center gap-5">
        <a href="https://twitter.com/i__KVNG" target="_blank"
          ><i class="hover:text-n-golden text-base fa fa-twitter"></i
        ></a>

        <a
          href="https://www.facebook.com/profile.php?I%27d=100007778868023"
          target="_blank"
          ><i class="hover:text-n-golden text-base fa fa-facebook"></i>
        </a>
        <a href="https://instagram.com/i__kvng" target="_blank"
          ><i class="hover:text-n-golden text-base fa fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/caleb-ojo-3b3b141b2"
          target="_blank"
          ><i class="hover:text-n-golden text-base fa fa-linkedin"></i>
        </a>
        <a href="mailto:princekayleb7@gmail.com" target="_blank"
          ><i
            class="hover:text-n-golden text-base hover:scale-x-100 fa fa-envelope"
          ></i
        ></a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import AOS from "aos";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "About",

  setup() {
    onMounted(() => {
      AOS.init();
    });
  },
});
</script>

<style scoped></style>
