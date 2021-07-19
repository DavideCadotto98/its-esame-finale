<template>
  <div v-if="locality" class="container">
    <h1 class="text-center">{{ locality.name }}</h1>
    <p class="text-center">{{ locality.description }}</p>

    <div class="container-fluid mt-5">
      <div class="row">
        <div
          v-for="attraction in locality.attractions"
          :key="attraction.id"
          class="col-6 my-card mb-5"
          @click="goTo(attraction.id)"
        >
          <img :src="attraction.image" :alt="attraction.name" />
          <div>
            <h2>{{ attraction.name }}</h2>
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
    const route = useRoute();
    const router = useRouter();
    let locality = ref();

    store.dispatch("GetLocality", route.params.id).then(() => {
      locality.value = store.getters.locality;
    });

    function goTo(id: number) {
      router.push({ name: "Attraction", params: { id } });
    }

    return { locality, goTo };
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
