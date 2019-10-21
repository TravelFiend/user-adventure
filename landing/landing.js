import createPlayer from './createPlayer.js';
import { storePlayer } from '../data/app.js';

const createProfile = document.getElementById('create-profile');

createProfile.addEventListener('submit', () => {
    event.preventDefault();
    const formData = new FormData(createProfile); //study this line
    const player = createPlayer(formData);
    storePlayer(player);
    window.location = 'map';
});