import Vuex from "vuex";
import { Board } from "../interfaces/board";

const store = new Vuex.Store({
  state: {
    list: [
      { title: "To Do", cards: ["Hacer la cama"] },
      { title: "Doing", cards: [] },
      { title: "Done", cards: [] },
    ],
  },
  mutations: {
    addcard(state: Board, opts) {
      const { title, name } = opts;
      state.list.map((e) => e.title === title && e.cards.push(name));
    },
    removecard(state: Board, opts) {
      const { title, name } = opts;
      console.log(name);
      state.list.map(function (e) {
        e.title === title && e.cards.splice(e.cards.indexOf(name), 1);
      });
    },
  },
});

export default store;
