import { getPlayer } from '../common/app.js';

const player = getPlayer();

if (!player){
    window.location = './';
}