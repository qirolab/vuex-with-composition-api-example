import { createStore } from "vuex";


const store = createStore({
    state:{
        title: "Vuex Store",
        notes: []
    },
    getters:{
        totalNotes(state) {
            return state.notes.length;
        }
    },
    mutations:{
        SAVE_NOTE(state,title) {
            state.notes.push(title);
        }
    },
    actions:{
        saveNote({commit}, title) {
            commit('SAVE_NOTE',title);
        }
    }
});

export default store;