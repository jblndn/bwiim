import {createStore} from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            sports: []
        }
    },
    getters: {
        sportsByGroup(state){
            const group = state.sports.reduce((acc, value) => {

                if (!acc[value.group]) {
                    acc[value.group] = [];
                }
                acc[value.group].push(value);

                return acc;
            }, {});
            return group
        }
    },
    mutations: {
        setSports(state, sports) {
            state.sports = sports
        }
    },
    actions: {
        getSports(context) {
            console.log(process.env)
            axios.get(`https://api.the-odds-api.com/v3/sports/?apiKey=${process.env.VUE_APP_API_KEY}`).then(response => {
                context.commit('setSports', response.data.data)
            }).catch(error => {
                console.log('Error status', error.response.status)
                console.log(error.response.data)
            })
        }
    },
})

export default store
