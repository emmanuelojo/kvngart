<template>
  <section
    id="contact"
    data-aos="zoom-in-down"
    class="bg-black w-full md:w-96 mt-10 mx-auto"
  >
    <div class="my-10 grid gap-5">
      <p class="text-3xl text-center text-n-golden font-semibold">
        Connect Via
      </p>
      <div class="text-white flex justify-center gap-5">
        <a
          href="https://www.facebook.com/profile.php?I'd=100007778868023"
          target="_blank"
          ><i
            class="hover:text-n-golden hover:scale-x-100 text-xl fa fa-facebook"
          ></i
        ></a>
        <a href="https://instagram.com/i__kvng" target="_blank"
          ><i
            class="hover:text-n-golden hover:scale-x-100 text-xl fa fa-instagram"
          ></i
        ></a>
        <a href="https://twitter.com/i__KVNG" target="_blank"
          ><i
            class="hover:text-n-golden hover:scale-x-100 text-xl fa fa-twitter"
          ></i
        ></a>
        <a href="https://wa.me/+2349025639493" target="_blank"
          ><i
            class="hover:text-n-golden hover:scale-x-100 text-xl fa fa-whatsapp"
          ></i
        ></a>
        <a
          href="https://www.linkedin.com/in/caleb-ojo-3b3b141b2"
          target="_blank"
          ><i
            class="hover:text-n-golden hover:scale-x-100 text-xl fa fa-linkedin"
          ></i
        ></a>
        <a href="mailto:princekayleb7@gmail.com" target="_blank"
          ><i
            class="hover:text-n-golden hover:scale-x-100 text-xl fa fa-envelope"
          ></i
        ></a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import AOS from "aos";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Contact",

  setup() {
    onMounted(() => {
      AOS.init();
    });

    const isSent = ref(false);

    const name = ref("");

    const email = ref("");

    const message = ref("");

    const handleSubmit = () => {
      isSent.value = true;

      setTimeout(() => {
        isSent.value = false;
      }, 3000);

      name.value = "";
      email.value = "";
      message.value = "";
    };

    return {
      isSent,
      name,
      email,
      message,
      handleSubmit,
    };
  },
});
</script>

<style>
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}
</style>
