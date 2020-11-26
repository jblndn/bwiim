import {createStore} from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            sports: [],
            sportsBets: [],
            currentBets: []
        }
    },
    getters: {
        sportsByGroup(state) {
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
        },
        pushBets(state, {bets, leagueId}) {
            state.sportsBets[leagueId] = bets
        },
        initializeExisitingBets(state, bets) {
            state.currentBets = bets
        },
        createBet(state, bet) {
            state.currentBets.push(bet)
        }
    },
    actions: {
        getSports(context) {
            axios.get(`https://api.the-odds-api.com/v3/sports/?apiKey=${process.env.VUE_APP_API_KEY}`).then(response => {
                context.commit('setSports', response.data.data)
            }).catch(error => {
                console.error('Error status', error.response.status, error.response.data)
            })
        },
        setBets(context, {bets, leagueId}) {
            context.commit('pushBets', {bets, leagueId})
        },
        getCurrentBets(context) {
            localStorage.getItem('bets') && context.commit('initializeExisitingBets', JSON.parse(localStorage.getItem('bets')));
        },
        createBet({commit, state}, {selectedOdd, teams, prediction, amount, potentialWin}) {
            let newBet = {selectedOdd, teams, prediction, amount, potentialWin};
            commit('createBet', newBet)
            const stringify = JSON.stringify(state.currentBets);
            localStorage.setItem('bets', stringify);
        }
    },
})

export default store
