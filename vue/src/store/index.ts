import axios from "axios";
import { createStore } from "vuex";

const BaseUrl = "http://localhost:3000/";

export default createStore({
  state: {
    localities: [],
    attraction: {},
    locality: {},
    attractions: [],
  },
  getters: {
    attraction(state) {
      return state.attraction;
    },
    attractions(state) {
      return state.attractions;
    },
    locality(state) {
      return state.locality;
    },
    localities(state) {
      return state.localities;
    },
  },
  mutations: {
    FillAttraction(state, res) {
      state.attraction = res;
    },
    FillAttractions(state, res) {
      state.attractions = res;
    },
    FillLocality(state, res) {
      state.locality = res;
    },
    FillLocalities(state, res) {
      state.localities = res;
    },
  },
  actions: {
    async GetAttraction({ commit }, id: number) {
      const res = await axios.get(`${BaseUrl}attractions/${id}`);
      commit("FillAttraction", res.data);
    },
    async GetAttractions({ commit }) {
      const res = await axios.get(`${BaseUrl}attractions`);
      commit("FillAttractions", res.data);
    },
    async GetLocality({ commit }, id: number) {
      const res = await axios.get(`${BaseUrl}localities/${id}`);
      commit("FillLocality", res.data);
    },
    async GetLocalities({ commit }) {
      const res = await axios.get(`${BaseUrl}localities`);
      commit("FillLocalities", res.data);
    },
  },
});
