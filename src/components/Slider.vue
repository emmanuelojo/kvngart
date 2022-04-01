<template>
  <section>
    <div class="w-full h-125 relative flex justify-center">
      <div
        v-for="(slide, idx) in slides"
        :key="slide.id"
        class="flex w-full h-full rounded-lg absolute left-0 bottom-0"
      >
        <img
          v-if="slide.id === activeImgId"
          :src="` ${slides[activeImgId - 1].img}`"
          alt="kvngart"
          class="w-full h-full rounded-lg"
        />
      </div>

      <div class="absolute bottom-2 flex">
        <div
          v-for="(slide, idx) in slides"
          :key="idx"
          class="flex items-center mx-1"
        >
          <div
            :class="
              slide.id === activeImgId
                ? 'bg-n-golden'
                : 'bg-transparent border border-n-golden'
            "
            class="w-5 h-5 rounded-100 hover:bg-n-golden hover:border hover:border-n-golden cursor-pointer"
            @click="setAsActiveImg(slide)"
          ></div>
        </div>
      </div>

      <div v-for="(slide, idx) in slides" :key="idx">
        <div
          @click="move(-1)"
          class="cursor-pointer text-2xl hover:text-n-golden rounded-full w-6 h-6 absolute bottom-[250px] left-2"
        >
          <i class="fa fa-chevron-left"></i>
        </div>

        <div
          @click="move(1)"
          class="cursor-pointer text-2xl hover:text-n-golden rounded-full w-6 h-6 absolute bottom-[250px] right-2"
        >
          <i class="fa fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SliderImage1 from "../assets/images/slide1.jpg";
import SliderImage2 from "../assets/images/slide2.jpg";
import SliderImage3 from "../assets/images/slide3.jpg";

export default defineComponent({
  name: "Slider",

  setup() {
    const activeImgId = ref<number>(1);

    const slides = ref([
      {
        id: 1,
        img: SliderImage1,
      },
      {
        id: 2,
        img: SliderImage2,
      },
      {
        id: 3,
        img: SliderImage3,
      },
    ]);

    setInterval(() => {
      activeImgId.value++;
      if (activeImgId.value > 3) activeImgId.value = 1;
    }, 5000);

    const setAsActiveImg = (slide: any) => {
      activeImgId.value = slide.id;
    };

    const move = (amount: number) => {
      let newActive;

      const newIndex = activeImgId.value + amount;
      newActive = newIndex;

      if (newActive < slides.value.length) activeImgId.value = newActive;

      if (newActive === slides.value.length) activeImgId.value = newActive;

      if (newActive > slides.value.length) activeImgId.value = 1;

      if (newActive < 0) activeImgId.value = slides.value.length - 1;
    };

    return {
      slides,
      activeImgId,
      setAsActiveImg,
      move,
    };
  },
});
</script>
