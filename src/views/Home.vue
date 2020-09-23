<template>
  <main>
    <DevMode />
    <div
      class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
    >
      <img
        src="../assets/logo.svg"
        class="lg:w-1/6 md:w-2/6 xl:w-3/6 mb-10 rounded"
        alt="logo"
      />
      <div class="flex flex-row gap-3">
        <router-link
          to="/About"
          class="bg-orange-600 text-white px-8 py-2 rounded-lg"
          >About</router-link
        >
        <a
          href="http://medium.com/t6tg"
          class="bg-white border-orange-600 border-2 text-orange-600
          hover:bg-orange-600 hover:text-white px-8 py-2 rounded-lg "
          >Blog</a
        >
      </div>
    </div>
  </main>
</template>

<script>
import DevMode from "../components/DevMode";
export default {
  name: "Home",
  components: {
    DevMode,
  },
};
</script>
