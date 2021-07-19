<template>
  <div class="container">
    <h1 class="text-center">Lista località</h1>

    <div class="container-fluid mt-5">
      <div class="row">
        <div
          v-for="locality in localities"
          :key="locality.id"
          class="col-6 my-card mb-5"
          @click="goTo(locality.id)"
        >
          <img :src="locality.attractions[0].image" />
          <div>
            <h2>{{ locality.name }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "Example",
  setup() {
    const store = useStore();
    const router = useRouter();
    let localities = ref();

    store.dispatch("GetLocalities").then(() => {
      localities.value = store.getters.localities;
    });

    function goTo(id: number) {
      router.push({ name: "Locality", params: { id } });
    }

    return { localities, goTo };
  },
});
</script>

<style scoped lang="scss">
.main-img {
  width: 500px;
}

ul li:first-child {
  font-weight: bold;
}
</style>
