import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      list: {},
    };
  },

  mutations: {
    setData(state, app) {
      state.list = app;
    },
  },

  actions: {
    steamReq(context) {
      axios
        .get("https://api.steampowered.com/ISteamApps/GetAppList/v2/")
        .then((res) => {
          let tmp = res.data;
          context.commit("setData", tmp);
        });
    },
  },
});

export default store;
