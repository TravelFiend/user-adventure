import createPlayer from './createPlayer.js';
import { storePlayer } from '../common/app.js';

const createProfile = document.getElementById('create-profile');

createProfile.addEventListener('submit', () => {
    event.preventDefault();
    const formData = new FormData(createProfile);
    const player = createPlayer(formData);
    storePlayer(player);
    window.location = 'map';
});