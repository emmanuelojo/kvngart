<template>
  <section id="portfolio" data-aos="zoom-in-up" class="mt-10 md:mt-32">
    <p class="text-center text-n-golden text-3xl font-semibold my-10">
      Portfolio
    </p>

    <div>
      <div
        class="flex lg:flex-wrap lg:justify-center items-center overflow-x-auto gap-2 lg:gap-6"
      >
        <div class="md:mb-10 mx-2 md:mx-5" v-for="(tab, idx) in tabHeaders">
          <p
            data-aos="slide-up"
            class="text-white cursor-pointer w-max"
            :class="
              activeTab === idx
                ? 'bg-n-golden text-black rounded-md px-4 py-1'
                : 'bg-transparent hover:text-n-golden'
            "
            @click="activeTab = idx"
          >
            {{ tab }}
          </p>
        </div>
      </div>

      <div
        v-if="activeTab === 0"
        class="mt-10 flex justify-center flex-wrap gap-5"
      >
        <div
          class="mb-5 mx-5 w-4/5 md:w-80 lg:w-87.5 h-100 rounded-3xl"
          v-for="image in renders"
        >
          <img
            :src="image"
            alt="kvngart"
            data-aos="slide-up"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      <div
        v-if="activeTab === 1"
        class="mt-10 flex justify-center flex-wrap gap-5"
      >
        <div
          class="mb-5 mx-5 w-4/5 md:w-80 lg:w-87.5 h-100 rounded-3xl"
          v-for="image in logos"
        >
          <img
            :src="image"
            alt="kvngart"
            data-aos="fade-up"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      <div
        v-if="activeTab === 2"
        class="mt-10 flex justify-center flex-wrap gap-5"
      >
        <div
          class="mb-5 mx-5 w-4/5 md:w-80 lg:w-87.5 h-100 rounded-3xl"
          v-for="image in flyers"
        >
          <img
            :src="image"
            alt="kvngart"
            data-aos="flip-up"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      <div
        v-if="activeTab === 3"
        class="mt-10 flex justify-center flex-wrap gap-5"
      >
        <div
          class="mb-5 mx-5 w-4/5 md:w-80 lg:w-87.5 h-100 rounded-3xl"
          v-for="image in pencilArt"
        >
          <img
            :src="image"
            alt="kvngart"
            data-aos="zoom-in-up"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      <div
        v-if="activeTab === 4"
        class="mt-10 flex justify-center flex-wrap gap-5"
      >
        <div
          class="mb-5 mx-5 w-4/5 md:w-80 lg:w-87.5 h-100 rounded-3xl"
          v-for="image in inkArt"
        >
          <img
            :src="image"
            alt="kvngart"
            data-aos="slide-up"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      <div
        v-if="activeTab === 5"
        class="mt-10 flex justify-center flex-wrap gap-5"
      >
        <div
          class="mb-5 mx-5 w-4/5 md:w-80 lg:w-87.5 h-100 rounded-3xl"
          v-for="image in photography"
        >
          <img
            :src="image"
            alt="kvngart"
            data-aos="fade-up"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      <div
        v-if="activeTab === 6"
        class="mt-10 flex justify-center flex-wrap gap-5"
      >
        <div
          class="mb-5 mx-5 w-4/5 md:w-80 lg:w-87.5 h-100 rounded-3xl"
          v-for="image in branding"
        >
          <img
            :src="image"
            alt="kvngart"
            data-aos="flip-up"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      <div
        v-if="activeTab === 7"
        class="mt-10 flex justify-center flex-wrap gap-5"
      >
        <div
          class="mb-5 mx-5 w-4/5 md:w-80 lg:w-87.5 h-100 rounded-3xl"
          v-for="image in framing"
        >
          <img
            :src="image"
            alt="kvngart"
            data-aos="zoom-in-up"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      <div
        v-if="activeTab === 8"
        class="mt-10 flex justify-center flex-wrap gap-5"
      >
        <div
          class="mb-5 mx-5 w-4/5 md:w-80 lg:w-87.5 h-100 rounded-3xl"
          v-for="image in paintings"
        >
          <img
            :src="image"
            alt="kvngart"
            data-aos="slide-up"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import AOS from "aos";
