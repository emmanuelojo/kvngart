<template>
  <section id="services" data-aos="zoom-in" class="mt-10 md:mt-32">
    <p
      class="text-center text-n-golden text-3xl font-semibold my-10 capitalize"
    >
      What we do
    </p>

    <div class="flex justify-center flex-wrap">
      <div
        v-for="(service, idx) in services"
        :key="idx"
        data-aos="slide-up"
        class="bg-white shadow rounded-md h-fit md:w-80 lg:h-96 w-4/5 lg:w-96 mb-10 mx-5"
      >
        <div class="rounded-t-3xl h-64">
          <img
            :src="service.img"
            alt="kvngart"
            class="rounded-t-3xl h-full w-full"
          />
        </div>
        <div class="p-5">
          <p class="text-2xl font-semibold">{{ service.title }}</p>

          <p class="mt-4 text-n-golden">{{ service.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import AOS from "aos";
import { defineComponent, onMounted } from "vue";
import ServicesImage1 from "../assets/images/archi.jpeg";
import ServicesImage5 from "../assets/images/branding.jpeg";
import ServicesImage3 from "../assets/images/graphics.jpeg";
import ServicesImage6 from "../assets/images/illustrations.jpeg";
import ServicesImage4 from "../assets/images/photo.jpeg";
import ServicesImage2 from "../assets/images/portraits.jpeg";

export default defineComponent({
  name: "Services",

  setup() {
    onMounted(() => {
      AOS.init();
    });

    const services = [
      {
        title: "Architecture",
        desc: "2D and 3D architecture sketching, drawings, modeling, animation and renders.",
        img: ServicesImage1,
      },
      {
        title: "Portraits",
        desc: "Digital, ink, pencil hyper-realistic portraits of all sizes.",
        img: ServicesImage2,
      },
      {
        title: "Graphics",
        desc: "For your logo, flyers, posters, ad and all other digital designs.",
        img: ServicesImage3,
      },
      {
        title: "Photography",
        desc: "Get your video shoots and photo shoots for any occasion.",
        img: ServicesImage4,
      },
      {
        title: "Branding",
        desc: "Customize and print any design of your choice.",
        img: ServicesImage5,
      },
      {
        title: "Illustrations",
        desc: "Creative illustrations and digital portraits.",
        img: ServicesImage6,
      },
    ];

    return {
      services,
    };
  },
});
</script>
