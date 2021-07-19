<template>
  <div v-if="attraction" class="container">
    <h1 class="text-center">{{ attraction.name }}</h1>
    <h3 class="text-center">{{ attraction.locality[0].name }}</h3>
    <div class="d-flex mt-3">
      <img :src="attraction.image" alt="colosseo" class="main-img" />
      <div class="ms-3">
        <p>
          {{ attraction.description }}
        </p>
        <div class="d-flex justify-content-between">
          <ul class="my-list">
            <li>Dati in tempo reale:</li>
            <li>
              persone presenti in media: {{ attraction.realTimeData.average }}
            </li>
            <li>
              persone presenti nell'ultima ora:
              {{ attraction.realTimeData.last }}
            </li>
            <li>minimo persone presenti: {{ attraction.realTimeData.min }}</li>
            <li>massimo persone presenti: {{ attraction.realTimeData.max }}</li>
            <li>permanenza media: {{ attraction.realTimeData.permanence }}</li>
          </ul>

          <ul class="my-list">
            <li>Orari di apertura:</li>
            <li>lunedì: {{ attraction.openingTime.lunedì }}</li>
            <li>martedì: {{ attraction.openingTime.martedì }}</li>
            <li>mercoledì: {{ attraction.openingTime.mercoledì }}</li>
            <li>giovedì: {{ attraction.openingTime.giovedì }}</li>
            <li>venerdì:{{ attraction.openingTime.venerdì }}</li>
            <li>sabato: {{ attraction.openingTime.sabato }}</li>
            <li>domenica: {{ attraction.openingTime.domenica }}</li>
            <li>{{ attraction.realTimeData.open }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container-fluid mt-5">
      <h1 class="mb-2 text-center">
        Altre attrazioni a {{ attraction.locality[0].name }}
      </h1>
      <div class="row">
        <div
          v-for="reletedAttraction in relatedAttractions"
          :key="reletedAttraction.id"
          class="col-6 my-card mb-5"
          @click="goTo(reletedAttraction.id)"
        >
          <img :src="reletedAttraction.image" :alt="reletedAttraction.name" />
          <div>
            <h2>{{ reletedAttraction.name }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { IAttraction } from "src/models/IAttraction";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "Example",
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    let attraction = ref<IAttraction>();
    let relatedAttractions = ref<IAttraction[]>();

    store.dispatch("GetAttraction", route.params.id).then(() => {
      attraction.value = store.getters.attraction;

      store.dispatch("GetAttractions").then(() => {
        console.log(store.getters.attractions);
        relatedAttractions.value = store.getters.attractions.filter(
          (el: any) => {
            return (
              el.id != attraction.value?.id &&
              el.locality[0].id == attraction.value?.locality[0].id
            );
          }
        );
      });
    });

    function goTo(id: number) {
      router.push({ name: "Attraction", params: { id } });
    }

    return { attraction, relatedAttractions, goTo };
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