import { defineComponent, onMounted, ref } from "vue";
import BrandingImage1 from "../assets/images/b1.jpg";
import BrandingImage2 from "../assets/images/b2.jpg";
import BrandingImage3 from "../assets/images/b3.jpg";
import BrandingImage4 from "../assets/images/b4.jpg";
import BrandingImage5 from "../assets/images/b5.jpg";
import FlyersImage1 from "../assets/images/f1.png";
import FlyersImage2 from "../assets/images/f2.png";
import FlyersImage3 from "../assets/images/f3.png";
import FlyersImage4 from "../assets/images/f4.png";
import FlyersImage5 from "../assets/images/f5.jpg";
import FramingImage1 from "../assets/images/ff1.jpg";
import FramingImage2 from "../assets/images/ff2.png";
import FramingImage3 from "../assets/images/ff3.png";
import FramingImage4 from "../assets/images/ff4.png";
import FramingImage5 from "../assets/images/ff5.jpg";
import InkArtImage1 from "../assets/images/i1.jpg";
import InkArtImage2 from "../assets/images/i2.jpg";
import InkArtImage3 from "../assets/images/i3.jpg";
import InkArtImage4 from "../assets/images/i4.jpg";
import InkArtImage5 from "../assets/images/i5.jpg";
import LogosImage1 from "../assets/images/l1.png";
import LogosImage2 from "../assets/images/l2.png";
import LogosImage3 from "../assets/images/l3.jpg";
import LogosImage4 from "../assets/images/l4.png";
import LogosImage5 from "../assets/images/l5.png";
import PencilArtImage1 from "../assets/images/p1.jpg";
import PencilArtImage2 from "../assets/images/p2.jpg";
import PencilArtImage3 from "../assets/images/p3.jpg";
import PencilArtImage4 from "../assets/images/p4.jpg";
import PencilArtImage5 from "../assets/images/p5.jpg";
import PaintingImage1 from "../assets/images/pa1.jpg";
import PaintingImage2 from "../assets/images/pa2.jpg";
import PaintingImage3 from "../assets/images/pa3.jpg";
import PaintingImage4 from "../assets/images/pa4.jpg";
import PaintingImage5 from "../assets/images/pa5.jpg";
import PhotographyImage1 from "../assets/images/ph1.jpeg";
import PhotographyImage2 from "../assets/images/ph2.jpg";
import PhotographyImage3 from "../assets/images/ph3.jpg";
import PhotographyImage4 from "../assets/images/ph4.jpeg";
import PhotographyImage5 from "../assets/images/ph5.jpeg";
import RendersImage1 from "../assets/images/r1.jpg";
import RendersImage2 from "../assets/images/r2.jpg";
import RendersImage3 from "../assets/images/r3.jpg";
import RendersImage4 from "../assets/images/r4.jpg";
import RendersImage5 from "../assets/images/r5.jpg";

export default defineComponent({
  name: "Portfolio",

  setup() {
    onMounted(() => {
      AOS.init();
    });

    const activeTab = ref(0);

    const tabHeaders = [
      "Renders",
      "Logos",
      "Flyers",
      "Pencil Art",
      "Ink Art",
      "Photography",
      "Branding",
      "Framing",
      "Paintings",
    ];

    const renders = [
      RendersImage1,
      RendersImage2,
      RendersImage3,
      RendersImage4,
      RendersImage5,
    ];

    const logos = [
      LogosImage1,
      LogosImage2,
      LogosImage3,
      LogosImage4,
      LogosImage5,
    ];

    const flyers = [
      FlyersImage1,
      FlyersImage2,
      FlyersImage3,
      FlyersImage4,
      FlyersImage5,
    ];

    const pencilArt = [
      PencilArtImage1,
      PencilArtImage2,
      PencilArtImage3,
      PencilArtImage4,
      PencilArtImage5,
    ];

    const inkArt = [
      InkArtImage1,
      InkArtImage2,
      InkArtImage3,
      InkArtImage4,
      InkArtImage5,
    ];

    const photography = [
      PhotographyImage1,
      PhotographyImage2,
      PhotographyImage3,
      PhotographyImage4,
      PhotographyImage5,
    ];

    const branding = [
      BrandingImage1,
      BrandingImage2,
      BrandingImage3,
      BrandingImage4,
      BrandingImage5,
    ];

    const framing = [
      FramingImage1,
      FramingImage2,
      FramingImage3,
      FramingImage4,
      FramingImage5,
    ];

    const paintings = [
      PaintingImage1,
      PaintingImage2,
      PaintingImage3,
      PaintingImage4,
      PaintingImage5,
    ];

    return {
      activeTab,
      tabHeaders,
      renders,
      logos,
      flyers,
      pencilArt,
      inkArt,
      photography,
      branding,
      framing,
      paintings,
    };
  },
});
</script>

<style scoped></style>
