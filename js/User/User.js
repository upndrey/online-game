let User = function (login, pass, health, money) {
    this.login = login;
    this.password = pass;
    this.health = health;
    this.money = {
        'rubles': money.rubles,
        'dollars': money.dollars,
        'euros': money.euros
    };
    this.hp = {
        'head': 0,
        'chest': 0,
        'stomach': 0,
        'left arm': 0,
        'right arm': 0,
        'left leg': 0,
        'right leg': 0,
    };
};

export default User;
