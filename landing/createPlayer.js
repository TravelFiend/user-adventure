function createPlayer(formData) {
    const user = {
        name: formData.get('name'),
        hero: formData.get('hero'),
        govermentStanding: 15,
        money: 25,
        completed: {}
    };
    return user;
}

export default createPlayer;