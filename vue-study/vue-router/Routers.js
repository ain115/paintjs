import Vue from 'vue';
import VueRouter from 'vue-router';
import NumberBaseball from '../numberBaseball/NumberBaseball';
import ResponseCheck from '../speed/ResponseCheck';
import RockScissorsPaper from '../RockPaperScissors/RockScissorsPaper';
import LottoGenerator from '../rotto/LottoGenerator';
import GameMatcher from './GameMatcher';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/number-baseball', component: NumberBaseball },
    { path: '/response-check', component: ResponseCheck },
    { path: '/rock-scissors-paper', component: RockScissorsPaper },
    { path: '/lotto-generator', component: LottoGenerator },
    { path: '/game/:name', component: GameMatcher } // /game
  ],
});