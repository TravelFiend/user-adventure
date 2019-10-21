export const storePlayer = (player) => {
    const jsonPlayer = JSON.stringify(player);
    localStorage.setItem('player', jsonPlayer);
};

export const getPlayer = () => {
    const jsonPlayer = localStorage.getItem('player');
    if (!jsonPlayer){
        return null;
    }
    const player = JSON.parse(jsonPlayer);
    return player;
};